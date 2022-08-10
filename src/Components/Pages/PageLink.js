import { Link } from "react-router-dom";

const PageLink = () => {
  return (
    <nav>
      <ul>
        <Link to="/"></Link>
        <Link to="/shoppingcart"></Link>
        <Link to="/checkoutcart"></Link>
      </ul>
    </nav>
  );
};

export default PageLink;
