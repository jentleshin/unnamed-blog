import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head />
        <body className="dark:bg-organic bg-lime">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
