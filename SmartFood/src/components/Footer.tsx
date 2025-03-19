import NavigationItemsList from "./NavigationItemsList";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function Footer({ items, onSelectItem }: Props) {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-0 col-md-1"></div>
          <div className="row row-cols-2">
            <NavigationItemsList items={items} onSelectItem={onSelectItem} />

            <div className="col-0 col-md-1"></div>
            <div className="col-md-5 offset-md-1 mb-3 align-middle">
              <h4>Kontakt</h4>
              <ul className="list-unstyled">
                <li>
                  <b>E-mail:</b> info@smart-food.at
                </li>
                <li>
                  <b>Telefon:</b> +43 1 234 567 891
                </li>
                <li>
                  <b>Adresse:</b> SmartFood, Musterstraße 24, A-1010 Wien,
                  Österreich
                </li>
                <li>
                  <b>Fax:</b> +43 1 234 567 892
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
          <p>© 2024 Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
