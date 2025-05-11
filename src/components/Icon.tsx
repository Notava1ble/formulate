import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

// Helper to convert PascalCase icon names (e.g., "UserCircle")
// to camelCase (e.g., "userCircle") as expected by dynamicIconImports.
const pascalToCamelCase = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toLowerCase() + str.slice(1);
};

interface CustomIconProps extends Omit<LucideProps, "name"> {
  iconName: string; // Expects a PascalCase icon name string (e.g., "Home", "UserCircle")
  className?: string;
}

const Icon = ({ iconName, className, ...props }: CustomIconProps) => {
  const camelCaseName = pascalToCamelCase(
    iconName
  ) as keyof typeof dynamicIconImports;
  // Default to 'circle' icon if the requested icon is not found or iconName is empty.
  const fallbackIconKey = "circle" as keyof typeof dynamicIconImports;

  let TargetIcon;

  if (iconName && dynamicIconImports[camelCaseName]) {
    TargetIcon = dynamic(dynamicIconImports[camelCaseName]);
  } else {
    // Log a warning if a specific iconName was provided but not found (and it's not already the fallback)
    if (iconName && iconName.toLowerCase() !== "circle") {
      console.warn(
        `Icon "${iconName}" (attempted as "${camelCaseName}") not found. Falling back to "circle" icon.`
      );
    }
    TargetIcon = dynamic(dynamicIconImports[fallbackIconKey]);
  }

  // Apply the provided className or the default "size-20"
  return <TargetIcon className={className || "size-20"} {...props} />;
};

export default Icon;
