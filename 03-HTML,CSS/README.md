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
## 문장 관련 요소
단어나 문장을 강조하는 방법

## #01. 단어나 문장 강조하기

### 1) 글자의 모양, 색상, 크기

```html
<font [face="글꼴이름"] [color="색상값"] [size="크기"]> ... 내용 ... </font>
```

#### 글꼴

내 컴퓨터에 설치되어 있는 글꼴이 접속자에게 없다면 운영체제의 기본 글꼴로 표시된다.

#### 색상값

`#RRBBGG` 형식의 16진수 모음을 사용하거나 `rgb(red, green, blue)` 형태를 사용한다.

- RR, GG, BB : `00~ff`의 16진수 숫자값 (00=어두움, ff=밝음)
- red,green,blue : 0~255 사이의 숫자값 (0=어두움, 255=밝음)

구글에서 **color picker** 검색 후 나타나는 도구 사용 가능


### 2) 단어, 문장 강조하기


#### 형광팬 강조 효과

```html
<mark> ... 내용 ... </mark>
```

#### 내용을 굵게 표시하기

```html
<strong>내용</strong>
```

혹은

```html
<b>내용</b>
```

#### 밑줄 표시

```html
<u>내용</u>
```

#### 기울임꼴 표시하기

```html
<i>내용</i>
```

#### 굵게 + 밑줄

```html
<strong><i>내용</i></strong>
<b><i>내용</i></b>
<i><strong>내용</strong></i>
<i><b>내용</b></i>
```

#### 밑줄 + 기울임

```html
<u>><i>내용</i></u>
<i><u>내용</u></i>
```

그 밖의 다양한 조합으로 사용 가능함.

#### CSS를 적용하기 위한 영역 지정

```html
<span> ... 내용 ... </span>
```

이 태그는 HTML 코드 자체만으로는 아무런 기능이 없다.

추후 공부할 CSS(디자인코드)가 적용되기 위한 영역을 구성하기 위해 사용한다.



## #02. 페이지 이동처리 (링크)

### 1) 링크 기본

```html
<a href="파일이름 혹은 사이트 주소" [target="_blank"]> ... 내용 ... </a>
```
target 속성을 적용할 경우 새창(새탭)으로 표시됨.

같은 사이트 내의 파일을 지정할 경우는 상대경로, 절대경로 사용 가능.

웹에서의 절대경로는 `http://`부터 시작되는 온라인 상의 주소를 의미

다른 사이트 주소를 명시할 경우 절대경로 형식만 가능함.

### 2) 스크롤 이동하기
href 속성에 `#`을 지정한 경우 현제 페이지의 맨 위로 스크롤 이동   
href 속성에 `#id값`을 지정한 경우 해당 id값을 갖고 있는 HTML태그의 위치로 스크롤 이동

### 3) 데이터 링크

#### 이메일 보내기
```html
<a href="mailto:이메일주소"> ... 내용 ... </a>
```

#### 전화걸기(스마트폰 전용)
```html
<a href="tel:전화번호"> ... 내용 ... </a>
```


## #03. 주소, 연락처, 카피라이트 표시
```html
<address> ... 내용 ... </address>
```

이 태그 안에는 지금까지 학습한 모든 종류의 HTML 태그를 포함시킬 수 있다.