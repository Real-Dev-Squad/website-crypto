import Breadcrumb from './breadcrumb';

const Breadcrumbs = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => {
        return (
          <Breadcrumb key={link} index={index} link={link} links={links} />
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
