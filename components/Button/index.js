const Button = (props) => {
  return (
    <button className="custom-button" onClick={props.clickHandler}>
      {' '}
      {props.children}
      <style jsx>
        {`
          .custom-button {
            padding: 2em;
            background-color: ${props.background || 'blue'};
            color: ${props.color || 'white'};
            height: ${props.height || '3em'};
            width: ${props.width || '10em'};
          }
        `}
      </style>
    </button>
  );
};

export default Button;
