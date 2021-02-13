import { connect } from 'react-redux';
import Link from 'next/link';
import { ShopCard } from '../../components/shoplist-card';
import { getShopListCount } from '../../redux/selector';
import {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
} from '../../redux/action';
// import Header from '../../components/header';
import { Footer } from '../../components/footer';
import productData from '../../mock/products.json';
import personData from '../../mock/person.json';
import NavBar from '../../components/NavBar';

const products = Object.keys(productData);
const Shop = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  return (
    <>
      <NavBar personData={personData} />
      <div className="main-container">
        <div className="layout">
          <div className="content">
            {/* <Header /> */}
            <div className="take-to-cart">
              <button>
                <Link href="/cart">Take me to cart</Link>
              </button>
            </div>
            <div className="shoppinglist-container">
              {products.map((itemName) => {
                return (
                  <ShopCard
                    key={itemName}
                    product={productData[itemName]}
                    quantity={props.shopListItemsCount[itemName] || 0}
                    add={{ addCartItem, addShopListItem }}
                    del={{ delCartItem, delShopListItem }}
                    link={{ href: '/shop/[product]', as: `/shop/${itemName}` }}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
        <style jsx>{`
          .take-to-cart {
            text-align: center;
            padding-top: 10px;
          }
          .layout {
            min-height: calc(100vh-58px);
            position: relative;
          }
          .take-to-cart button {
            background: #540075;
            color: white;
            border: 1px solid #540075;
            border-radius: 5px;
            padding: 0.5rem 2rem;
            font: inherit;
            cursor: pointer;
          }
          .content {
            min-height: 87vh;
            padding-bottom: 75px;
          }
          .shoppinglist-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: stretch;
          }
        `}</style>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const shopListItemsCount = getShopListCount(state);
  return { shopListItemsCount };
};

export default connect(mapStateToProps, {
  addCartItem,
  delCartItem,
  addShopListItem,
  delShopListItem,
})(Shop);
