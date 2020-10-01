//TODO : change the image path
import path from 'path';
import Link from 'next/link';
export const ShopCard = (props) => {
  const { product } = props;
  const handleAddProduct = (item) => {
    props.add.addCartItem(item);
    props.add.addShopListItem(item);
  };

  const handleRemoveProduct = (item) => {
    props.del.delCartItem(item);
    props.del.delShopListItem(item);
  };
  return (
    <div className="shop-card">
      <Link href={props.link.href} as={props.link.as}>
        <img src={path.join('./assets', product.image)} alt={product.name} />
      </Link>
      <div className="shop-card__content">
        <p> {product.name}</p>
        <p> {product.price}</p>
        <button onClick={() => handleAddProduct(product.name)}> + </button>
        <button onClick={() => handleRemoveProduct(product.name)}> - </button>
        <p> Quantity : {props.quantity}</p>
      </div>
      <style jsx>{`
        .shop-card {
          display: inline-block;
          margin: 10px;
          border: 1px solid #eee;
          box-shadow: 0 2px 2px #ccc;
          width: 400px;
          text-align: center;
        }
        .shop-card img {
          width: 150px;
          height: auto;
        }
        .shop-card__content {
          padding: 1rem;
          text-align: center;
        }
        .shop-card__content button {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
};
