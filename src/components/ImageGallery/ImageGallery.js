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
  // const togleSpiner = () => setShowSpiner(!showSpiner);
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

// export class ImageGallery extends Component {
//   state = {
//     searchResults: [],
//     status: 'init',
//     showModal: false,
//     modalImage: '',
//     showSpiner: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.searchQuery !== this.props.searchQuery) {
//       this.setState({ status: 'pending' });
//       newPicsApiService.query = this.props.searchQuery;
//       newPicsApiService.resetPage();
//       newPicsApiService
//         .fetchPictures()
//         .then(result =>
//           this.setState({ searchResults: result, status: 'success' }),
//         )
//         .catch(error => {
//           this.setState({ status: 'error' });
//         });
//     }
//   }

//   handleOnClick = e => {
//     newPicsApiService.incrementPage();
//     this.togleSpiner();
//     newPicsApiService
//       .fetchPictures()
//       .then(result => {
//         this.setState(prevState => ({
//           searchResults: [...prevState.searchResults, ...result],
//           status: 'success',
//         }));
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//         this.togleSpiner();
//       })
//       .catch(error => {
//         this.setState({ status: 'error' });
//       });
//   };
//   togleSpiner = () => this.setState({ showSpiner: !this.state.showSpiner });
//   togleModal = () => this.setState({ showModal: !this.state.showModal });

//   showModal = e => {
//     this.togleModal();
//     this.setState({ modalImage: e.target });
//   };

//   render() {
//     if (this.state.status === 'init') {
//       return <h1>Hallo! Search something!</h1>;
//     }
//     if (this.state.status === 'pending') {
//       return <Spiner />;
//     }
//     if (this.state.status === 'success') {
//       return (
//         <>
//           <ul className={styles.ImageGallery}>
//             <ImageGalleryItem
//               photos={this.state.searchResults}
//               showModal={this.showModal}
//             />
//           </ul>
//           {this.state.showSpiner && <Spiner />}
//           <Button handleOnClick={this.handleOnClick} />
//           {this.state.showModal && (
//             <Modal togleModal={this.togleModal} img={this.state.modalImage} />
//           )}
//         </>
//       );
//     }
//     if (this.state.status === 'error') {
//       alert('ERROR!!');
//     }
//   }
// }

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
