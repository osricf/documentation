import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './card.module.scss';

export function Card({
  children,
  className,
  description,
  href,
  imageSrc,
  title,
  to,
  isContentDelimited = false,
  variant,
}) {
  const asCallToAction = !!(href || to);
  const WrapperElement = asCallToAction ? (to ? Link : 'a') : 'div';
  const TitleElement = asCallToAction ? 'h3' : 'h2';

  return (
    <WrapperElement
      {...(!href ? {} : { href })}
      {...(!to ? {} : { to })}
      className={clsx(
        styles.card,
        (asCallToAction && styles['card--cta']),
        (isContentDelimited && styles['card--content-delimited']),
        (variant && styles[`card--${variant}`]),
        className,
      )}
    >
      {title && (
        <TitleElement className={styles.card__title}>
          {title}
          {asCallToAction && (
            <span className={styles.card__title__arrow}>
              →
            </span>
          )}
        </TitleElement>
      )}
      {description && (
        <p className={styles.card__description}>
          {description}
        </p>
      )}
      {children}
      {imageSrc && (
        <img
          className={styles.card__image}
          src={imageSrc}
        />
      )}
    </WrapperElement>
  );
}
