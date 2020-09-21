import colors from '../../color/color.json';

const Header = (props) => {
  return (
    <header>
      {props.msg}
      {props.comp}
      <style jsx>
        {`
          header {
            padding: 20px;
            background-color: ${colors.pink.primary};
            font-size: 1.5em;
            color: white;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </header>
  );
};

export default Header;