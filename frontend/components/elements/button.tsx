import Loader from "./loader";
import { SyntheticEvent } from "react";
import classNames from "classnames";

type ButtonProps = {
  text: string;
  handleClick?: (event: SyntheticEvent) => void;
  loading: boolean;
  type: string;
  variant: "primary" | "secondary";
  success?: boolean;
} & Pick<HTMLButtonElement, "disabled">;

const Button = ({
  text,
  handleClick,
  loading = false,
  type,
  variant,
  success,
  ...button
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      className={classNames(
        "border-2 rounded-md",
        { "text-colorAccent bg-white border-white": variant === "primary" },
        { "": variant === "secondary" },
        { "bg-opacity-70 border-opacity-70": success }
      )}
      {...button}
    >
      <div
        className={classNames(
          "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm py-2 disabled:cursor-not-allowed"
        )}
      >
        {loading ? <Loader /> : success ? <div>SUCEESS</div> : text}
      </div>
    </button>
  );
};

export default Button;
