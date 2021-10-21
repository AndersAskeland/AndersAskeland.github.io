import Head from 'next/head';
import Layout from "../../components/layout"
import PrefixedLink from "../../components/prefixedlink";


export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First post - Test</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <PrefixedLink href="/">
          <a className="text-2xl text-blue-400">Back to home</a>
        </PrefixedLink>
      </h2>
    </Layout>
  )
}