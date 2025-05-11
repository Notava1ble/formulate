import { icons } from "lucide-react";
const Icon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const LucideIcon = icons[iconName as keyof typeof icons] || icons.Circle;
  return <LucideIcon className={className ? className : "size-20"} />;
};
export default Icon;
