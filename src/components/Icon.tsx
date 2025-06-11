"use client";

import { useState, useEffect, memo } from "react";
import { LucideProps, Circle } from "lucide-react"; // Import a default fallback icon
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Skeleton } from "./ui/skeleton";

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
  const [LoadedIcon, setLoadedIcon] =
    useState<React.ComponentType<LucideProps> | null>(null);

  useEffect(() => {
    const kebabCaseName = pascalToKebabCase(
      iconName
    ) as keyof typeof dynamicIconImports;
    const importer = dynamicIconImports[kebabCaseName];

    if (importer) {
      importer()
        .then((mod) => {
          // The dynamically imported module has a 'default' export which is the icon component
          setLoadedIcon(() => mod.default);
        })
        .catch((err) => {
          // Handle potential import errors
          console.error(`Failed to load icon: ${iconName}`, err);
          setLoadedIcon(() => Circle); // Fallback on error
        });
    } else {
      // If the icon name is not found in the dynamic imports map
      if (iconName && iconName.toLowerCase() !== "circle") {
        console.warn(
          `Icon "${iconName}" not found. Falling back to "circle" icon.`
        );
      }
      setLoadedIcon(() => Circle); // Set fallback immediately
    }
  }, [iconName]); // 2. Re-run this effect only when the iconName prop changes

  // 3. Render a fallback while loading or if it fails, ensuring no server/client mismatch.
  //    On initial render, LoadedIcon is null, so this returns a placeholder.
  //    This prevents hydration errors.
  if (!LoadedIcon) {
    // You can return null or a placeholder element. A placeholder is often better for layout stability.
    return (
      <Skeleton
        className={`${className} bg-zinc-900`}
        style={{ width: props.size, height: props.size }}
      />
    );
  }

  return <LoadedIcon className={className} {...props} />;
};

// Use memo to prevent re-renders if props haven't changed
export default memo(Icon);
