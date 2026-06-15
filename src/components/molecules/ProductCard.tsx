import { Link } from "@tanstack/react-router";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

type ProductCardsProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardsProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <Badge label={category} variant="secondary" />
        <p>Price: $ {price} </p>
        <div className="card-actions">
          <Link
            to="/products/$id"
            params={{ id }}
            search={{ color: undefined, category: undefined }}
          >
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
