import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Article } from "../types/Article.types";
import Loader from "../components/Loader";
import { useCartStore } from "../store/CartStore";
import { CircleMinus, CirclePlus } from "lucide-react";

const SingleArticle = () => {
  const { id } = useParams();
  const [articleData, setArticle] = useState<Article | undefined>();
  const { addItem, products, removeItem } = useCartStore();

  const getArticle = async () => {
    try {
      const response = await axios.get<Article>(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
      );
      setArticle(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getQuantityArticle = () => {
    if (!articleData) {
      return articleData
    }
    const isArticleInCart = products.find(
      (article) => article.product.id === articleData!.id,
    );
    return isArticleInCart?.quantity;
  };

  const quantityInCart = getQuantityArticle();

  console.log(quantityInCart);

  useEffect(() => {
    getArticle();
    console.log(articleData)
  }, []);

  if (!articleData) {
    return <Loader />;
  }

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
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={articleData.image_url}
          alt=""
          className="w-full h-full object-cover scale-110 blur-2xl opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start justify-center px-8 py-16 max-w-5xl mx-auto">
        <div className="w-64 shrink-0 aspect-[2/2] overflow-hidden shadow-2xl relative">
          <img
            src={articleData.image_url}
            alt={articleData.name}
            className="w-full h-full object-cover"
          />
          <span
            className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${
              isInStock
                ? "bg-green-500/80 text-white"
                : "bg-red-500/80 text-white"
            }`}
          >
            {isInStock ? `En stock (${articleData.stock})` : "Rupture"}
          </span>
        </div>

        <div className="flex flex-col gap-6 pt-4">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight">
              {articleData.name}
            </h1>
            <span className="text-white/50 text-lg mt-1 block">
              {formattedPrice}
            </span>
          </div>

          <div className="border-t border-white/20 w-24" />

          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Description
            </span>
            <p className="text-white/80 text-base leading-relaxed">
              {articleData.description}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Ajouté le
            </span>
            <span className="text-white text-base">{formattedDate}</span>
          </div>
          <div onClick={(e) => {
          e.preventDefault();
      e.stopPropagation();
        }} className=" z-30 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md py-1">
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
              removeItem({ product: articleData, quantity: -1 });
            }}
            disabled={!quantityInCart}
            className="cursor-pointer p-1 rounded-full text-white hover:text-black transition disabled:opacity-30"
            aria-label="Retirer un article"
          >
            <CircleMinus size={20} color="white" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
