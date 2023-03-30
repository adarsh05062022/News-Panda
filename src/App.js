import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Category from "./components/Category";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  const [topicGet, settopicGet] = useState("everything");
  const [progress, setprogress] = useState(10);

  const setProgress = (progress) => {
    setprogress(progress);
  };

  const changeTopic = (topicName) => {
    settopicGet(topicName);
  };

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            
            path="/"
            exact
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="world"
                pageSize={props.pageSize}
                country={"in"}
                category="world"
              />
            }
          />

          <Route
            
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="business"
                pageSize={props.pageSize}
                country={"in"}
                category="business"
              />
            }
          />
          <Route
            
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="entertainment"
                pageSize={props.pageSize}
                country={"in"}
                category="entertainment"
              />
            }
          />
          <Route
            
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="health"
                pageSize={props.pageSize}
                country={"in"}
                category="health"
              />
            }
          />
          <Route
            
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="technology"
                pageSize={props.pageSize}
                country={"in"}
                category="technology"
              />
            }
          />
          <Route
            
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="sports"
                pageSize={props.pageSize}
                country={"in"}
                category="sports"
              />
            }
          />
          <Route
            
            path="/everything"
            element={
              <div
                className="mainPageDisplay"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Category changeTopic={changeTopic} />
                <div>
                  <News
                    setProgress={setProgress}
                    apiKey={props.apiKey}
                    type="every"
                    key="every"
                    pageSize={props.pageSize}
                    topic={topicGet}
                  />
                </div>
              </div>
            }
          />

          <Route
            
            path="/topheadlines"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="top"
                pageSize={props.pageSize}
                country={"in,gb,us,nz"}
                category="top"
              />
            }
          />
          <Route
            
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={props.apiKey}
                key="technology"
                pageSize={props.pageSize}
                country={"in"}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

App.defaultProps = {
  pageSize: 40,
  apiKey: process.env.REACT_APP_NEWS_API,
};

export default App;
