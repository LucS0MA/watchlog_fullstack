import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between watch-container p-8 [&>*]:cursor-pointer mb-14">
      <div>LOGO</div>
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
          <User />
        </ul>
      </div>
    </header>
  );
};

export default Header;
