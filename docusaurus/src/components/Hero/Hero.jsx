import React from 'react';
import styles from './hero.module.scss';

export function Hero({
  children,
  description,
  title,
  ...rest
}) {
  return (
    <header
      className={styles.hero}
      {...rest}
    >
      {title && (
        <h1 className={styles.hero__title}>
          {title}
        </h1>
      )}
      {description && (
        <p className={styles.hero__description}>
          {description}
        </p>
      )}
      {children}
    </header>
  )
}
