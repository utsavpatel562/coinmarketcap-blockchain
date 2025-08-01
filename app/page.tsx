// app/page.tsx or app/page.jsx
import React from "react";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.jpeg" />
      </Head>
      <div className="bg-slate-200 h-screen p-10">
        <div className="text-2xl text-slate-200 bg-slate-900 p-3 rounded-3xl h-full place-content-center text-center">
          CoinMarketCap - Blockchain (Web 3.0)
        </div>
      </div>
    </>
  );
}

export default Page;
