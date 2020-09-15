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
import {Footer} from '../../components/footer';
import {Image} from '../../components/image';
import productData from '../../mock/products.json'

const products = Object.keys(productData);
const Shop = (props) => {
  const { addCartItem, addShopListItem } = props;
  const { delCartItem, delShopListItem } = props;
  return (
    <div>
      <Header/>
    <div className="shoppinglist-container">
      {products.map((itemName) => {
        return (
          <>
          <Link href="/shop/[product]" as={`/shop/${itemName}`}> 
            <a>
          <Image image = {{src : "", alt : {itemName} , height:300 , width:300}}/>
            </a>
          </Link>
          <ShopCard
            key={itemName}
            product={productData[itemName]}
            quantity={props.shopListItemsCount[itemName] || 0}
            add={{ addCartItem, addShopListItem }}
            del={{ delCartItem, delShopListItem }}/>
          </> 
        );
      })}
      </div>
      <Link href="/cart">Take me to cart</Link>
      <Footer/>
      <style jsx>{`
      .shoppinglist-container {
        display : flex;
        justify-content: space-between;
      }
      .shoppinglist-container > a {
        text-decoration: none;
        color : inherit;
        height : 300px;
        width : 300px;
        border : 1px solid
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
