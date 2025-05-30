import NavigationItemsList from "./NavigationItemsList";

interface Props {
  items: string[];
}

function Footer({ items }: Props) {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-0 col-md-1"></div>
          <div className="col-6 col-md-2 mb-3 border-end">
            <NavigationItemsList items={items} />
          </div>
          <div className="col-0 col-md-1"></div>
          <div className="col-md-5 offset-md-1 mb-3 align-center">
            <h4>Kontakt</h4>
            <ul className="list-unstyled">
              <li>
                <b>E-mail:</b> info@smart-food.at
              </li>
              <li>
                <b>Telefon:</b> +43 1 234 567 891
              </li>
              <li>
                <b>Adresse:</b> SmartFood, Kärnter Straße 123, A-1010 Wien,
                Österreich
              </li>
              <li>
                <b>Fax:</b> +43 1 234 567 892
              </li>
            </ul>
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
