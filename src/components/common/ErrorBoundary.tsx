import React, { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends (React.Component as new (props: Props) => {
  props: Props;
  state: State;
  setState(state: Partial<State>): void;
  render(): ReactNode;
}) {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught route error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] bg-[#EADBC8] text-[#3D352D] py-16 px-4 flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-[24px] border border-[#E8DDD0] p-8 text-center space-y-6 shadow-[0_20px_40px_rgba(61,53,45,0.06)]">
            <div className="w-14 h-14 rounded-full bg-[#FDECEC] text-[#B42318] flex items-center justify-center mx-auto border border-[#F8D7DA]">
              <AlertCircle className="w-7 h-7 text-[#B42318]" />
            </div>

            <div className="space-y-2">
              <span className="font-heading text-xs text-[#C96F1B] font-bold tracking-wider uppercase block">
                APPLICATION RECOVERY
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#3D352D]">
                Unable to Load Section
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5E4E] font-body leading-relaxed">
                An unexpected rendering error occurred while loading this view. You can retry or return to the home page.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined });
                  window.location.reload();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#C96F1B] hover:bg-[#B35E17] text-white font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <RefreshCw className="w-4 h-4 text-white" />
                <span>Retry Page</span>
              </button>

              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#F5EEE5] hover:bg-[#E8DDD0] text-[#3D352D] font-heading text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Home className="w-4 h-4 text-[#C96F1B]" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
