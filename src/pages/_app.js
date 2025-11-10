import Layout from '@/layout/Layout';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aniket Kapse | frontend developer</title>
        <meta name="description"
          content="Aniket Kapse is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and Webflow. Explore her portfolio to see her latest projects and learn more about her skills and experience." />
        <meta name="author" content="Aniket Kapse" />

        {/* Open Graph */}
        <meta property="og:title" content="Aniket Kapse's Portfolio" />
        <meta property="og:description" content="Aniket Kapse - Frontend Developer. Passionate about creating exceptional websites that merge functionality with aesthetics. Specializing in frontend development. Crafting user-friendly and responsive solutions that enhance user experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
