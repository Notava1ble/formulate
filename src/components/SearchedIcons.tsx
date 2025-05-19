"use client";
import { useMemo } from "react";
import * as iconData from "lucide-static"; // This imports all icons as an object
import { Button } from "./ui/button";

// TODO: TRY TO OPTIMIZE

// Helper component to render and style SVG strings from lucide-static
interface SvgIconProps extends React.HTMLAttributes<HTMLDivElement> {
  svgString: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const SvgIcon = ({
  svgString,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...props
}: SvgIconProps) => {
  let modifiedSvgString = svgString;

  if (modifiedSvgString.includes('width="')) {
    modifiedSvgString = modifiedSvgString.replace(
      /width="[^"]*"/,
      `width="${size}"`
    );
  } else {
    modifiedSvgString = modifiedSvgString.replace(
      /<svg/,
      `<svg width="${size}"`
    );
  }

  if (modifiedSvgString.includes('height="')) {
    modifiedSvgString = modifiedSvgString.replace(
      /height="[^"]*"/,
      `height="${size}"`
    );
  } else {
    modifiedSvgString = modifiedSvgString.replace(
      /<svg/,
      `<svg height="${size}"`
    );
  }

  if (modifiedSvgString.includes('stroke="')) {
    modifiedSvgString = modifiedSvgString.replace(
      /stroke="[^"]*"/,
      `stroke="${color}"`
    );
  } else {
    modifiedSvgString = modifiedSvgString.replace(
      /<svg/,
      `<svg stroke="${color}"`
    );
  }

  if (modifiedSvgString.includes('stroke-width="')) {
    modifiedSvgString = modifiedSvgString.replace(
      /stroke-width="[^"]*"/,
      `stroke-width="${strokeWidth}"`
    );
  } else {
    modifiedSvgString = modifiedSvgString.replace(
      /<svg/,
      `<svg stroke-width="${strokeWidth}"`
    );
  }

  if (modifiedSvgString.includes('fill="')) {
    modifiedSvgString = modifiedSvgString.replace(
      /fill="[^"]*"/,
      `fill="none"`
    );
  } else {
    modifiedSvgString = modifiedSvgString.replace(/<svg/, `<svg fill="none"`);
  }

  return (
    <div
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: modifiedSvgString }}
    />
  );
};

// Get all icon names once
const ALL_ICON_NAMES = Object.keys(iconData);
const MAX_ICONS_TO_DISPLAY = 50;

const SearchedIcons = ({
  iconSearch,
  handleClick,
}: {
  iconSearch: string;
  handleClick: (selectedIcon: string, svgString: string) => void;
}) => {
  const normalizedSearchTerm = iconSearch.toLowerCase().trim();

  const filteredAndLimitedIcons = useMemo(() => {
    if (!normalizedSearchTerm) {
      return [];
    }
    const results = ALL_ICON_NAMES.filter((name) =>
      name.toLowerCase().includes(normalizedSearchTerm)
    );
    // Limit the results *before* mapping to save a bit of processing
    return results.slice(0, MAX_ICONS_TO_DISPLAY).map((name) => ({
      name,
      svgString: (iconData as Record<string, string>)[name] as string,
    }));
  }, [normalizedSearchTerm]);

  if (!normalizedSearchTerm) {
    return (
      <div className="text-neutral-400 mt-2">
        Please type in the search bar to find icons.
      </div>
    );
  }

  if (filteredAndLimitedIcons.length === 0) {
    return (
      <div className="text-neutral-400 mt-2">
        No icons found for &quot;{iconSearch}&quot;.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-10 max-w-md mt-2 gap-1">
      {filteredAndLimitedIcons.map(({ name, svgString }) => (
        <Button
          key={name}
          title={name}
          variant="ghost"
          size="icon"
          onClick={() => {
            handleClick(name, svgString);
          }}
        >
          <SvgIcon svgString={svgString} />
        </Button>
      ))}
    </div>
  );
};

export default SearchedIcons;
