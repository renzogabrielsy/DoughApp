import type { AppProps } from "next/app";
import Layout from "../app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dough. App',
    description: 'A personal financial tracking app.',
  }

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}