import axios from "axios";
import { useState, useEffect } from "react";
import Feed from "./components/Feed/Feed";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4444/");
      setArticles(res.data);
      console.log(res.data)
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);
  // console.log(articles.content);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">Scraping</h1>
      <div className="flex flex-col gap-2 w-3/4 border border-blue-600 rounded-md mx-auto mt-5 p-5">
        {articles.map((item, i) => (
          <Feed
            key={i}
            title={item.item.title}
            link={item.item.link}
            pubDate={item.item.pubDate}
            content={item.item.content}
          />
        ))}
      </div>
    </>
  );
}

export default App;
