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
      <img src="../public/logo512.png" />
      <p> {product.name}</p>
      <p> {product.price}</p>
      <button onClick={() => handleAddProduct(product.name)}> + </button>
      <button onClick={() => handleRemoveProduct(product.name)}> - </button>
      <p> Quantity : {props.quantity}</p>
    </div>
  );
};
