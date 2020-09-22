export const Footer = () => {
  return (
    <footer>
      The contents of this website are deployed from this <a href="https://github.com/Real-Dev-Squad/website-crypto" target="_blank">open sourced repo</a>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 10px;
          margin: 5px;
        }
        footer a {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
