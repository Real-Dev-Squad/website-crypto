const Image = (props) => {
  return (
    <>
      <img
        src={'../../public/user-female-alt-icon.png'}
        alt={props.image.alt}
        height={300}
      />
      <style jsx>
        {`
        img {
            
    `}
      </style>
    </>
  );
};

export { Image };
