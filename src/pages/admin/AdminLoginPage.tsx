import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import { Eye, EyeOff } from "lucide-react";

export const AdminLoginPage: React.FC = () => {
  const { signIn, session, admin } = useAdminAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If already authenticated + authorized, redirect to /admin
  if (session && admin) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const identity = await signIn(email, password);
      if (identity) {
        navigate("/admin", { replace: true });
      } else {
        setError("This account is not authorized for the Chitrani Admin Portal.");
        setLoading(false);
      }
    } catch {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#3D352D]" style={{ fontFamily: "var(--font-heading)" }}>
            Chitrani Construction
          </h1>
          <p className="text-[11px] font-semibold text-[#C96F1B] uppercase tracking-[0.2em] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
            Admin Portal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#E8DDD0] shadow-sm p-6">
          <h2 className="text-lg font-semibold text-[#3D352D] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-[#3D352D] mb-1.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-ds w-full"
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-[#3D352D] mb-1.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-ds w-full pr-10"
                  placeholder="Enter your password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9D9287] hover:text-[#6B5E4E] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] text-[#9D9287] mt-6" style={{ fontFamily: "var(--font-heading)" }}>
          Admin accounts are provisioned separately.
        </p>
      </div>
    </div>
  );
};
