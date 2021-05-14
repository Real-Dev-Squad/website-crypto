import path from 'path';
import Image from 'next/image';
import StockOperation from '@components/stock-operation';

export const Card = ({ stock, operationType }) => {
  const {
    id,
    stockId,
    name,
    stockName,
    price,
    quantity,
    initialStockValue,
  } = stock;

  const finalPrice = operationType == 'BUY' ? price : initialStockValue;
  const finalName = operationType == 'BUY' ? name : stockName;
  const finalId = operationType == 'BUY' ? id : stockId;

  return (
    <div className="stock-card">
      <Image
        src={path.join('/assets', 'stocks.jpg')}
        alt={stock.name || stock.stockName}
        width={100}
        height={100}
        objectFit="cover"
        layout="fixed"
      />

      <div className="stock-card__content">
        <p className="stock-card-product-name">
          {stock.name || stock.stockName}
        </p>
        <p className="stock-card-product-price">
          {stock.price || stock.initialStockValue} 💲
        </p>
        <p className="stock-card-product-quantity">
          {' '}
          Quantity : {stock.quantity}
        </p>
        <div>
          <StockOperation
            stockId={finalId}
            name={finalName}
            price={finalPrice}
            availableQty={quantity}
          />
        </div>
      </div>
      <style jsx>
        {`
          .stock-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 10px;
            padding-top: 16px;
            border: 1px solid #eee;
            box-shadow: 0 2px 2px #ccc;
            text-align: center;
            min-width: 300px;
            border-radius: 4px;
            transition: 0.2s;
            background: #ffffff;
          }
          .stock-card:hover {
            box-shadow: 0px 4px 10px #ccc;
            cursor: pointer;
          }
          .stock-card .img {
            width: 80%;
            flex: 1;
          }
          .stock-card__content {
            text-align: center;
            width: 100%;
            padding: 1rem;
            background-color: #ffffff;
          }

          .stock-card-product-name {
            font-weight: bold;
            font-size: 1.3em;
            color: #540075;
          }
          p {
            margin-block-start: 0.5rem;
            margin-block-end: 0.5rem;
          }
          .stock-card-product-price {
            font-weight: bold;
            font-size: 1.3em;
            color: #e30062;
          }
          .stock-card-product-quantity {
            font-size: 1.3em;
            color: #540075;
          }
        `}
      </style>
    </div>
  );
};
