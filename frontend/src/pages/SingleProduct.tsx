import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Article } from "../types/Article.types";
import Loader from "../components/Loader";
import { useCartStore } from "../store/CartStore";
import { CirclePlus } from "lucide-react";

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | undefined>();
  const { addItem } = useCartStore();


  const getArticle = async () => {
    try {
      const response = await axios.get<Article>(`http://localhost:3000/products/${id}`);
      setArticle(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);
  

  if (!article) {
    return <Loader />;
  }

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(article.price);

  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(article.created_at));

  const isInStock = article.stock > 0;

  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Background flouté */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={article.image_url}
          alt=""
          className="w-full h-full object-cover scale-110 blur-2xl opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start justify-center px-8 py-16 max-w-5xl mx-auto">

        {/* Image */}
        <div className="w-64 shrink-0 aspect-[2/2] overflow-hidden shadow-2xl relative">
          <img
            src={article.image_url}
            alt={article.name}
            className="w-full h-full object-cover"
          />
          {/* Badge stock */}
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${
            isInStock ? "bg-green-500/80 text-white" : "bg-red-500/80 text-white"
          }`}>
            {isInStock ? `En stock (${article.stock})` : "Rupture"}
          </span>
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-6 pt-4">

          {/* Nom + prix */}
          <div>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight">
              {article.name}
            </h1>
            <span className="text-white/50 text-lg mt-1 block">{formattedPrice}</span>
          </div>

          <div className="border-t border-white/20 w-24" />

          {/* Description */}
          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">Description</span>
            <p className="text-white/80 text-base leading-relaxed">{article.description}</p>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <span className="text-white/40 text-xs uppercase tracking-widest">Ajouté le</span>
            <span className="text-white text-base">{formattedDate}</span>
          </div>
          <div className="absolute left-3 top-3 z-50 items-center text-ui font-semibold rounded-full flex gap-1">
          <p>
            Add to cart →
          </p>
          <CirclePlus
            onClick={() => {
              addItem({product: article, quantity: 1});
            }}
            className="hover:bg-green-800 rounded-full cursor-pointer"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;