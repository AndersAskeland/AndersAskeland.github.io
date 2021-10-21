import Head from 'next/head';
import Layout from "../../components/layout"
import Link from 'next/link';


export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="text-2xl text-blue-400">Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}