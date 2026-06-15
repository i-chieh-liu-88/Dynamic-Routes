import { createFileRoute, Outlet } from "@tanstack/react-router";
import ProductCard from "../../components/molecules/ProductCard";

// 假資料
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  colors: string[];
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Bagger",
    category: "Vehicle",
    price: 29,
    description:
      "A sturdy toy excavator perfect for digging adventures in the sandbox.",
    colors: ["Yellow", "Orange"],
    image:
      "https://images.unsplash.com/photo-1649807533255-bbc9c9fb7d77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Laufrad",
    category: "Bike",
    price: 49,
    description:
      "A lightweight balance bike designed to help toddlers learn to ride with confidence.",
    colors: ["Red", "Blue", "Green"],
    image:
      "https://images.unsplash.com/photo-1568621947520-4d6652dfa392?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "LEGO",
    category: "Building Blocks",
    price: 39,
    description:
      "A classic LEGO set that sparks creativity and imagination for kids of all ages.",
    colors: ["Multicolor"],
    image:
      "https://images.unsplash.com/photo-1505322033502-1f4385692e6a?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const Route = createFileRoute("/_layout/products")({
  validateSearch: (search) => {
    return {
      category: search.category ? String(search.category) : undefined,
    };
  },
  component: ProductsComponent,
});

function ProductsComponent() {
  // 從網址讀取 Search Params
  const { category } = Route.useSearch();

  // 根據 category 篩選商品
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div>
      <Outlet /> {/* 子頁面顯示在這裡 */}
      <h1 className="text-3xl font-bold mb-4 p-10">Product List</h1>
      {/* 顯示目前篩選的分類 */}
      {category ? (
        <div className="badge badge-primary mb-4">
          Current Category：{category}
        </div>
      ) : (
        <div className="badge mb-4">All Products</div>
      )}
      {/* 用 map 渲染商品卡片 */}
      <div>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
