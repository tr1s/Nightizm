import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import blogStyles from './writings.module.scss';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={`inner-wrapper ${blogStyles.writings}`}>
        <div className="title-container">
          <h1 className="title">WRITINGS</h1>
          <h1 className="subtitle">ON THE WALL</h1>
        </div>

        <ul className={blogStyles.posts}>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li className={blogStyles.post} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={blogStyles.postLink}>
                  <small>
                    <Date dateString={date} />
                  </small>
                  <h2 className={blogStyles.postTitle}>{title}</h2>
                  <p className={blogStyles.postDescription}>{excerpt}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}