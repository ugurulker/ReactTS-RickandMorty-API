import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="max-w-[200px]">
      <Logo />
    </div>
  );
}
