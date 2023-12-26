import Document, { Html, Main, NextScript } from "next/document";

// class로 정의해야함
// body 안에 랜더링 되기전에 넣고 싶은 div 같은거 할 때 사용
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
