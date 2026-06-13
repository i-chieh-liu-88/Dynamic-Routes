import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/products")({
  validateSearch: (search) => {
    return {
      category: search.category ? String(search.category) : undefined,
    };
  },
  component: IndexComponent,
});

function IndexComponent() {
  // 從網址讀取 Search Params
  const { category } = Route.useSearch();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">商品列表</h1>

      {/* 顯示目前篩選的分類 */}
      {category ? (
        <div className="badge badge-primary mb-4">目前分類：{category}</div>
      ) : (
        <div className="badge mb-4">顯示全部商品</div>
      )}

      <p className="text-base-content">網址範例：/products?category=上衣</p>
    </div>
  );
}
