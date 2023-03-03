import Head from "next/head";

export default function Layout({children, className}:any) {
  return ( 
    <div className={className}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio, created using NextJS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {children}
      </div>
    </div>
  );
}