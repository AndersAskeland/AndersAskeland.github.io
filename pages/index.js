import Head from "next/head";
import Link from 'next/link';
import Layout, { siteTitle } from "../components/layout";

export default function Homepage() {
  return (
    <Layout>
      <Head> 
        <title>{siteTitle}</title>
      </Head>
    <h1 className="text-4xl text-blue-700">
      Read{" "}
      <Link href="/posts/first-post">
        <a>This page - Go here</a>
      </Link>
    </h1>
    </Layout>
  );
}

