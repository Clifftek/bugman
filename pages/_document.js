import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon.png'></link>
          <meta name='theme-color' content='#7c3aed' />
          <link
            rel='apple-touch-icon'
            sizes='190x190'
            href='/icon-384x384.png'
          />
          <link
            rel='favicon.ico'
            sizes='190x190'
            href='icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='38x38'
            href='/icon-384x384.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='19x19'
            href='/icon-192x192.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
