/**
 * @description juso.go.kr(도로명주소안내시스템) OpenApi활용 
 * 
 * Api인증키 devU01TX0FVVEgyMDIyMDYyNzE1MjYxMDExMjczNjE=
 */

import axios from 'axios';

(async()=>{
    let json = null;
    try{
        //axios를 활용하여 다른 백엔드에게 HTTP GET파라미터를 전달하고 결과를 리턴받는다. 
        const response = await axios.get("https://www.juso.go.kr/addrlink/addrLinkApi.do",{
            params:{
                confmKey: 'devU01TX0FVVEgyMDIyMDYyNzE1MjYxMDExMjczNjE=',  //발급받은 승인키
                currentPage:1,     // 현재 페이지번호
                countPerPage:20,   //페이지당 출력할 결과 Row수
                keyword:'서초w',   //주소검색어
                resultType: 'json'
            }
        });

        //해당 api는 통신오류일때도 통신상태코드는 200으로 정상으로 주기때문에 
        //응답받은 데이터 중에 errorCode값에 따라 직접 error를 발생시키는 코드를 작성해줘야 한다.
        if(response.data.results?.common?.errorCode !== "0"){
            const error = new Error();
            error.response = {
                status: response.data.results.common.errorCode,
                statusText: response.data.results.common.errorMessage
            }
            throw error;
        }
        json = response.data;

    }catch(error){
        const errorMsg = "[" + error.response.status + "]" + error.response.statusText;
        console.error(errorMsg);
        return;
    }

    json.results.juso.map((item,index)=>{
        console.log("[%s]",item.zipNo);
        console.log("[지번주소]"+item.jibunAddr);
        console.log("[도로명주소]"+item.roadAddr);
        console.log();
    })

})();
