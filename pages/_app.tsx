import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Head>
        <title>Ashutosh | Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <div className="absolute rounded-full -z-10 top-40 right-20 w-44 h-44 bg-gradient-to-tr from-glass-70 to-glass-30"></div>
        <div className="absolute w-64 h-64 rounded-full -z-10 dark:invisible bg-gradient-to-tr from-glass-70 to-glass-30 bottom-20 left-20"></div>
        <div className="flex items-center justify-center lg:h-screen">
          <div className="z-20 flex flex-col items-center justify-center mt-4 text-sm md:flex-row lg:px-36 sm:px-10 md:px-12">
            <Sidebar />
            <div className="">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
