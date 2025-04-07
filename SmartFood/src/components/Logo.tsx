import "../css/logo.css";

interface Props {
  onSelectItem: (item: string) => void;
}
function Logo({ onSelectItem }: Props) {
  return (
    <span
      key={"Home"}
      className="nav-item"
      id="logo"
      onClick={() => {
        onSelectItem("Home");
      }}
    >
      <span id="logoOrange">Smart</span>Food
    </span>
  );
}

export default Logo;
