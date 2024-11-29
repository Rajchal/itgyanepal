import clsx from "clsx";
import Image from "next/image.js";

import { Marker } from "./Marker";
interface props {
  icon?: string;
  children: string;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
}
const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: props) => {
  const Inner = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-px">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <Image
            src={icon}
            alt="circle"
            width={20}
            height={20}
            className="z-10 mr-5 size-10 object-contain"
          />
        )}

        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <a
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
