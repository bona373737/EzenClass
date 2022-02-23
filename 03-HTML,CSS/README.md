# HTML,CSS
하나의 웹페이지는 HTML + CSS +JAVASCRIPT

## HTML문서 작성 규칙
웹접근성을 확보하기 위해 시멘틱웹을 작성해야 하며 이를 위해서 웹표준을 준수해야 한다.   

    **웹 접근성**   
    모든사람(혹은 모든 기기)는 정보의 접근에 차별을 받지 않아야 한다.
    장애인 차별 금지법에 명시되어 있음

    **시멘틱 웹**   
    시멘틱웹으로 작성된 페이지는 시작장애인용 웹브라우저(스크린리더)를 활용하여 웹페이지 탑색이 가능하다.   
    기계가 문장의 용도를 파악할 수 있도록 문장에 의미를 부여한 형태   
    HTML태그를 기계가 이해할 수 있도록 제목,소제목,본문 등 의미가 부여된 태그를 사용한다.  

    **웹 표준**   
    올바른 시멘틱 웹을 구성할 수 있도록 권장하는 HTML제작기법   
    웹 표준이 준수될 경우 기기의 종류를 가리지 않고 모두 동일한 형태의 결과를 확인 할수 있기 때문에   
    웹접근성이 확보된다. 

## HTML 기본 구조
    ```html
    <!-- DTD(document type definition) -->
    <!DOCTYPE html> 
    <html lang="en">
    <!-- 페이지 설정 부분 -->
    <head>
        <!-- 파일의 저장형식(인코딩)을 명시(다국어지원을 위해 기본값은 UTF-8) -->
        <meta charset="UTF-8"> 
        <!--  -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- 모바일 장치별 해상도 단일화 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 브라우저 표시될 문서 제목 -->
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    ```

## `<head>`안에 기술되는 주요 내용

#### 언어 저장 특성 명시 (다국어 지원을 위해 utf-8 사용)

```html
<meta charset="utf-8" />
```

#### 모바일 장치 별 해상도 단일화

```html
<meta name="viewport" 
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
```

#### 브라우저 타이틀

```html
<title>제목</title>
```

### 주석문

소스코드 내에 작성되는 설명문.

코드의 용도와 기능을 설명하기 위한 용도로 작성된다.

`<!--`와 `-->`로 감싸서 표현한다.

```html
<!-- 이 부분은 주석입니다. 브라우저가 설명문으로 인식하여 화면에 표시하지 않습니다. -->
```

## 문단, 목록, 영역 나누기
- 문단 : h1 제목 -> h2 소제목 -> p 본문 -> blockquote 인용문
- 목록 : ul, ol
- 영역 : 아래 예시는 sementic tag사용 대신 div태그에 id값으로 구분   
    id="container" -> 사이트 전체영역_정렬,사이트폭 설정 등의 용도   
    id="header" -> 사이트 상단영역_로고,메인메뉴 등..   
    id="content" -> 사이트 내용역역_사이트바,내용 등...   
    id="sidebar" -> 왼쪽 사이드바 영역   
    id="main" -> 오른쪽 본문영역   
    id="footer" -> 사이트 하단영역_카피라이트,주소 등...
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container">
        <div id="header">
            <h1> 우리 사이트 </h1>
        </div>
        <hr/>

        <div id="content">
            <div id="sidebar">
                <h2>메뉴 선택하기</h2>
                <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                </ul>
            </div>
            <hr/>

            <div id="main">
                <h1>웹 접근성이란?</h1>
                <h2>장애 구분없이 모든사람이 정보 공유 가능하도록</h2>
                <p>
                    모든사람(혹은 모든 기기)는 정보의 접근에 차별을 받지 않아야 한다.
                    장애인 차별 금지법에 명시되어 있음
                </p>
                <blockquote>
                    <p>월드와이드 웹을 창시한 팀 버너스리는 말했다....</p>
                </blockquote>
            </div>
        </div>
        <hr/>

        <div id="footer">
            <address> copyright&copy;itpaper.co.kr</address>
        </div>
    </div>
</body>
</html>
```