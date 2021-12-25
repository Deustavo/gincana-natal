import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            backgroundImage: "url(https://i.imgur.com/A7UJtTT.jpg)",
            width: "100%",
            height: "100%",
            backgroundSize: "cover"
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument