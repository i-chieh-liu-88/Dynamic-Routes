import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4">
        <h2 className="text-lg font-bold mb-4">商品分類</h2>
        <ul className="menu">
          <li>
            <a>全部商品</a>
          </li>
          <li>
            <a>上衣</a>
          </li>
          <li>
            <a>褲子</a>
          </li>
        </ul>
      </aside>

      {/* 右邊的頁面內容 */}
      <div className="flex-1 p-8">
        <Outlet /> {/* 子頁面顯示在這裡 */}
      </div>
    </div>
  );
}
