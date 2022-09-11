import ReactDOMServer from "react-dom/server";
// 서버에서 리액트 컴포넌트를 렌더링 할 때 쓰는 함수
const html = ReactDOMServer.renderToString(
  <div>Hello Server side rendering!</div>
);

console.log(html);
