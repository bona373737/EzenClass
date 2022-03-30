class CookieHelper {

    //constructor(){ };


    /* 
    *setCookie 메서드 
    *쿠키를 저장한다. 저장시 이름,값은 내부에서 urlencoding처리 한다.
    *@param {string} name  ->저장할 쿠키의 이름
    *@param {string} value -> 저장할 쿠키의 값
    *@param {json} options -> 유효시간,유효경로,도메인 등을 json으로 묶어서 보낸다.
    
    */
    setCookie(name, value, options = {}) {
        if (options.path == undefined) {
            options.path = '/';
        }

        //expires 값이 Date클래스의 객체라면 UTCstring타이브로 변환함(max-age가 있으면 사용 안해도됨)
        // 2021-11-25T05:09:30.569z
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        //"이름=값"형식으로 저장할 문자열을 만듦
        let updateCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        //options에 명시된 정보가 있다면 추가함
        for (let optionKey in options) {
            updateCookie += ';' + optionKey;
            let optionValue = options[optionKey];

            //옵션에 값이 없으면
            if (optionValue !== true) {
                //
                updateCookie += '=' + optionValue;
            }
        }

        ///쿠키에 저장
        document.cookie = updateCookie;
    };

    deleteCookie(name) {
        //max-age값을 0으로 설정하여 name에 대한 쿠키가 즉시 삭제하도록 설정함
        this.setCookie(name, '', {
            'max-age': 0
        });
    };

    getCookie(name) {
        //주어진 이름에 대해 "; name=<value>" 패턴을 찾아 value부분만 반환함
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

        //반환할 값이 있다면 decoding을 수행하고 없다면 undefined를 반환함
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


}