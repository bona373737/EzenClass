//가장 일반적인 형태의 목록구조(쇼핑목록,웹툰목록...)
//목록을 구성하는 배열 외에 목록을 설명하기 위한 부가정보도 함께 포함

const bbs ={
    title : "공지사항",
    count : 4,
    item :[
        {id:1, subject:"첫 번째 게시물 제목"},
        {id:2, subject:"두 번째 게시물 제목"},
        {id:3, subject:"세 번째 게시물 제목"},
        {id:4, subject:"네 번째 게시물 제목"},
    ]
}
console.log("게시판이름" + bbs.title);
console.log("전체 게시물 수 "+ bbs.count);

//for문을 사용하여 item목록 가져오기 
for(let i=0; i<bbs.item.length; i++){
    console.log("["+bbs.item[i].id+"]"+bbs.item[i].subject);
}


//for of문을 사용하여 item목록 가져오기
for(let k of bbs.item){
    console.log("["+k.id+"]"+k.subject);
}