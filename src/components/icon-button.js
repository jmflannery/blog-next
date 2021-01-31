import React from 'react';
import Link from 'next/link';

import styles from './IconButton.module.css';

const IconButton = ({href, text, children}) => (
  <Link href={href}>
    <a>
      <div className={styles.container}>
        {children}
        <span className={styles.text}>{text}</span>
      </div>
    </a>
  </Link>
);

export default IconButton;
