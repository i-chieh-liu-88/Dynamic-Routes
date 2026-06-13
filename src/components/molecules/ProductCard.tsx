import { useNavigate } from "@tanstack/react-router";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

export default function ProductCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 點擊後跳轉到商品詳細頁
    navigate({ to: "/products/$id, params: { id }" });
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>

      {/* 使用 Badge atom */}
      <Badge label={category} variant="secondary" />

      <div>
        {/* 使用 Button atom */}
        <Button label="see the detail" onClick={handleClick} />
      </div>
    </div>
  );
}
