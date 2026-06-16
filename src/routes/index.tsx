import { createFileRoute, Link } from "@tanstack/react-router";
import Button from "../components/atoms/Button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1698739632962-6eddb890fb04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shop open"
            className="max-w-sm rounded-lg shadow-2xl mx-auto mb-10"
          />
          <h1 className="text-5xl font-bold">Welcome to Small Shop</h1>
          <p className="py-6 text-lg">
            Discover our handpicked collection of high-quality items for
            children
          </p>
          <Link to="/products" search={{ category: undefined }}>
            <Button label="Shop Now" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
