import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="keywords"
            content="Full Stack web developer,competitive coder"
          />
          <meta
            property="og:title"
            content="Ashutosh Kumar's Portfolio website"
          />
          <meta property="og:description" content="Full stack(MERN) Web Dev" />
          <meta
            property="og:url"
            content="https://portfolio-lyart-alpha-50.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.48tYyveyZGKwh4IwxKfQgAHaDu%26pid%3DApi&f=1"
          />
        </Head>
        <body className="bg-gradient-to-r from-light-bg1 to-light-bg2 dark:from-dark-200 dark:to-dark-500 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
