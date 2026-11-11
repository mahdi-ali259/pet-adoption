import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { TbPaw } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "../assets/LoginImage.JPG";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim() || !event.currentTarget.checkValidity()) {
      alert("Please enter a valid email and a nonblank password.");
      return;
    }

    onLogin();
  };

  return (
    <main className="login-page">
      <TbPaw className="login-decoration login-decoration-blue" aria-hidden="true" />
      <TbPaw className="login-decoration login-decoration-orange" aria-hidden="true" />

      <div className="login-panel">
        <section
          className="login-image-section"
          style={{ backgroundImage: `linear-gradient(rgba(55, 119, 189, 0.87), rgba(40, 104, 171, 0.87)), url(${LoginImage})` }}
        >
          <div className="login-image-content">
            <TbPaw className="login-hero-paw" aria-hidden="true" />
            <h2>Find Your<br />Perfect Companion</h2>
            <p>Join thousands of pet lovers helping animals<br className="login-desktop-break" /> find their forever homes</p>
            <div className="login-paw-row" aria-hidden="true">
              <TbPaw /><TbPaw /><TbPaw />
            </div>
          </div>
        </section>

        <section className="login-form-section" aria-labelledby="login-heading">
          <div className="login-brand">PetAdopt <TbPaw aria-hidden="true" /></div>
          <h1 id="login-heading">Welcome Back</h1>
          <p className="login-intro">Login to continue helping pets find homes</p>
          <TbPaw className="login-form-paw" aria-hidden="true" />

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">Email Address</label>
            <div className="login-input-wrap">
              <FiMail aria-hidden="true" />
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <label htmlFor="login-password">Password</label>
            <div className="login-input-wrap">
              <FiLock aria-hidden="true" />
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                Remember me
              </label>
              <button type="button" className="login-text-button" onClick={() => alert("Forgot Password is coming soon.")}>
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-submit">Login</button>
            <p className="login-demo-note">Demo login — use sample credentials.</p>

            <div className="login-divider"><span>or</span></div>

            <button type="button" className="login-google" onClick={() => alert("Google login is coming soon.")}>
              <FcGoogle aria-hidden="true" /> Continue with Google
            </button>

            <p className="login-signup">
              Don't have an account?{" "}
              <button type="button" className="login-text-button" onClick={() => alert("Sign Up is coming soon.")}>Sign Up</button>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
