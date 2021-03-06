import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
import AppBar from "./appbar";
import FooterBar from "./footer";
import AlertStack from "./alert/alertStack";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>미남이시네요</title>
        <link rel="icon" type="image/x-icon" href="/minam-icon.svg"></link>
      </Head>
      <header className={styles.header}>
        <AppBar />
      </header>
      <main className={styles.main}>
        {children}
        <AlertStack />
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>
  );
}
