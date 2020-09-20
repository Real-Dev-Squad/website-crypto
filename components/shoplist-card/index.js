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
          margin: 2rem auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          width: 50rem;
          max-width: 90%;
        }
        .shop-card img {
          width: 100%;
          height: auto;
          object-fit: cover;
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
