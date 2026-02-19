import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { account } = useAuth();

  console.log(account);

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
