import NavBar from '../NavBar';
import personData from '../../mock/person.json';
import PropTypes from 'prop-types';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../components/footer';

export const ProductDetails = ({ productJSON }) => {
  return (
    <>
      <NavBar personData={personData} />
      <div className="details">
        <div className="big-img">
          <Image
            width={600}
            height={319}
            src={path.join('/assets', productJSON.image)}
            alt={productJSON.id}
            layout="responsive"
          />
        </div>

        <div className="box">
          <div className="row">
            <h2>{productJSON.name}</h2>
            <span>{productJSON.price} Gold Coins</span>

            <h3 className="description">Description</h3>
            <p>
              {productJSON.usage.map((use, id) => {
                return <p key={id}> {use}</p>;
              })}
            </p>

            <div className="thumb">
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
            <button className="cart-btn">
              <Link href="/cart">Add to cart</Link>
            </button>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .details {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 30px 0;
          }
          .details .big-img {
            width: 55%;
            max-height: 400px;
            margin: 25px;
            border-radius: 4px;
          }
          .details .box {
            min-width: 290px;
            margin: 0 25px;
          }
          .box .row {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 15px;
          }
          .box .row h2 {
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .description {
            magrin-bottom: 0;
            letter-spacing: 2px;
            position: relative;
          }
          .description::after {
            content: '';
            position: absolute;
            background-color: red;
            height: 2px;
            width: 130px;
            top: 28px;
            left: 0;
            border-radius: 10px;
          }
          .box p {
            line-height: 1.5;
            margin: 0 0 15px 0;
          }
          .thumb {
            width: 100px;
            height: 100px;
            display: flex;
            cursor: pointer;
            margin: 10px 0;
          }
          .thumb img {
            width: 100%;
            height: 100%;
            display: block;
            border: 1px solid #ddd;
            margin-right: 5px;
            opacity: 0.7;
            border-radius: 5px;
          }
          .thumb img:hover {
            opacity: 1;
            border: 1px solid lightseagreen;
          }
          .box .cart-btn {
            background: #333;
            color: white;
            outline: none;
            border: none;
            cursor: pointer;
            padding: 10px 25px;
            margin-top: 15px;
            border-radius: 4px;
          }

          @media (max-width: 500px) {
            .thumb {
              width: 32%;
            }
            .thumb img {
              width: 100%;
            }
          }
        `}</style>
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
