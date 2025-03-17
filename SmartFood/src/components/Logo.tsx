
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
            My Portfolio
    </span>  )
}

export default Logo