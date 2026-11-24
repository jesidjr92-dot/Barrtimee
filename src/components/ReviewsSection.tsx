import {
  Check,
  LogIn,
  LogOut,
  MessageSquare,
  Send,
  Star,
  Trash2,
} from 'lucide-react';
import {
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
} from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { TIMEPIECES, WOMEN_TIMEPIECES } from '../data/horologyData';
import {
  auth,
  db,
  googleProvider,
  handleFirestoreError,
  OperationType,
} from '../firebase';

const ADMIN_EMAIL = 'jesidjr92@gmail.com';
const AUTHOR_MIN_LEN = 2;
const AUTHOR_MAX_LEN = 60;
const WATCH_NAME_MIN_LEN = 2;
const WATCH_NAME_MAX_LEN = 100;
const COMMENT_MIN_LEN = 3;
const COMMENT_MAX_LEN = 600;
const GENERAL_EXPERIENCE_LABEL = 'Experiencia General en Barrtime';

interface ReviewRecord {
  id: string;
  authorName: string;
  watchName: string;
  rating: number;
  comment: string;
  isPublic: boolean;
  createdAtMs: number;
  createdAtLabel: string;
}

function formatReviewDate(ts: unknown): { ms: number; label: string } {
  if (ts instanceof Timestamp) {
    const date = ts.toDate();
    return {
      ms: date.getTime(),
      label: new Intl.DateTimeFormat('es-CO', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date),
    };
  }
  return {
    ms: Date.now(),
    label: 'Reciente',
  };
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [watchName, setWatchName] = useState(GENERAL_EXPERIENCE_LABEL);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [fatalError, setFatalError] = useState<Error | null>(null);

  if (fatalError) {
    throw fatalError;
  }

  const watchOptions = useMemo(() => {
    const names = [...TIMEPIECES, ...WOMEN_TIMEPIECES].map((w) => w.name);
    return [GENERAL_EXPERIENCE_LABEL, ...names];
  }, []);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    const reviewsQuery = query(
      collection(db, 'reviews'),
      where('isPublic', '==', true),
      limit(100)
    );

    const unsubscribe = onSnapshot(
      reviewsQuery,
      (snapshot) => {
        const next: ReviewRecord[] = snapshot.docs.map((snap) => {
          const data = snap.data();
          const { ms, label } = formatReviewDate(data.createdAt);
          return {
            id: snap.id,
            authorName:
              typeof data.authorName === 'string' ? data.authorName : 'Cliente',
            watchName:
              typeof data.watchName === 'string'
                ? data.watchName
                : GENERAL_EXPERIENCE_LABEL,
            rating:
              typeof data.rating === 'number'
                ? Math.min(5, Math.max(1, Math.round(data.rating)))
                : 5,
            comment: typeof data.comment === 'string' ? data.comment : '',
            isPublic: Boolean(data.isPublic),
            createdAtMs: ms,
            createdAtLabel: label,
          };
        });

        next.sort((a, b) => b.createdAtMs - a.createdAtMs);
        setReviews(next);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        try {
          handleFirestoreError(error, OperationType.LIST, 'reviews');
        } catch (wrapped) {
          setFatalError(
            wrapped instanceof Error ? wrapped : new Error(String(wrapped))
          );
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return null;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const isAdmin =
    Boolean(currentUser?.emailVerified) &&
    currentUser?.email?.toLowerCase() === ADMIN_EMAIL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSuccessNotice(false);

    const cleanAuthor = authorName.trim().slice(0, AUTHOR_MAX_LEN);
    const cleanWatch = (watchName.trim() || GENERAL_EXPERIENCE_LABEL).slice(
      0,
      WATCH_NAME_MAX_LEN
    );
    const cleanComment = comment.trim().slice(0, COMMENT_MAX_LEN);
    const cleanRating = Math.min(5, Math.max(1, Math.round(rating)));

    if (cleanAuthor.length < AUTHOR_MIN_LEN) {
      setFormError('Ingresa tu nombre (mínimo 2 caracteres).');
      return;
    }
    if (cleanWatch.length < WATCH_NAME_MIN_LEN) {
      setFormError('Selecciona un reloj o experiencia válida.');
      return;
    }
    if (cleanComment.length < COMMENT_MIN_LEN) {
      setFormError('Escribe un comentario de al menos 3 caracteres.');
      return;
    }

    setSubmitting(true);
    try {
      const reviewRef = doc(collection(db, 'reviews'));
      await setDoc(reviewRef, {
        authorName: cleanAuthor,
        watchName: cleanWatch,
        rating: cleanRating,
        comment: cleanComment,
        isPublic: true,
        createdAt: serverTimestamp(),
      });

      setAuthorName('');
      setWatchName(GENERAL_EXPERIENCE_LABEL);
      setRating(5);
      setComment('');
      setSuccessNotice(true);
      window.setTimeout(() => setSuccessNotice(false), 4000);
    } catch (error) {
      setFormError(
        'No se pudo publicar tu reseña en este momento. Intenta nuevamente.'
      );
      try {
        handleFirestoreError(error, OperationType.CREATE, 'reviews');
      } catch {
        // Error estructurado ya registrado en consola
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!isAdmin) return;
    setDeletingId(reviewId);
    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
    } catch (error) {
      try {
        handleFirestoreError(
          error,
          OperationType.DELETE,
          `reviews/${reviewId}`
        );
      } catch (wrapped) {
        setFatalError(
          wrapped instanceof Error ? wrapped : new Error(String(wrapped))
        );
      }
    } finally {
      setDeletingId(null);
    }
  };

  const handleAdminAuth = async () => {
    try {
      if (currentUser) {
        await signOut(auth);
      } else {
        await signInWithPopup(auth, googleProvider);
      }
    } catch {
      // ignorar cierre de popup por el usuario
    }
  };

  const activeStarValue = hoveredRating ?? rating;

  return (
    <section
      id="resenas"
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Encabezado de sección */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Comunidad Barrtime
            </p>
            <h2 className="mt-2 text-[28px] font-light leading-[1.2] tracking-[-0.025em] text-white md:text-[40px]">
              Reseñas y Comentarios
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3 rounded-[4px] border border-white/[0.08] bg-[#121214] px-4 py-2.5">
              <Star
                className="h-4 w-4 fill-[#e2e8f0] text-[#e2e8f0]"
                aria-hidden="true"
              />
              <span className="font-mono text-[14px] text-white tabular-nums">
                {averageRating ? `${averageRating} / 5.0` : 'Sin calificaciones'}
              </span>
              <span className="text-[12px] text-[#94a3b8] tabular-nums">
                ({reviews.length}{' '}
                {reviews.length === 1 ? 'reseña' : 'reseñas'})
              </span>
            </div>

            <button
              type="button"
              onClick={handleAdminAuth}
              className="inline-flex h-9 items-center gap-2 rounded-[4px] border border-white/[0.1] bg-transparent px-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#94a3b8] transition-colors hover:border-white/30 hover:text-white cursor-pointer"
            >
              {currentUser ? (
                <>
                  <LogOut className="h-3 w-3" aria-hidden="true" />
                  <span>{isAdmin ? 'Salir Moderación' : 'Cerrar Sesión'}</span>
                </>
              ) : (
                <>
                  <LogIn className="h-3 w-3" aria-hidden="true" />
                  <span>Moderación</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contenido principal: Formulario izquierda + Lista derecha */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Formulario para dejar reseña */}
          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="specular-card rounded-[4px] p-6 md:p-7"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare
                  className="h-4 w-4 text-[#e2e8f0]"
                  aria-hidden="true"
                />
                <h3 className="text-[17px] font-normal text-white">
                  Comparte tu experiencia
                </h3>
              </div>
              <p className="mt-1.5 text-[13px] font-light leading-[1.6] text-[#94a3b8]">
                Deja tu calificación y comentario sobre nuestros relojes o la atención recibida.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="review-author"
                    className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                  >
                    Tu Nombre
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    required
                    minLength={AUTHOR_MIN_LEN}
                    maxLength={AUTHOR_MAX_LEN}
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ej. Andrés Gómez"
                    className="mt-1.5 h-10 w-full rounded-[4px] border border-white/[0.1] bg-[#0a0a0b] px-3 text-[13px] text-white placeholder-[#94a3b8]/50 focus:border-[#e2e8f0] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review-watch"
                    className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                  >
                    Reloj o Experiencia
                  </label>
                  <select
                    id="review-watch"
                    value={watchName}
                    onChange={(e) => setWatchName(e.target.value)}
                    className="mt-1.5 h-10 w-full rounded-[4px] border border-white/[0.1] bg-[#0a0a0b] px-3 text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                  >
                    {watchOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Calificación
                  </span>
                  <div
                    className="mt-2 flex items-center gap-1.5"
                    role="radiogroup"
                    aria-label="Calificación en estrellas"
                  >
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const filled = starValue <= activeStarValue;
                      return (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoveredRating(starValue)}
                          onMouseLeave={() => setHoveredRating(null)}
                          aria-label={`${starValue} ${
                            starValue === 1 ? 'estrella' : 'estrellas'
                          }`}
                          aria-checked={rating === starValue}
                          role="radio"
                          className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] transition-colors hover:border-white/30 cursor-pointer"
                        >
                          <Star
                            className={`h-4 w-4 transition-colors ${
                              filled
                                ? 'fill-[#e2e8f0] text-[#e2e8f0]'
                                : 'text-[#94a3b8]/40'
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                    <span className="ml-2 font-mono text-[12px] text-[#e2e8f0] tabular-nums">
                      {rating}/5
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="review-comment"
                      className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                    >
                      Tu Reseña o Comentario
                    </label>
                    <span className="font-mono text-[10px] text-[#94a3b8] tabular-nums">
                      {comment.length}/{COMMENT_MAX_LEN}
                    </span>
                  </div>
                  <textarea
                    id="review-comment"
                    required
                    minLength={COMMENT_MIN_LEN}
                    maxLength={COMMENT_MAX_LEN}
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos qué tal te pareció la calidad, el acabado o la atención..."
                    className="mt-1.5 w-full resize-y rounded-[4px] border border-white/[0.1] bg-[#0a0a0b] p-3 text-[13px] leading-[1.6] text-white placeholder-[#94a3b8]/50 focus:border-[#e2e8f0] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p className="rounded-[4px] border border-red-500/30 bg-red-950/30 px-3 py-2 text-[12px] text-red-200">
                    {formError}
                  </p>
                )}

                {successNotice && (
                  <div className="flex items-center gap-2 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] px-3 py-2 text-[12px] text-[#25d366]">
                    <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>¡Gracias! Tu reseña quedó publicada.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-white px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] disabled:opacity-60 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    {submitting ? 'Publicando...' : 'Publicar Reseña'}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Lista en tiempo real de reseñas guardadas */}
          <div className="lg:col-span-7">
            {loading ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((skeleton) => (
                  <div
                    key={skeleton}
                    className="h-44 animate-pulse rounded-[4px] border border-white/[0.08] bg-[#121214]"
                  />
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[4px] border border-dashed border-white/[0.12] bg-[#121214]/40 p-8 text-center">
                <MessageSquare
                  className="mb-3 h-7 w-7 text-[#94a3b8]/50"
                  aria-hidden="true"
                />
                <h3 className="text-[17px] font-normal text-white">
                  Aún no hay reseñas publicadas
                </h3>
                <p className="mt-2 max-w-sm text-[13px] font-light leading-[1.6] text-[#94a3b8]">
                  Sé la primera persona en dejar su calificación y comentario usando el formulario.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <AnimatePresence initial={false}>
                  {reviews.map((review) => (
                    <motion.article
                      key={review.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="specular-card flex flex-col justify-between rounded-[4px] p-5"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((starIdx) => (
                              <Star
                                key={starIdx}
                                className={`h-3.5 w-3.5 ${
                                  starIdx <= review.rating
                                    ? 'fill-[#e2e8f0] text-[#e2e8f0]'
                                    : 'text-[#94a3b8]/30'
                                }`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#94a3b8]">
                              {review.createdAtLabel}
                            </span>
                            {isAdmin && (
                              <button
                                type="button"
                                disabled={deletingId === review.id}
                                onClick={() => handleDeleteReview(review.id)}
                                aria-label={`Eliminar reseña de ${review.authorName}`}
                                className="text-[#94a3b8] hover:text-red-400 cursor-pointer"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        <p className="mt-3 text-[14px] font-light leading-[1.65] text-[#e5e2e3] break-words">
                          “{review.comment}”
                        </p>
                      </div>

                      <div className="mt-4 border-t border-white/[0.08] pt-3">
                        <p className="text-[13px] font-medium text-white truncate">
                          {review.authorName}
                        </p>
                        <p className="mt-0.5 text-[11px] font-light text-[#94a3b8] truncate">
                          {review.watchName}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
