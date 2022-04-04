/* 
*Ajax요청을 처리하고 결과(json)을 콜백함수에게 전달한다.
*eg) ajaxHelper('backend/simple.json','GET',json=>{});
@param {string} url
@param {stting} method
@param {string} success
 */

function ajaxHelper(url, method, success) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onreadystatechange = (e) => {
        const ajax = e.target;

        if (ajax.readyState == XMLHttpRequest.DONE) {
            if (ajax.status == 200) {
                if (!success != undefined) {
                    const json = JSON.parse(ajax.responseText);
                    success(json);
                }
            } else {
                const s = parseInt(ajax.status / 100);
                if (s == 4) {
                    console.log('[%d]%s - 요청주소가 잘못되었습니다', ajax.status, ajax.statusText);
                } else if (s == 5) {
                    console.log('[%d]%s - 서버의 응답이 없습니다.', ajax.status, ajax.statusText);

                } else {
                    console.log('[%d]%s - 요청에 실패했습니다.', ajax.status, ajax.statusText);
                }
            };
        } //end if
    }
    xhr.send();
}