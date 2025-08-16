import React from 'react';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAdd: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAdd }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{price}</p>
      <button className={styles.cta} onClick={onAdd}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
