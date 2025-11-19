

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Authentication failed");
        setLoading(false);
        return;
      }

      // store token (for demo) and redirect
      const token = data?.data?.token;
      if (token) {
        try { localStorage.setItem("token", token); } catch {}
      }

      // redirect to home or dashboard
      router.push("/");
    } catch (err: any) {
      setError(err?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>

        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="text-sm text-gray-300 mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
            type="text"
            required
          />

          <label className="text-sm text-gray-300 mb-1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
            type="password"
            required
          />

          {error && <div className="text-sm text-red-400 mb-2">{error}</div>}

          <div className="flex items-center justify-between flex-wrap">
            <a className="text-sm text-blue-400 hover:underline mb-0.5" href="#">Forgot password?</a>
            <p className="text-white mt-4"> Don't have an account? <a className="text-sm text-blue-400 hover:underline mt-4" href="#">Signup</a></p>
          </div>

          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 transition"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
