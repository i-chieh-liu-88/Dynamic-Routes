import { createFileRoute, Outlet } from "@tanstack/react-router";
import ProductCard from "../../components/molecules/ProductCard";

// 假資料
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  colors: string[];
  image: string;
};

const products: Product[] = [
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
    //網址有 ?category=shoes轉成字串 "shoes" : 網址沒有 ?category回傳 undefined
  },
  component: ProductsComponent,
});

function ProductsComponent() {
  // 從網址讀取 Search Params
  const result = Route.useSearch();
  const category = result.category;

  // 根據 category 篩選商品; 這是 TanStack Router 提供的 hook
  const filtered = category
    ? products.filter((product) => product.category === category)
    : //如果 category 有值（不是 null / undefined / 空字串: 執行篩選
      products;
  //如果 category 沒有值: 直接用全部的 products

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

// 使用者進入 /products?category=shoes
//         ↓
// validateSearch 驗證並整理參數
//         ↓
// { category: "shoes" }
//         ↓
// Route.useSearch() 就可以拿到這個值
//         ↓
// 畫面用 category 篩選商品
