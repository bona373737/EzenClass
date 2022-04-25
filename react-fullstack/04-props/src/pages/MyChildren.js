import React from "react";
import MyChildrenSub from "../components/MyChildrenSub";
import Meta from "../components/Meta";

const MyChildren = () => {
  return (
    <div>
      <Meta
        title="MyChildren.js"
        description="여기는 Mychildren.js파일 입니다."
        url={window.location.href}
      />
      <h2>MyChildren</h2>
      <MyChildrenSub width={400} height={100}>
        <b>Hello World</b>
      </MyChildrenSub>
      <MyChildrenSub width={300} height={80}>
        <b>안녕 React</b>
      </MyChildrenSub>
      <MyChildrenSub width={300} height={80} />
    </div>
  );
};
export default MyChildren;
