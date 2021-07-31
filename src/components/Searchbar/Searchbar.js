import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.Button}>
          <span className={styles.Label}>Search</span>
        </button>

        <input
          className={styles.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
