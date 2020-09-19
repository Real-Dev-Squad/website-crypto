export const ShopCard = (props) => {
  const { product } = props;
  const handleAddProduct = (item) => {
    console.log(event);
    props.add.addCartItem(item);
    props.add.addShopListItem(item);
  };

  const handleRemoveProduct = (item) => {
    props.del.delCartItem(item);
    props.del.delShopListItem(item);
  };
  return (
    <div className="shop-card">
      <p> {product.name}</p>
      <p> RDS {product.price}</p>
      <div>
        <button onClick={() => handleAddProduct(product.name)}> + </button>
        <button onClick={() => handleRemoveProduct(product.name)}> - </button>
      </div>
      <p> Quantity : {props.quantity}</p>
      <style jsx>{`
        .shop-card {
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .shop-card > img {
          border: 1px solid;
          width: 200px;
          height: 200px;
        }
      `}</style>
    </div>
  );
};
