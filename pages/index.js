import Head from "next/head";
import PrefixedLink from "../components/prefixedlink";
import Layout, { siteTitle } from "../components/layout";

export default function Homepage() {
  return (
    <Layout>
      <Head> 
        <title>{siteTitle}</title>
      </Head>
    <h1 className="text-4xl text-blue-700">
      Read{" "}
      <PrefixedLink href="/posts/first-post">
        <a>This page - Go here</a>
      </PrefixedLink>
    </h1>
    </Layout>
  );
}

