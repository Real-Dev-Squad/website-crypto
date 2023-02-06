import Link from 'next/link';
import styles from './breadcrumbs.module.css';

const Breadcrumb = ({ link, index, links }) => {
  return (
    <Link key={link} href={`/${link !== 'home' ? link : ''}`}>
      <p className={styles.links}>
        {link}
        {index !== links.length - 1 && <>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</>}
      </p>
    </Link>
  );
};

export default Breadcrumb;
