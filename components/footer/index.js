export const Footer = () => {
  return (
    <footer>
      The contents of this website are deployed from this <a href="https://github.com/Real-Dev-Squad/website-crypto" target="_blank">open sourced repo</a>
      <style jsx>{`
        footer {
          text-align: center;
          padding-top: 20px;
          margin-bottom: 10px;
          // following lines are for getting the footer at the bottom on all the pages
          position: relative;
          height: 42px;
          margin-top: -42px;
        }
        footer a {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
