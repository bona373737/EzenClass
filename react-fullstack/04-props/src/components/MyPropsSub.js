import React from "react";

/**
 * props
 * 컴포넌트를 사용하는 부모로부터 전달받는 변수값이 포함되어 있는 객체
 * 부모로부터 전달받는 값이 있는 경우에 선언한다.
 * 컴포넌트에게 HTML속성같은 형태로 전달된다(개발자도구를 보면 dataset형태로 명시된 값이 확인됨)
 */

const MyPropsSub = (props) => {
  console.group("MyPropsSub");
  console.log(props);
  console.log(typeof props.name);
  console.log(typeof props.age);
  console.groupEnd();

  return (
    <div>
      <h3>MyPropsSub</h3>
      <p>
        제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.
      </p>
    </div>
  );
};

//props전달이 누락된 경우에 대비하여 기본값 설정
MyPropsSub.defaultProps = {
  name: "이름없음",
  age: 20,
};

export default MyPropsSub;
