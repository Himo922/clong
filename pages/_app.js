import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { StateContext } from "../context/StateContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <AnimateSharedLayout type="crossfade">
          <Layout>
            <Toaster />
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </Layout>
        </AnimateSharedLayout>
      </ThemeProvider>
    </StateContext>
  );
}
