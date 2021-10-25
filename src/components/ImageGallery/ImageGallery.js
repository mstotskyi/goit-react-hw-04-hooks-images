import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from 'components/ImageGallery/ImageGallery.module.css';
import PicsApiService from 'services/apiService';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import Spiner from 'components/Loader/Loader';

const newPicsApiService = new PicsApiService();

export function ImageGallery({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('init');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showSpiner, setShowSpiner] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    newPicsApiService.query = searchQuery;
    newPicsApiService.resetPage();
    newPicsApiService
      .fetchPictures()
      .then(result => {
        setSearchResults(result);
        setStatus('success');
      })
      .catch(error => {
        setStatus('error');
      });
  }, [searchQuery]);
  const handleOnClick = e => {
    newPicsApiService.incrementPage();
    setShowSpiner(true);
    newPicsApiService
      .fetchPictures()
      .then(result => {
        setSearchResults(prevState => [...prevState, ...result]);
        setShowSpiner(false);
        setStatus('success');
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setStatus('error');
      });
  };
  const togleModal = () => setShowModal(!showModal);
  const openModal = e => {
    setShowModal(!showModal);
    setModalImage(e.target);
  };

  if (status === 'init') {
    return <h1>Hallo! Search something!</h1>;
  }
  if (status === 'pending') {
    return <Spiner />;
  }
  if (status === 'success') {
    return (
      <>
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem photos={searchResults} showModal={openModal} />
        </ul>
        {showSpiner && <Spiner />}
        <Button handleOnClick={handleOnClick} />
        {showModal && <Modal togleModal={togleModal} img={modalImage} />}
      </>
    );
  }
  if (status === 'error') {
    alert('ERROR!!');
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
