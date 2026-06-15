import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/products">Items</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Tiny Toy Shop
        </Link>
      </div>

      <div className="navbar-end gap-2">
        {/* SignIn / SignUp 只在未登入時顯示 */}
        <SignedOut>
          <Link to="/signin" className="btn btn-ghost btn-sm">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Sign Up
          </Link>
        </SignedOut>

        {/* 登入後顯示 UserButton */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
