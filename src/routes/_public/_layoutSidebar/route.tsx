import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_layoutSidebar")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4">
        <h2 className="text-lg font-bold mb-4">Category</h2>
        <ul className="menu">
          <li>
            <Link to="/products" search={{ category: undefined }}>
              All Products
            </Link>
          </li>
          <li>
            <Link to="/products" search={{ category: "Vehicle" }}>
              Vehicle
            </Link>
          </li>
          <li>
            <Link to="/products" search={{ category: "Bike" }}>
              Bike
            </Link>
          </li>
          <li>
            <Link to="/products" search={{ category: "Building Blocks" }}>
              Building Blocks
            </Link>
          </li>
        </ul>
      </aside>

      {/* 右邊的頁面內容 */}
      <div className="flex-1 p-8 ">
        <Outlet /> {/* 子頁面顯示在這裡 */}
      </div>
    </div>
  );
}
