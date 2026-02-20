import { Link } from "react-router";
import type { Article } from "../types/Article.types";
import { useCartStore } from "../store/CartStore";
import { CircleMinus, CirclePlus } from "lucide-react";

const ArticleCard = (articleData: Article) => {
  const { addItem, products, removeItem } = useCartStore();

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

  const getQuantityArticle = () => {
    const isArticleInCart = products.find(
      (article) => article.product.id === articleData.id,
    );
    return isArticleInCart?.quantity;
  };

  const quantityInCart = getQuantityArticle();

  console.log(quantityInCart);

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
        <div onClick={(e) => {
          e.preventDefault();
      e.stopPropagation();
        }} className="absolute left-3 top-3 z-30 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-2 py-1">
  <button
    onClick={() => {
      addItem({ product: articleData, quantity: 1 });
    }}
    className="cursor-pointer p-1 rounded-full text-white transition disabled:opacity-40"
    disabled={!isInStock}
    aria-label="Ajouter un article"
  >
    <CirclePlus size={20} />
  </button>

  <div className="relative z-50 pointer-events-none min-w-[20px] text-center text-sm font-semibold text-white">
    {quantityInCart ?? 0}
  </div>

  <button
    onClick={() => {
      removeItem({ product: articleData, quantity: - 1 });
    }}
    disabled={!quantityInCart}
    className="cursor-pointer p-1 rounded-full text-white hover:text-black transition disabled:opacity-30"
    aria-label="Retirer un article"
  >
    <CircleMinus size={20} color="white" />
  </button>
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
