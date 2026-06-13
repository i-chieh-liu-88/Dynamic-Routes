import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/products/$id")({
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">商品詳細頁</h1>

      <div className="card bg-base-100 shadow-md p-6">
        <p>
          商品 ID：<span className="badge badge-accent">{id}</span>
        </p>
        {color && (
          <p className="mt-2">
            選擇顏色：<span className="badge badge-secondary">{color}</span>
          </p>
        )}
      </div>

      <p className="text-base-content mt-4">
        網址範例：/products/123?color=紅色
      </p>
    </div>
  );
}
