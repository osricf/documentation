import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './home.module.scss';
import { Card, Container, Hero } from '../../components';

const pageTitle = 'Welcome to Strapi’s documentation';
const pageDescription = 'Get set up in minutes to build any projects in hours instead of weeks.';

export function PageHome() {
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
    >
      <main className={clsx('font-poppins', styles.home)}>
        <Hero
          id="homeHero"
          title={(
            <span
              dangerouslySetInnerHTML={{
                __html: pageTitle.replace('Strapi', '<br />Strapi'),
              }}
            />
          )}
          description={pageDescription}
        />
        <section
          id="homeCarousel"
          className={styles.home__carousel}
        >
          <Container>
            {[
              {
                isContentDelimited: true,
                title: 'Can’t wait to use Strapi?',
                description: (
                  <>
                    {'If demos are more your thing, we have a '}
                    <a href="https://youtu.be/zd0_S_FPzKg">video demo</a>
                    {', or you can request a '}
                    <a href="https://strapi.io/demo">live demo</a>!
                  </>
                ),
                children: (
                  <button
                    href="/dev-docs/intro"
                    data-decorative="🚀"
                  >
                    Quick start
                  </button>
                ),
              },
              {
                isContentDelimited: true,
                variant: 'cloud',
                title: 'Strapi Cloud ☁',
                description: (
                  <>
                    {'If demos are more your thing, we have a '}
                    <a href="https://youtu.be/zd0_S_FPzKg">video demo</a>
                    {', or you can request a '}
                    <a href="https://strapi.io/demo">live demo</a>!
                  </>
                ),
                children: (
                  <button
                    href="/cloud/intro"
                  >
                    Strapi Cloud
                  </button>
                ),
              },
            ].map((carouselItem, carouselItemIndex) => (
              <Card
                key={`pageHomeCarouselItem${carouselItemIndex}`}
                {...carouselItem}
              />
            ))}
          </Container>
        </section>
        <section
          id="homeCategories"
          className={styles.home__categories}
        >
          <Container>
            <div className="row">
              {[
                {
                  card: {
                    to: '/dev-docs/intro',
                    title: 'Developer Documentation',
                    description: 'Learn how to get Strapi up-and-running',
                  },
                }
              ].map((categoryItem, categoryItemIndex) => {
                return (
                  <div
                    key={`pageHomeCategoryItem${categoryItemIndex}`}
                    className="col"
                  >
                      <Card
                        {...categoryItem.card}
                      />
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  );
}
