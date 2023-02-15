import Link from 'next/link';
import styles from './breadcrumbs.module.css';

const Breadcrumb = ({ link, index, links }) => {
  return (
    <div className={styles.links} data-testid="breadcrumbs">
      <Link key={link} href={`/${link !== 'home' ? link : ''}`}>
        {link}
      </Link>
      <span>
        {index !== links.length - 1 && <>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</>}
      </span>
    </div>
  );
};

export default Breadcrumb;
