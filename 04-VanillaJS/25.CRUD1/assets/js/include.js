//@include.js
//@component 연결하기
//html파일에 component를 위치시킬 곳에 비어있는 div태그를 넣고
//data-include속성 값에 component파일의 경로를 등록해 놓는다.
//자바스크립트로 등록해 놓은 경로를 가져와서 해당 경로로 axios통신을 진행하여 데이터를가져온다.



//data-include 속성을 갖는 모든 요소에 대한 탐색
Array.from(document.querySelectorAll('*[data-include]')).map((async (v, i) => {
    // console.log(v);
    const include = v.dataset.include;
    // console.log(include);

    let html = null;
    try {
        const response = await axios.get(include);
        // console.log(response);
        html = response.data;
        // console.log(data);
    } catch (e) {
        console.error(e);
    }

    if (html != null) {
        v.outerHTML = html;
    }
}))