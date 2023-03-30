import React from "react";

const NewsItem = (props) => {
  let { title, imgUrl, newsUrl, date, badgeSource } = props;

  return (
    <div>
      <div
        className="card my-3 d-flex "
        style={{
          minWidth: "18rem",
          width: "18rem",
          justifyItems: "center",
          height: "400px",
          color: "#3b4b1f",
        }}
      >
        <div style={{ display: "flex", position: "absolute", right: "0" }}>
          <span className="badge rounded-pill bg-success">{badgeSource}</span>
        </div>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p class="card-text">
            <small class="text-muted">
              {new Date(date).toLocaleDateString() +
                " at " +
                new Date(date).toLocaleTimeString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="__blank"
            className="btn btn-dark btn-sm"
            style={{ position: "absolute", top: "90%" }}
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
