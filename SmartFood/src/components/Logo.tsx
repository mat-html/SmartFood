
interface Props {
    onSelectItem: (item: string) => void;
}
function Logo({onSelectItem}: Props) {

  return (
    <span
            key={"Home"}
            className="nav-item"
            onClick={() => {
              onSelectItem("Home");
            }}
          >
            SmartFood
    </span>  )
}

export default Logo