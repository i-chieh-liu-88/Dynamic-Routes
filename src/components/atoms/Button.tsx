type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
