
interface Props {
    onSelectItem: (item: string) => void;
    selectedIndex: number;
}
function Logo({onSelectItem, selectedIndex}: Props) {

  return (
    <span
            key={"Home"}
            className="nav-item"
            onClick={() => {
              onSelectItem("Home");
              selectedIndex = 0;
            }}
          >
            My Portfolio
    </span>  )
}

export default Logo