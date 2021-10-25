import PropTypes from 'prop-types';

import { useState } from 'react';
import styles from 'components/Searchbar/Searchbar.module.css';

export function Searchbar({ getSearchQuery }) {
  const [searchQery, setSearchQuery] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();

    getSearchQuery(searchQery);
    setSearchQuery('');
  };

  const handleOnChange = e => setSearchQuery(e.target.value);

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleOnSubmit}>
        <button type="submit" className={styles.SearchForm__button}>
          <span className={styles.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={styles.SearchForm__input}
          value={searchQery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleOnChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  getSearchQuery: PropTypes.func.isRequired,
};
