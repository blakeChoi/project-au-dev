"use client";

import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Image alt="logo" src="/logo/Croft.svg" width="180" height="40" />
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700 text"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 font-bold text-gray-700 text"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="**********"
            />
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-gray-300 hover:text-gray-400 focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-2 py-2 text-white rounded bg-gradient-to-r from-green-500 to-teal-500 min-w-20">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
