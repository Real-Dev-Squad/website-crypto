import PropTypes from 'prop-types';
import colors from '../../color/color.json';

export const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary-container">
      <p> SUMMARY </p>
      <p> Subtotal :RDS {total}.00 </p>
      <p> Taxes : RDS {total > 0 ? 10 : '0.00'} </p>
      <p> Confirm </p>
      <style jsx>
        {`
          .cart-summary-container {
            background-color: ${colors.blue.light};
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: none;
            padding: 20px;
            cursor: pointer;
            position: absolute;
            left: 50%;
            transform: translateY(30%);
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

CartSummary.propTypes = {
  total: PropTypes.number,
};

CartSummary.defaultProps = {
  total: 0,
};
