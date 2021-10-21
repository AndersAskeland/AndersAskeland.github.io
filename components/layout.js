import Head from "next/head";

const name = "Anders Askeland";
export const siteTitle = "Anders Askeland Webpage";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal webpage of Anders Askeland" />
      </Head>     
      {children}
    </div>
  );
}
