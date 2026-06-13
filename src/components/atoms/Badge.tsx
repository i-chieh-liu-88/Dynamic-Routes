type BadgeProps = {
  label: string;
  variant?: "primary" | "secondary" | "accent";
};

export default function Badge({ label, variant = "primary" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{label}</span>;
}
