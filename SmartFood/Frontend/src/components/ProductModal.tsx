import React from 'react';
import type { Product } from './MenuItem';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
      <button onClick={onClose} style={styles.closeButton}>
          &times;
      </button>
      {/* TODO: relpace with actual MenuItem */}
      <svg
          className="menu-item-svg bd-placeholder-img card-img-top"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          width="18vw"
          height="18vw"
        >
          <image href={product.imageUrl} width="100%" height="100%" />
        </svg>
        <h3 style={styles.textStyle}>{product.name}</h3>
        <p style={styles.textStyle}>Price: ${product.price}</p>
        <button
            type="submit"
            data-mdb-button-init
            data-mdb-ripple-init
            className="form-btn btn btn-block mb-4"
          >
            Add to cart
        </button>
      </div>
    </div>
  );
};

const styles = {
    backdrop: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
      position: 'relative' as const,
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      minWidth: '300px',
      maxWidth: '90vw',
    },      
    textStyle: {
      color: 'black',
    },
    closeButton: {
      position: 'absolute' as const,
      top: '8px',
      right: '8px',
      background: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#333',
      lineHeight: 1,
    },
  };

export default ProductModal;
