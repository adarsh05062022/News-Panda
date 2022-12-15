import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import bigdata from "./../sampleOutput.json"

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);

    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${
      props.country
    }&category=${props.category}&page=${page + 1}`;
    if (props.type !== "top") {
      url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&page=${
        page + 1
      }&q=${props.topic}`;
    }
    setloading(true);
    props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    // let parsedData = bigdata;
    console.log(props.topic);

    setarticles(parsedData.results);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
    setpage(page + 1);
  };
  useEffect(() => {
    updateNews();
  }, [props.topic]);

  const fetchMoreData = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${
      props.country
    }&category=${props.category}&page=${page + 1}&language=en`;
    if (props.type !== "top") {
      url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${
        props.country
      }&category=${props.category}&page=${page + 1}&language=en&q=${
        props.topic
      }`;
    }

    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // let parsedData = bigdata;

    setarticles(articles.concat(parsedData.results));
    settotalResults(parsedData.totalResults);
    setloading(false);
    setpage(page + 1);
  };

  return (
    <>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
        style={{ alignItems: "center" }}
      >
        <div className="container">
          <div className="row g-0">
            {articles.map((element) => {
              try {
                return (
                  <div
                    className="col-md "
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <NewsItem
                      title={
                        element.title !== null
                          ? element.title.slice(0, 90)
                          : " "
                      }
                      imgUrl={
                        element.image_url
                          ? element.image_url
                          : "https://nenow.in/wp-content/uploads/2022/06/Wordle-answer-today.jpg"
                      }
                      newsUrl={element.link}
                      author={element.creator}
                      date={element.pubDate}
                      badgeSource={element.source_id}
                    />
                  </div>
                );
              } catch (error) {
                loading && setloading(false);
                console.log(error);
              }
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  type: "top",
  country: "in",
  pageSize: 40,
  category: "world",
  topic: "everything",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  type: PropTypes.string,
  topic: PropTypes.string,
};

export default News;
