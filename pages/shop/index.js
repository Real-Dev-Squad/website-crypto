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
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Image } from '../../components/image';
import productData from '../../mock/products.json';

const products = Object.keys(productData);
const Shop = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  return (
    <div>
      <Header />
      <Link href="/cart">Take me to cart</Link>
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

      <Footer />
      <style jsx>{`
        .shoppinglist-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
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
