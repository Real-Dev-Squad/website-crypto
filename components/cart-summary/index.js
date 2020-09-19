export const CartSummary = ({total = 0} =props) => {
  return (
    <div className="cart-summary-container">
      <p> SUMMARY </p>
      <p> Subtotal :RDS {total}.00 </p>
      <p> Taxes : RDS {total > 0 ? 10 : '0.00'} </p>
      <p> Confirm </p>
      <style jsx>
        {`
          .cart-summary-container {
            width: 25%;
            background-color: #19279e;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          p :last-child {
            border: none;
            padding: 8px;
            width: 100%;
            font-size: 20px;
            background-color: #88d870;
            text-align: center;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};
