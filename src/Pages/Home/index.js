/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import {
  authors,
  categories,
  countries,
  regions,
  tags,
} from "../../Component/region";
import {
  Authors,
  cardData,
  cardImage,
  cardnews,
  newsData,
} from "../../Component/NewsComp/NewsData";
const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [isSecondRowVisible, setIsSecondRowVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [isVisible, setVisible] = useState(true);
  const [isPromoVisible, setPromoVisible] = useState(true);

  const handleSelect = (e) => setSelectedRegion(e.target.value);
  const handleChange = (e) => setSelectedCountry(e.target.value);
  const handleUpdate = (e) => setSelectedCategory(e.target.value);
  const handleAuthor = (e) => setSelectedAuthor(e.target.value);
  const handleTagSelect = (e) => setSelectedTags(e.target.value);
  const handleToggleRow = () => setIsSecondRowVisible(!isSecondRowVisible);

  const tabs = [
    "All",
    "Sports",
    "Technology",
    "Politics",
    "Business",
    "Education",
  ];
  const handleButtonClick = () => {
    setVisible(false);
  };

  const handleClose = () => {
    setPromoVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" mt-5 p-4 mb-5 rounded-3 bg-white">
            <form>
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <input
                    placeholder="Please enter search queries here"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <input
                    placeholder="Choose news sources"
                    className="form-control"
                  />
                </div>
              </div>
              {isSecondRowVisible && (
                <section>
                  <div className="row">
                    <div className="col-md-3">
                      <select
                        id="author"
                        className="custom-select form-control mt-2"
                        onChange={handleAuthor}
                      >
                        <option>Choose Author</option>
                        {authors.map((author, index) => (
                          <option key={index} value={author.id}>
                            {author.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select
                        id="tags"
                        className="custom-select form-control mt-2"
                        onChange={handleTagSelect}
                      >
                        <option>Choose Tags</option>
                        {tags.map((tag, index) => (
                          <option key={index} value={tag.id}>
                            {tag.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3 col-12 mb-2 mt-2">
                      <input
                        type="date"
                        id="date_from"
                        className="form-control custom-date-field"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-3 col-12 mb-2 mt-2">
                      <input
                        type="date"
                        id="date_from"
                        className="form-control custom-date-field"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </section>
              )}
              <section>
                <div className="row">
                  <div className="col-md-3">
                    <select
                      className="custom-select form-control mt-2"
                      onChange={handleSelect}
                    >
                      <option>Choose Region</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="custom-select form-control mt-2"
                      onChange={handleChange}
                    >
                      <option>Choose Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select
                      className="custom-select form-control mt-2"
                      onChange={handleUpdate}
                    >
                      <option>Choose Category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <Button
                      type="submit"
                      className="btn style-two fw-semibold w-100 mb-2 mt-2 rounded-5"
                    >
                      Submit <i className="ri-search-2-line"></i>
                    </Button>
                  </div>
                  <div className="col-md-1 d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn border-0"
                      id="toggle-button"
                      onClick={handleToggleRow}
                    >
                      <i
                        className="ri-filter-3-line"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>

        <section>
          <div className="row">
            {/* Left Column: Takes 8 columns on XL and 12 on smaller screens */}
            <div className="col-xl-8 col-lg-12">
              <div className="card">
                <img
                  src="https://www.winzmedia.org/media/app/uploads/news/unfettered-gas-exports-would-harm-us-economy-energy-secretary-warns-c09b1366.jpg"
                  alt="not-found"
                  style={{ height: "600px" }}
                  className="position-relative"
                />
                <div
                  className="position-absolute w-100"
                  style={{ bottom: "50px" }}
                >
                  <div className="d-flex justify-content-center w-100">
                    <ul className="main-card-ul list-unstyled d-flex">
                      <li>
                        <i className="ri-time-line"></i> 2 hour(s) ago
                      </li>
                      <li>
                        <a
                          href="/news/bali-nine-drug-smugglers-return-to-australia"
                          className="text-decoration-none text-black"
                        >
                          #Australia, #Indonesia, #Philippines
                        </a>
                      </li>
                    </ul>

                    <ul className="main-card-ul list-unstyled mx-2">
                      <li>
                        <a
                          href="/news/bali-nine-drug-smugglers-return-to-australia"
                          className="text-decoration-none text-black"
                        >
                          Oceania 🇦🇺 / The New York Times
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="fs-4 bg-primary text-white p-3 mt-2 w-75">
                    <a
                      href="https://www.winzmedia.org/news/bali-nine-drug-smugglers-return-to-australia"
                      className="text-decoration-none text-white"
                    >
                      <span>
                        ‘Bali Nine’ Drug Smugglers Return to Australia
                      </span>
                    </a>
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Column: Takes 4 columns on XL and 12 on smaller screens */}
            <div className="col-12 col-xl-4 col-sm-5 col-lg-12 col-md-12">
  {newsData.map((news, index) => (
    <div className="news-item mb-4" key={index}>
      <div
        className="d-flex align-items-center pt-4"
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <img
          src={news.imageUrl}
          alt="not-found"
          className="rounded-circle news-image"
          style={{ width: "80px", height: "80px" }}
        />
        <div className="news-content">
          <ul className="list-unstyled mb-0" style={{ fontSize: "12px" }}>
            <li className="newstime" style={{ fontSize: "12px" }}>
              <i className="ri-time-line"></i> {news.timeAgo}
            </li>
            <li className="hashtag" style={{ fontSize: "12px" }}>
              <a
                href={news.link}
                className="text-decoration-none text-primary"
              >
                {news.hashtags}
              </a>
            </li>
            <li className="newssource" style={{ fontSize: "10px" }}>
              <a
                href={news.link}
                className="text-decoration-none text-primary"
              >
                {news.source}
              </a>
            </li>
          </ul>
          <b className="fs-16 fw-semibold ls-3 mb-0">
            <a
              href={news.link}
              className="newslink text-decoration-none"
            >
              {news.title}
            </a>
          </b>
        </div>
      </div>
    </div>
  ))}
</div>


          </div>
        </section>

        {/* Card Data section */}
        <section>
          <div className="row mt-5">
            <div className="d-flex justify-content-between">
              <div className="">
                <h3>Featured News</h3>
              </div>
              <div>
                <a
                  href="#"
                  className=" fw-bold text-decoration-none d-inline-flex align-items-center"
                >
                  See All Trending
                  <i className="ri-arrow-right-s-line ms-2"></i>
                </a>
              </div>
            </div>
            {cardData.map((card, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 mt-3" key={index}>
                <div
                  className="card border-0 bg-light pt-3"
                  style={{ marginBottom: "0px" }}
                >
                  <img
                    src={card.imageUrl}
                    alt="card-image"
                    className="card-img-top rounded-3"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div className="card-body">
                    <ul className="list-unstyled text-primary">
                      <li className="card-timeago">
                        <i className="ri-time-line"></i> {card.timeAgo}
                      </li>
                      <li>
                        <a href={card.link}>{card.hashtags}</a>
                      </li>
                      <li>
                        <a href={card.link}>{card.source}</a>
                      </li>
                    </ul>
                    <h5 className="card-title fw-bold">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <div className="d-flex align-items-center">
                      <div className="d-flex mt-3">
                        <ul className="list-unstyled d-flex align-items-center">
                          <li className=" rounded-circle bg-white p-1">
                            <img
                              src="https://www.winzmedia.org/static/assets/img/icons/heart.png"
                              alt="not-found"
                            />
                          </li>
                          <li className=" rounded-circle bg-white p-1">
                            <img
                              src="https://www.winzmedia.org/static/assets/img/icons/angry.png"
                              alt="not-found"
                            />
                          </li>
                        </ul>
                        <span className="mx-2 mt-1 fw-medium">34</span>
                      </div>
                      <div className="position-relative mx-5">
                        <span className="hover-show">
                          <img
                            src="https://www.winzmedia.org/static/assets/img/icons/smile-plus.svg"
                            alt="not-found"
                          />
                        </span>
                        <ul className="list-unstyled d-flex justify-content-center align-items-center gap-2 bg-white rounded-5 p-3 position-absolute">
                          <li>
                            <button className="submit bg-transparent p-0 border-0">
                              <img
                                src="https://www.winzmedia.org/static/assets/img/icons/thumb.png"
                                alt="Thumb"
                              />
                            </button>
                          </li>
                          <li>
                            <button className="submit bg-transparent p-0 border-0">
                              <img
                                src="https://www.winzmedia.org/static/assets/img/icons/crying.png"
                                alt="Thumb"
                              />
                            </button>
                          </li>
                          <li>
                            <button className="submit bg-transparent p-0 border-0">
                              <img
                                src="https://www.winzmedia.org/static/assets/img/icons/heart.png"
                                alt="Thumb"
                              />
                            </button>
                          </li>
                          <li>
                            <button className="submit bg-transparent p-0 border-0">
                              <img
                                src="https://www.winzmedia.org/static/assets/img/icons/angry.png"
                                alt="Thumb"
                              />
                            </button>
                          </li>
                          <li>
                            <button className="submit bg-transparent p-0 border-0">
                              <img
                                src="https://www.winzmedia.org/static/assets/img/icons/worried.png"
                                alt="Thumb"
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Card img section */}
      <div className="bg-white">
        <div className="container mt-5">
          <div className="row d-flex justify-content-between align-items-center ">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-5 mt-sm-2">
              <div className="main-title mt-5 mt-md-3">
                <h5 className="fw-bold fs-2">New Stories Posts</h5>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12 mt-lg-5 mt-md-3 mb-sm-3">
              <ul className="list-unstyled border-0 d-flex justify-content-lg-end gap-2">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      className={`rounded-5 custom-tab-btn px-3 py-1 text-primary ${
                        activeTab === tab ? "bg-primary text-white" : ""
                      } `}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row">
            {/* Loop through cardImage to render cards */}
            {cardImage.map((items, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card border-0 mb-5 mt-4">
                  <img
                    src={items.imageUrl}
                    className="w-100 rounded-3"
                    height={"398px"}
                    alt="not-found"
                  />
                  <div className="card-body">
                    <ul className="d-flex justify-content-start align-items-center gap-2 list-unstyled flex-column">
                      <li>
                        <i className="ri-time-line"></i>
                        {items.timeAgo}
                      </li>
                      <li className="fw-bold">
                        <i className="ri-message-3-line"></i>
                        {items.hashtags}
                      </li>
                      <li className="text-primary fw-bold">
                        <span className="me-3">/</span>
                        {items.source}
                      </li>
                    </ul>
                    <div className="card-title text-center">
                      <h4>{items.title}</h4>
                    </div>
                    <div className="text-center mt-4">
                      <button className="rounded-5 p-2 border-primary">
                        <a className="p-4 text-decoration-none fw-bold">
                          Read more
                          <span>
                            <img
                              src="https://www.winzmedia.org/static/assets/img/icons/long-arrow-blue-2.svg"
                              alt="not-found"
                            />
                          </span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section>
  <div className="container mt-3 rounded-3 bg-primary">
    <div className="row d-flex align-items-center">
        <div className="col-12 col-sm-6 col-md-12 col-lg-4 mt-5 " style={{ marginBottom: "-25px" }}>
          <img
            src="https://www.winzmedia.org/static/assets/img/subscribe.jpg"
           
            className="img"
            alt="not-found"
          />
        </div>

        {/* Text and Form Section */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mx-3 mb-3 p-3">
          <h3 className="fw-medium text-white ">
            Subscribe for updates
          </h3>
          <p className="text-white ">
            This year has been a whirlwind of drama and controversy in the world.
          </p>
          <div>
            <form className="d-flex align-items-center position-relative">
              <input
                className="me-2 form-control bg-primary border-0 text-white"
                placeholder="Enter your Email"
                style={{ borderBottom: "5px solid white" }}
              />
              <button
                className="d-flex fw-bold align-items-center position-absolute end-0 me-5 border-0 rounded-5 px-4 py-2"
                style={{ background: "yellow" }}
              >
                Subscribe
                <span className="px-2">
                  <img
                    src="https://www.winzmedia.org/static/assets/img/icons/long-arrow-blue-2.svg"
                    alt="not-found"
                    style={{ filter: "brightness(0.5)" }}
                  />
                </span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>

</section>


        <section>
          <div className="container pt-5">
            <h2 className="text-center fs-1 fw-bold">Main Topics</h2>
            <div className="row">
              {/* Card Container - Adjusts its size based on screen width */}
              <div className="col-12 col-md-10">
                <div className="row">
                  {cardnews.map((items, index) => (
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 mt-4"
                      key={index}
                    >
                      <div className="card border-0">
                        <img
                          src={items.imageUrl}
                          className="rounded-3"
                          width={"270px"}
                          height={"200px"}
                          alt="not-found"
                        />
                        <a
                          href="https://www.winzmedia.org/news/unfettered-gas-exports-would-harm-us-economy-energy-secretary-warns"
                          className="hashtag-link"
                        >
                          {items.hashtags}
                        </a>
                        <div className="card-body">
                          <ul
                            className="list-unstyled flex-column"
                            style={{ fontSize: "11px" }}
                          >
                            <li>
                              <i className="ri-time-line"></i>
                              {items.timeAgo}
                            </li>
                            <li>
                              <i className="ri-message-3-line"></i>
                              {items.source}
                            </li>
                          </ul>
                          <div className="card-title fw-medium text-lg-start">
                            {items.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Box - Adjusts based on screen width */}
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-4">
                <div className="d-flex justify-content-end">
                  {isPromoVisible && (
                    <div className="promo-box">
                      <button className="close-promo-box" onClick={handleClose}>
                        <i className="ri-close-fill"></i>
                      </button>
                      <h5 className="fw-bold text-white text-center">
                        Work Smarter <br />
                        Heat Your Deadlines
                      </h5>
                      <span className="ad-text">Your ad here</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {isVisible && (
            <div className="container bg-secondary mt-5 rounded-3">
              <div className="d-flex justify-content-end pt-2 ">
                <button className="border-0" onClick={handleButtonClick}>
                  <i className="ri-close-fill "></i>
                </button>
              </div>
              <div className="row">
                <div className="col-xl-7 col-lg-7  p-3 p-sm-3 px-md-3 p-lg-5">
                  <h3 className="text-white">
                    Boost Your Business with Cutting-Edge Marketing Solutions
                    Today
                  </h3>
                  <button
                    className="mt-2 border-0 rounded-5"
                    style={{ backgroundColor: "yellow" }}
                  >
                    Your ad here
                  </button>
                </div>

                <div className="col-xl-4 col-lg-5 pt-sm-2 d-flex justify-content-center align-items-center">
                  <div className="img">
                    <img
                      src="https://www.winzmedia.org/static/assets/img/promo-img.png"
                      alt="not-found"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section>
          <div className="container pt-5">
            <div className="pt-5">
              <h3 className="text-center fw-bold mt-5 fs-1">Authors</h3>
            </div>
            <div className="row pt-5">
              {Authors.map((author, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className=" author p-2 d-flex justify-content-between">
                  <div className="mt-4">
                    <span className="me-3 rounded-5 bg-secondary text-white p-3 author-text">
                      {author.textrounded}
                    </span>
                  </div>
                  <div className="ms-5">
                    <h3 className="author-maintext">{author.maintext}</h3>
                    <ul className="list-unstyled">
                      {author.hashtags.map((hashtag, i) => (
                        <Button
                          className="mt-2 Author-Button border-0 text-primary fw-medium"
                          key={i}
                        >
                          <li>{hashtag}</li>
                        </Button>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
