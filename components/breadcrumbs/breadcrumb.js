import Link from 'next/link';
import styles from './breadcrumbs.module.css';

const Breadcrumb = ({ link, index, links }) => {
  return (
    <div className={styles.links}>
      <Link key={link} href={`/${link !== 'home' ? link : ''}`}>
        <span data-testid={`breadcrumbs-link-${link}`}>{link}</span>
      </Link>
      <span data-testid="breadcrumbs-separator">
        {index !== links.length - 1 && <>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</>}
      </span>
    </div>
  );
};

export default Breadcrumb;
