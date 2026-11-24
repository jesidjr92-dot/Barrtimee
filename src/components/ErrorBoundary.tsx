import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#0a0a0b] px-6 text-center text-white">
          <div className="max-w-md rounded-[4px] border border-white/[0.1] bg-[#121214] p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Barrtime · Aviso
            </p>
            <h2 className="mt-2 text-[22px] font-light text-white">
              Ocurrió un inconveniente temporal
            </h2>
            <p className="mt-3 text-[14px] font-light leading-[1.6] text-[#c4c7c8]">
              No pudimos completar esta acción en este momento. Recarga la página para continuar navegando por el catálogo.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 h-10 rounded-[4px] bg-white px-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0a0a0b] hover:bg-[#e2e8f0] cursor-pointer"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
