import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../Gallery";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "../Loader";

import * as imageApi from "../../servise/apiFeatch";
import mapper from "../../utils/mapper";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isModal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    fetchImages(query, page);
  }, [query, page]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  const fetchImages = (query, page) => {
    setLoading(true);

    imageApi
      .fetchImg(query, page)
      .then(({ data: { hits } }) =>
        setImages((prevState) => [...prevState, ...mapper(hits)])
      )
      .catch((error) => console.log(`error`, error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleToggleModal = (modalImg) => {
    setModalImg(modalImg);
    setModal(!isModal);
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const onClickLoadMore = (e) => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {!!images.length && (
        <ImageGallery images={images} onModal={handleToggleModal} />
      )}
      {images.length >= 12 && !isLoading && (
        <Button onClickLoadMore={onClickLoadMore} />
      )}
      {isModal && (
        <Modal
          image={modalImg}
          query={query}
          onCloseModal={handleToggleModal}
        />
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default App;
