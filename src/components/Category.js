import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Category.css";
import topicName from "./../topicsName.json";

const Category = ({ changeTopic }) => {
  const [topic, settopic] = useState(topicName.topicX);

  const searchTopic = () => {
    let value = document.getElementById("SearchInputText").value;
    changeTopic(value);
  };
  const handleOnChange = (event) => {
    const query = event.target.value;
    let updatedList = topicName.topicX;

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    settopic(updatedList);
  };

  return (
    <>
      <div className="menuWrapper ">
        <div className="menuWrapper__content ">
          <div>
            <div className=" menuSearch-box">
              <input
                className="menuSearch-txt"
                type="text"
                name=""
                placeholder="Type to search"
                id="SearchInputText"
                onChange={handleOnChange}
              />
              <Link
                className=" menuSearch-btn "
                to="/everything"
                onClick={searchTopic}
              >
                <i className="fas fa-search"></i>
              </Link>
            </div>
          </div>
          <div className=" scrollbar" id="SCROLLBAR">
            <ul className="submenu-navigation menuWrapper-navigation force-overflow">
              {topic.map((element) => {
                return (
                  <li className="submenu-navigation__item menuWrapper-navigation__item">
                    <Link to="/everything" className="submenu-navigation__link">
                      <span
                        className="submenu-navigation__icon"
                        data-feather="layers"
                      ></span>
                      <span className="submenu-navigation__title">
                        {element}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
