import PropTypes from 'prop-types';
import styles from 'components/Modal/Modal.module.css';
import { createPortal } from 'react-dom';

export function Modal({ img, togleModal }) {
  return createPortal(
    <div className={styles.Overlay} onClick={togleModal}>
      <div className={styles.Modal}>
        <img src={img.dataset.source} alt={img.alt} />
      </div>
    </div>,
    document.getElementById('modalRoot'),
  );
}

Modal.propTypes = {
  img: PropTypes.object,
  togleModal: PropTypes.func,
};
