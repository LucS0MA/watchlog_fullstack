import { Link } from "react-router";
import type { Article } from "../types/Article.types";
import { useCartStore } from "../store/CartStore";
import { useEffect } from "react";
import { CirclePlus } from "lucide-react";

const ArticleCard = (articleData: Article) => {
  const { addItem, products } = useCartStore();

  useEffect(() => {
    console.log(products);
  }, [products]);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(articleData.price);

  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(articleData.created_at));

  const isInStock = articleData.stock > 0;

  return (
    <Link to={`/shop/${articleData.id}`}>
      <div className="group aspect-[2/2.5] overflow-hidden m-4 relative flex flex-col items-center hover:scale-105 duration-500 cursor-pointer">
        <div className="inset-0 absolute opacity-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent group-hover:opacity-100 transition-opacity duration-500"></div>

        <img
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
          src={articleData.image_url}
          alt={articleData.name}
        />

        <span
          className={`absolute top-3 right-3 z-30 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${
            isInStock
              ? "bg-green-500/80 text-white"
              : "bg-red-500/80 text-white"
          }`}
        >
          {isInStock ? `En stock (${articleData.stock})` : "Rupture"}
        </span>
        <div className="absolute left-3 top-3 z-50 items-center text-ui font-semibold rounded-full flex gap-1">
          {/* <p className="w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:w-auto group-hover:opacity-100">
            Add to cart →
          </p> */}
          <CirclePlus
            onClick={(e) => {
              e.preventDefault();
              addItem({product: articleData, quantity: 1});
            }}
            className="hover:bg-green-800 rounded-full"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 pt-16 bg-gradient-to-t from-black via-black/80 via-40% to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-1">
          <p className="text-center font-heading text-white text-lg leading-tight">
            {articleData.name}
          </p>

          <p className="text-center text-white/70 text-sm line-clamp-2">
            {articleData.description}
          </p>

          <div className="border-t border-white/20 my-1" />

          <div className="flex items-center justify-between text-sm">
            <span className="text-white font-semibold">{formattedPrice}</span>
            <span className="text-white/50 text-xs">{formattedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
