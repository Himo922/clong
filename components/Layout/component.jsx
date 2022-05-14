import React from "react";
import Head from "next/head";

import { NavBar, Footer } from "../../components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title> CLong Jounary </title>
        <meta name="description" content="Profolio of Clong" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="main-container min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors m-0 ">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export { Layout };
