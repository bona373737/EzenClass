//ajax와 달리 파라미터로 콜백함수가 없다. 
//promise의 실행결과 반환값이 promise객체를 반환해 주므로..!


function ajaxPromiseHelper(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onreadystatechange = e => {
            const ajax = e.target;
            if (ajax.status == 200) {
                const json = JSON.parse(ajax.responseText);
                //promiser기법은 콜백함수를 줄이기 위해 등장한 기법이다.
                //통신에 성공했을 경우 콜백함수가 아닌 resolve를 호출한다.
                //바깥 실행 부분의 .then(function(){}) 영역의 콜백함수를 대신 호출해줌
                resolve(json);
            } else {
                const s = parseInt(ajax.status / 100);
                let msg = null;
                if (s == 4) {
                    msg = '요청주소가 잘못되었습니다.';
                } else if (s == 5) {
                    msg = '서버의 응답이 없습니다.';
                } else {
                    msg = '요청에 실패했습니다.';
                }
                //통신에 실해했을 경우 콜백호출이 아닌 reject를 호출한다.
                //바깥 실행부분의 .catch(function(e){}) 영역의 콜백함수를 대신 호출해줌
                reject({
                    status: ajax.status,
                    text: ajax.statusText,
                    msg: msg
                });
            }

        } //onreadystatechange end

        xhr.send();

    }) //primise end

} //function end