import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    //fallback이 true 일때
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    // paths: [{ params: { pid: "p1" } }],
    paths: pathsWithParams,
    // fallback: "blocking", //  path에 대한 요청이 들어온 경우 fallback 상태를 보여주지 않고 SSR처럼 동작
    // fallback: false, // 반환되지 않은 path외 모든 path는 자동으로 404페이지를 라우팅
    fallback: true, // true가 되면 getStaticProps의 동작이 변한다,
  };
}
