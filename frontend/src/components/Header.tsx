import { ShoppingCart, User } from "lucide-react";
import { Link } from 'react-router'

const Header = () => {

  return (
    <header className="flex justify-between watch-container p-8 [&>*]:cursor-pointer mb-14">
      <Link to={"/"}>
      <div>LOGO</div>
      </Link>
      <div>
        <ul className="flex gap-3 uppercase [&>*]:cursor-pointer">
          <li>About</li>
          <li>Movies</li>
          <li>Reviews</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 [&>*]:cursor-pointer">
          <ShoppingCart />
          <Link to={"/login"}>
          <User />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
