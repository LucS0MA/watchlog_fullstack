import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import type { ArticleData } from "../types/Article.types";
import ArticleCard from "../components/ArticleCard";

const Shop = () => {
  const [article, setArticle] = useState<ArticleData[]>([]);
  const { status } = useAuth();

  const getArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setArticle(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getArticles();
    console.log(status)
  }, []);

  // if (status !== "authenticated") {
  //       return (
  //           <Loader />
  //       )
  //   }

  return (
    <div className="watch-container">
      <div className="grid grid-cols-4 gap-4 mx-6">
        {article.map((article, id) => (
          <div key={id}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
