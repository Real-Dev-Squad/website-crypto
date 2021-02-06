import NavBar from '../NavBar';
import personData from '../../mock/person.json';
import PropTypes from 'prop-types';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../components/footer';
import styles from './product-details.module.css';

export const ProductDetails = ({ productJSON }) => {
  return (
    <>
      <NavBar personData={personData} />
      <div className={styles.details}>
        <div className={styles.bigImg}>
          <Image
            width={600}
            height={319}
            src={path.join('/assets', productJSON.image)}
            alt={productJSON.id}
            layout="responsive"
          />
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <h2>{productJSON.name}</h2>
            <span>{productJSON.price} Gold Coins</span>

            <h3 className={styles.description}>Description</h3>
            <p>
              {productJSON.usage.map((use, id) => {
                return <p key={id}> {use}</p>;
              })}
            </p>

            <div className={styles.thumb}>
              <img
                src={path.join('/assets', productJSON.image)}
                alt={productJSON.id}
              />
              <img
                src={path.join('/assets', productJSON.image)}
                alt={productJSON.id}
              />
              <img
                src={path.join('/assets', productJSON.image)}
                alt={productJSON.id}
              />
            </div>
            <button className={styles.cartBtn}>
              <Link href="/cart">Add to cart</Link>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

ProductDetails.propTypes = {
  productJSON: PropTypes.object,
};

ProductDetails.defaultProps = {
  productJSON: {},
};
