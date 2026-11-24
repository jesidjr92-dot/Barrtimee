# Security Specification — Barrtime Reseñas (Firestore)

## 1. Data Invariants
1. Every document in `/reviews/{reviewId}` must have a valid document ID matching `^[a-zA-Z0-9_-]+$` with length `<= 128`.
2. Every review must strictly contain ONLY the 6 allowed keys: `authorName`, `watchName`, `rating`, `comment`, `isPublic`, `createdAt`.
3. `authorName` must be a string between 2 and 60 characters; `watchName` must be a string between 2 and 100 characters; `comment` must be a string between 3 and 600 characters.
4. `rating` must be an integer between `1` and `5`.
5. `isPublic` must be `true` on creation so only explicitly public reviews enter the storefront feed, and `list` queries are enforced by `existing().isPublic == true`.
6. `createdAt` must strictly equal `request.time` (server timestamp).
7. Reviews are immutable (`allow update: if false;`) and may only be deleted by the verified store administrator (`jesidjr92@gmail.com` with `email_verified == true`).
8. Zero PII (`email`, `phone`, `address`) is stored in `/reviews/{reviewId}`.

## 2. Dirty Dozen Adversarial Payloads (Must All Return PERMISSION_DENIED)
1. **Ghost Field Injection**: `{ authorName: "Ana", watchName: "Rolex", rating: 5, comment: "Excelente", isPublic: true, createdAt: SERVER_TIME, isAdmin: true }` -> Rejected by `hasOnly(...)`.
2. **Missing Required Field**: `{ authorName: "Ana", rating: 5, comment: "Excelente", isPublic: true, createdAt: SERVER_TIME }` -> Rejected by `hasAll(...)`.
3. **Client-Spoofed Timestamp**: `{ ..., createdAt: "2020-01-01T00:00:00Z" }` -> Rejected by `createdAt == request.time`.
4. **Oversized Comment (Denial of Wallet)**: `comment` of 2,000 chars -> Rejected by `comment.size() <= 600`.
5. **Empty / 1-Char Author Name**: `authorName: "A"` -> Rejected by `authorName.size() >= 2`.
6. **Out-of-Range Rating (0 or 6)**: `rating: 6` or `rating: 0` -> Rejected by `rating >= 1 && rating <= 5`.
7. **Float Rating**: `rating: 4.5` -> Rejected by `rating is int`.
8. **Hidden Non-Public Record**: `isPublic: false` -> Rejected by `incoming().isPublic == true`.
9. **ID Poisoning**: Creating `/reviews/bad.id$with*chars` -> Rejected by `isValidId(reviewId)`.
10. **Visitor Update / Tamper**: `updateDoc` changing another user's `comment` or `rating` -> Rejected by `allow update: if false;`.
11. **Non-Admin Delete**: Any unauthenticated visitor or non-admin user attempting `deleteDoc` -> Rejected by `isAdmin()`.
12. **Unverified Admin Email Spoof**: User token with `email == 'jesidjr92@gmail.com'` and `email_verified == false` attempting `deleteDoc` -> Rejected by `request.auth.token.email_verified == true`.
