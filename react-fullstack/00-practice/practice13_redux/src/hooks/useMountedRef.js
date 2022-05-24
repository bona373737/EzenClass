import React from 'react';

//페이지 로딩이 완료됬음을 감지하기 위한 커스텀 훅
const useMountedRef = ()=>{
  const moutedRef = React.useRef(false);

  React.useEffect(()=>{
    setTimeout(()=>{
      moutedRef.current = true;
    })
  })
  return moutedRef
};

export default useMountedRef;