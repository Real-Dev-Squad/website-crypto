import NavBar from '../NavBar';
import personData from '../../mock/person.json';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../components/footer';
import styles from './product-details.module.css';

const renderUses = (productJSON) =>
  productJSON.usage.map((use, id) => <p key={id}> {use} </p>);

const renderThumbImage = (productJSON) => {
  const productArr = [];
  for (let i = 0; i < 3; i++) {
    productArr.push({
      imageUrl: `/assets/${productJSON.image}`,
      imageId: `${productJSON.id}`,
    });
  }
  return productArr;
};

export const ProductDetails = ({ productJSON }) => {
  return (
    <>
      <NavBar personData={personData} />
      <div className={styles.details}>
        <div className={styles.bigImg}>
          <Image
            width={600}
            height={319}
            src={`/assets/${productJSON.image}`}
            alt={productJSON.id}
            layout="responsive"
          />
        </div>

        <div className={styles.box}>
          <div className={styles.row}>
            <h2>{productJSON.name}</h2>
            <span>{productJSON.price} Dineros </span>

            <h3 className={styles.description}>Description</h3>
            <p>{renderUses(productJSON)}</p>

            <div className={styles.thumb}>
              {renderThumbImage(productJSON).map((product) => (
                <img
                  key={product.imageId}
                  src={product.imageUrl}
                  alt={product.imageId}
                />
              ))}
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
