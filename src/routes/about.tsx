import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About Small Shop</h1>

      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">Our Story</h2>
        <p className="text-base-content leading-relaxed">
          Small Shop was founded in 2026 with a simple mission: to bring joy to
          children of all ages through carefully selected, high-quality toys. We
          believe that play is an essential part of childhood development and
          strive to offer toys that are both fun and educational.
        </p>
      </div>

      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
        <p className="text-base-content leading-relaxed">
          From classic building blocks to balance bikes and toy excavators, our
          collection is handpicked to inspire creativity, encourage outdoor
          play, and spark imagination. Every product in our shop is tested for
          safety and durability.
        </p>
      </div>

      <div className="card bg-base-100 shadow-md p-6">
        <h2 className="text-2xl font-bold mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-base-content space-y-2">
          <li>Safety first — all toys meet international safety standards</li>
          <li>Quality over quantity — we only sell what we believe in</li>
          <li>Sustainable play — eco-friendly materials where possible</li>
          <li>Fun for everyone — toys for all ages and interests</li>
        </ul>
      </div>
    </div>
  );
}
