import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  component: ImpressumComponent,
});

function ImpressumComponent() {
  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>

      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">Company Information</h2>
        <p className="text-base-content leading-relaxed">
          Small Shop GmbH <br />
          Spielzeugstraße 42 <br />
          01000 Dresden <br />
          Germany
        </p>
      </div>

      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">Contact</h2>
        <p className="text-base-content leading-relaxed">
          Email: hello@smallshop.de <br />
          Phone: +49 30 123456789 <br />
          Business Hours: Monday – Friday, 9:00 – 17:00
        </p>
      </div>

      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-3">Legal Representative</h2>
        <p className="text-base-content leading-relaxed">
          Managing Director: Florian <br />
          VAT ID: DE123456789 <br />
          Commercial Register: Amtsgericht Berlin-Charlottenburg, HRB 123456
        </p>
      </div>

      <div className="card bg-base-100 shadow-md p-6">
        <h2 className="text-2xl font-bold mb-3">Disclaimer</h2>
        <p className="text-base-content leading-relaxed">
          The contents of this website have been created with the utmost care.
          However, we cannot guarantee the accuracy, completeness, or up-to-date
          nature of the content. As a service provider, we are responsible for
          our own content on these pages in accordance with general law.
        </p>
      </div>
    </div>
  );
}
