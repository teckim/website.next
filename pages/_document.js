import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" key="desc" content="A software engineer from Algeria who focuses on cutting-edge web technologies including React, VueJs, Ruby on Rails, and Laravel. in addition to highly sought-after competencies in TypeScript, testing, and GraphQL." />
          <meta property="og:title" content="Hakim - Software developer" />
          <meta
            property="og:description"
            content="A software engineer from Algeria who focuses on cutting-edge web technologies including React, VueJs, Ruby on Rails, and Laravel. in addition to highly sought-after competencies in TypeScript, testing, and GraphQL."
          />
          <meta
            property="og:image"
            content="/images/profile.jpg"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument