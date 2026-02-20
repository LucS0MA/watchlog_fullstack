import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useCartStore } from "../store/CartStore";

const Header = () => {
  const { account } = useAuth();
  const { totalProducts } = useCartStore();

  const total = totalProducts();

  return (
    <header className="flex justify-between watch-container p-8 [&>*]:cursor-pointer mb-14">
      <Link to={"/"}>
        <div>LOGO</div>
      </Link>
      <div>
        <ul className="flex gap-3 uppercase [&>*]:cursor-pointer">
          <Link to={"/"}>
          <li>About</li>
          </Link>
          <Link to={"/"}>
          <li>Movies</li>
          </Link>
          <Link to={"/reviews"}>
          <li>Reviews</li>
          </Link>
          <Link to={"/shop"}>
          <li>Shop</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 [&>*]:cursor-pointer">
          {account ? <div> Welcome {account.username} !</div> : ""}
          <div className="relative">
          <ShoppingCart />
          <div className="absolute top-3.5 -left-2 px-1 py-0.5 text-ui bg-amber-50 rounded-full text-background">{total}</div>
          </div>
          <Link to={"/login"}>
            <User />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
