// app/page.tsx or app/page.jsx
import React from "react";
import Head from "next/head";
import Header from "@/components/Header";

function Page() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.jpeg" />
      </Head>
      <div className="bg-white h-screen">
        {/* Header */}
        <Header />
        <div className="mt-10" />
        {/* Trending Coins */}
        <div className="mt-20" />
        {/* Full Table with coins*/}
      </div>
    </>
  );
}

export default Page;
