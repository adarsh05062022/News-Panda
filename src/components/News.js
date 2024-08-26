import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const url = "https://news-panda-backend.onrender.com/news"

  const updateNews = async () => {
    props.setProgress(0);

    // const url = `https://news-panda-3o7pyob75-adarsh05062022s-projects.vercel.app/news`;
    setLoading(true);
    props.setProgress(60);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData);
      console.log(parsedData)
      setTotalResults(parsedData.length); // Assuming the API returns the total number of results
      setLoading(false);
      props.setProgress(100);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, [props.topic]);

  const fetchMoreData = async () => {
    const newUrl = `${url}?page=${page}`;
    setLoading(true);
    try {
      let data = await fetch(newUrl);
      let parsedData = await data.json();

      setArticles(articles.concat(parsedData));
      setTotalResults(parsedData.length); // Update total results count
      setLoading(false);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching more news:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ alignItems: "center" }}
      >
        <div className="container">
          <div className="row g-0">
            {articles.map((element, index) => (
              <div key={index} className="col-md" style={{ display: "flex", justifyContent: "center" }}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 90) : " "}
                  imgUrl={element.image ? element.image : "https://nenow.in/wp-content/uploads/2022/06/Wordle-answer-today.jpg"}
                  newsUrl={element.url}
                  author={element.publisher}
                  date={element.publishedAt}
                  badgeSource={element.publisher}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};



News.propTypes = {
  
  
 
  setProgress: PropTypes.func.isRequired,
};

export default News;
