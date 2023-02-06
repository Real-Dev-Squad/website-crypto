import Link from 'next/link';
import styles from './breadcrumbs.module.css';

const Breadcrumb = ({ link, index, links }) => {
  return (
    <div className={styles.links}>
      <Link key={link} href={`/${link !== 'home' ? link : ''}`}>
        <span className={styles.link}>{link}</span>
      </Link>
      <span>
        {index !== links.length - 1 && <>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</>}
      </span>
    </div>
  );
};

export default Breadcrumb;
