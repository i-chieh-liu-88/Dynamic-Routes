import { createFileRoute, Link } from "@tanstack/react-router";
import Badge from "../../../components/atoms/Badge";

// 假資料（和 products.tsx 一樣）
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
    colors: ["Red", "Blue", "Green"],
    image:
      "https://images.unsplash.com/photo-1505322033502-1f4385692e6a?q=80&w=1068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const Route = createFileRoute("/_public/_layoutSidebar/products/$id")({
  validateSearch: (search) => {
    return {
      color: search.color ? String(search.color) : undefined,
    };
  },
  component: ProductDetailComponent,
});

function ProductDetailComponent() {
  // 從網址讀取動態參數
  const { id } = Route.useParams();
  // 從網址讀取 Search Params
  const { color } = Route.useSearch();

  // 根據 id 找到對應商品
  const product = products.find((p) => p.id === id);

  //在找不到商品時，提早返回，顯示錯誤訊息; 沒有加入這項的話TypeScript會報錯
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link
        to="/products"
        search={{ category: undefined }}
        className="mb-6 block badge badge-accent"
      >
        ← Back to Product List
      </Link>

      <div className="card bg-base-100 shadow-md">
        {/* 加上圖片 */}
        <figure className="px-10 pt-10">
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </figure>

        <div className="card-body">
          <h1 className="card-title text-3xl">{product.name}</h1>
          <Badge label={product.category} variant="secondary" />
          <p>{product.description}</p>
          <p className="text-2xl font-bold text-primary">$ {product.price}</p>

          <div className="mb-4">
            <p className="font-bold mb-2">Select Colors：</p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <Link
                  key={c} //React 需要的唯一識別，用顏色名稱當 key
                  to="/products/$id" //連結到同一個商品頁面
                  params={{ id }} //保持目前的商品 id 不變
                  search={{ color: c, category: undefined }}
                  //把網址的 color 換成這個顏色，category 清空; TanStack Router 看到 undefined 就會直接把那個參數從網址移除
                >
                  <Badge
                    label={c}
                    variant={color === c ? "primary" : "outline"}
                  />
                </Link>
              ))}
            </div>
          </div>

          {color && (
            <p className="mb-4">
              Selected Color：
              <Badge label={color} variant="accent" />
            </p>
          )}

          <div className="card-actions">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
