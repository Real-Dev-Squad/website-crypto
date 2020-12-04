//TODO : change the image path
import path from 'path';
import Link from 'next/link';
export const ShopCard = ({ product, quantity, add, del, link }) => {
  const { image, name, price } = product;
  const handleAddProduct = (item) => {
    add.addCartItem(item);
    add.addShopListItem(item);
  };

  const handleRemoveProduct = (item) => {
    del.delCartItem(item);
    del.delShopListItem(item);
  };
  return (
    <div className="shop-card">
      <Link href={link.href} as={link.as}>
        <img src={path.join('./assets', image)} alt={name} />
      </Link>
      <div className="shop-card__content">
        <p className="shop-card-product-name"> {name}</p>
        <p className="shop-card-product-price"> {price}</p>
        <div className="shop-card-product-qnty">
          <button onClick={() => handleAddProduct(name)}> + </button>
          <span>{quantity}</span>
          <button onClick={() => handleRemoveProduct(name)}> - </button>
        </div>
      </div>
      <style jsx>{`
        .shop-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin: 10px;
          border: 1px solid #eee;
          box-shadow: 0 2px 2px #ccc;
          text-align: center;
          min-width: 300px;
          border-radius: 30px;
          transition: 0.2s;
        }
        .shop-card:hover {
          box-shadow: 0px 4px 10px #ccc;
          cursor: pointer;
        }
        .shop-card img {
          width: 80%;
          flex: 1;
        }
        .shop-card__content {
          text-align: center;
          width: 100%;
          padding: 1rem;
        }
        .shop-card__content button {
          background: none;
          border: 0.2rem solid #540075;
          border-radius: 0.4rem;
          font-size: 1.1em;
          font-weight: bold;
        }
        .shop-card-product-name {
          font-weight: bold;
          font-size: 1.3em;
          color: #540075;
        }
        p {
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }
        .shop-card-product-price {
          font-weight: bold;
          font-size: 1.3em;
          color: #e30062;
        }
        .shop-card-product-qnty {
          display: flex;
          font-size: 1.3em;
          width: 100%;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
