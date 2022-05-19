import React, { useRef } from "react";
import Head from "next/head";
import { NavBar, Footer } from "..";

const Layout = ({ children }) => {
  const ref = useRef(null);

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

      <main
        className="main-container min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors m-0 "
        id="main-container"
        ref={ref}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export { Layout };
