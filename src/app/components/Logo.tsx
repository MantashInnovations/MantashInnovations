const logoImage = '/assets/logo.png';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  animate?: boolean;
}

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-20 w-20",
  xl: "h-28 w-28",
};

const textSizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const subtextSizeClasses = {
  sm: "text-[8px]",
  md: "text-[10px]",
  lg: "text-xs",
  xl: "text-sm",
};

export function Logo({
  size = "md",
  showText = true,
  className = "",
  animate = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ImageWithFallback
        src={logoImage}
        alt="ManTash Innovations Logo"
        className={`${sizeClasses[size]} object-contain ${animate ? "hover:scale-110 transition-transform duration-300" : ""}`}
      />
      {showText && (
        <div className="flex flex-col">
          <span
            className={`${textSizeClasses[size]} font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#A855F7]`}
          >
            MANTASH
          </span>
          <span
            className={`${subtextSizeClasses[size]} text-gray-400 -mt-1 tracking-[0.2em]`}
          >
            INNOVATION
          </span>
        </div>
      )}
    </div>
  );
}
