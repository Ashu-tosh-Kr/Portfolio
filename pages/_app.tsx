import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <div className="absolute rounded-full top-30 right-10 w-44 h-44 bg-gradient-to-tr from-glass-70 to-glass-30"></div>
        <div className="absolute w-64 h-64 rounded-full dark:invisible bg-gradient-to-tr from-glass-70 to-glass-30 bottom-20 left-20"></div>
        <div className="grid grid-cols-12 gap-6 px-5 mt-4 text-sm lg:px-36 sm:px-20 md:px-32">
          <div className="col-span-12 p-4 text-center shadow-custom-light bg-gradient-to-tr from-glass-70 backdrop-filter dark:shadow-custom-dark backdrop-blur-sm to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-3 rounded-2xl">
            <Sidebar />
          </div>
          <div className="flex flex-col col-span-12 p-4 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-70 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
