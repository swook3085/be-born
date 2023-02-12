import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='ko'>
      <Head>
        <link
          rel='icon'
          type='image/x-icon'
          href='https://www.be-born.net/favicon.ico'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
        <script
          type='text/javascript'
          src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=x2ojyebyl2'
        ></script>
      </Head>
      <body>
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
