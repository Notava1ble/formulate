import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const pascalToKebabCase = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};

interface CustomIconProps extends Omit<LucideProps, "name"> {
  iconName: string;
  className?: string;
}

const Icon = ({ iconName, className, ...props }: CustomIconProps) => {
  const kebabCaseName = pascalToKebabCase(
    iconName
  ) as keyof typeof dynamicIconImports;

  const fallbackIconKey = "circle" as keyof typeof dynamicIconImports;

  let TargetIcon;

  if (iconName && dynamicIconImports[kebabCaseName]) {
    // console.log(`icon "${kebabCaseName}" found`);
    TargetIcon = dynamic(dynamicIconImports[kebabCaseName]);
  } else {
    // Log a warning if a specific iconName was provided but not found (and it's not already the fallback)
    if (iconName && iconName.toLowerCase() !== "circle") {
      console.warn(
        `Icon "${iconName}" (attempted as "${kebabCaseName}") not found. Falling back to "circle" icon.`
      );
    }
    TargetIcon = dynamic(dynamicIconImports[fallbackIconKey]);
  }

  // Apply the provided className or the default "size-20"
  return <TargetIcon className={className || "size-20"} {...props} />;
};

export default Icon;
