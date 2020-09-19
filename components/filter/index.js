import Button from '../Button';

const Filter = (props) => {
  return (
    <div className="filter-container">
      <Button className="filter-button" color="blue">
        {' '}
        Filter{' '}
      </Button>
      <div className="filter-content">
        <li onClick={() => props.handleCreditSort()}>Sort on credit</li>
        <li onClick={() => props.handleDebitSort()}>Sort on debit </li>
        <li onClick={() => props.handleDateSort()}>Sort on date</li>
        <li onClick={() => props.showOriginal()}> Show original data</li>
      </div>
      <style jsx>{`
        .filter-container {
          position: relative;
          display: inline-block;
        }
        .filter-content {
          display: none;
          position: absolute;
          background-color: aqua;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        .filter-content li {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        .filter-container:hover .filter-content {
          display: block;
        }
        .filter-content li:hover {
          background-color: #ddd;
        }
        .filter-button {
          border: none;
        }
        .filter-button:hover {
          background-color: orange;
        }
      `}</style>
    </div>
  );
};

export default Filter;
