import Footer from '@components/layout/Footer'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
//@ts-ignore
import bundleCss from '!raw-loader!../../styles/tailwindSSR.css' //빌드한거 import

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    ctx.renderPage((App) => (props) => <App {...props} />)
    const initialProps = await Document.getInitialProps(ctx)
    initialProps.html
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key='custom'
          dangerouslySetInnerHTML={{
            __html: bundleCss,
          }}
        />,
      ],
    }
  }
  render() {
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
            src='//dapi.kakao.com/v2/maps/sdk.js?appkey=f11cdef7d37fa803c81368d3b354c5fb&libraries=services,clusterer'
          ></script>
        </Head>
        <body>
          <Main />
          <div id='portal' />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument
