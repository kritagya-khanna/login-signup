/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loginSigninBg: "var(--bg-login-signin-button)",
        loginSigninText : "var(--text-login-signin-button)",
      }
    },
  },
  plugins: [],
}

