# CSS 선택자

## #01. CSS 개요

HTML로 구성된 페이지 골격에 디자인을 입히는 언어.

### 1) 서술 방법

#### a) HTML문서에 의존한다.

`<head>`태그 안에 `<style>`태그를 명시하고 그 안에 서술한다.

```html
<head>
    <style [type="text/css"]>
        ... CSS 구문 ...
    </style>
</head>
```

#### b) CSS구문만을 별도로 저장한 외부파일을 참조.

`<style>~</style>` 안에 명시하는 CSS 구문을 별도의 파일에 작성해 두고 HTML에서 해당 파일의 경로를 참조한다.

```html
<link rel="stylesheet" [type="text/css"] href="파일의경로" />
```

#### c) HTML태그의 style속성을 활용

거의 사용 안함.

```html
<div style="CSS구문"></div>
```


### 2) CSS 구문 구조

```css
    selector {
        속성: 값;
        속성: 값;
        ...
    }
```

- selector (선택자) : 디자인이 적용될 대상을 지정한다.
- `속성: 값;` : 하나의 디자인 속성을 명시한다.


## #02. selector (선택자)

CSS가 적용될 대상을 지정하는 방법.

1. **태그이름** --&gt; `ex) h1 { color: red; }`
2. **class** : 앞에 점을 포함한 단어를 사용하여 selector를 정의하고 HTML태그의 class속성에서 점을 제외한 단어를 사용하여 연결한다.
    * 태그 종류에 상관 없이 여러번 재사용이 가능하다.
    ```html
    .hello { color: red; }
    <div class="hello"> </div>
    ```
3. **id** : 앞에 `#`을 포함한 단어를 사용하여 selector를 정의하고 HTML태그의 id속성에서 점을 제외한 단어를 사용하여 연결한다.
    * 하나의 HTML문서 안에서 다른 요소와 중복될 수 없다.
    ```html
    #hello {color: red; }
    <div id="hello"> </div>
    ```

### 1) 여러 개의 선택자 사용하기

콤마로 구분하여 선택자를 여러개 명시하면 동시에 여러 요소가 같은 디자인 속성을 공유할 수 있다.

```CSS
h1, h2, .myclass, #myid {
    ...
}
```


### 2) 가상클래스

HTML요소가 어떤 상황을 직면했을"때" 적용되는 selector (~~할 때)

대부분 링크에 대해 적용한다.

| 가상클래스 | 설명 |
|---|---|
| link | 링크의 기본 상태 |
| visited | 방문한 경험이 있는 링크 |
| hover | 마우스가 올라가 있는 요소 |
| active | 마우스가 눌러져 있는 요소 |

##### 사용예

```css
a:link { ... }
a:visited { ... }
a:hover { ... }
a:active { ... }
```


### 3) selector 조합하기

특정 요소를 자세하게 명시하고자 할 때 사용한다. (띄어쓰기 X)

#### 태그이름 + class

```css
  div.hello
```

#### 태그이름 + id

```css
  div#hello
```


### 4) 자식셀렉터

HTML의 계층구조를 순차적으로 ">"를 사용하여 표현한 것.

```CSS
div > span > input.form_control {
    ...
}
```

```html
<div>
    <span><input class="form_control" /></span>
</div>
```

### 5) 자손셀렉터

HTML의 계층구조를 공백을 사용하여 표현한 것. 반드시 순차적일 필요는 없다.

```CSS
div span input.form_control {
    ...
}
```

```html
<div>
    ... ? ...
    <span> ...?... <input class="form_control" /> ...?... </span>
    ... ? ...
</div>
```

### 6) 속성셀렉터

HTML태그의 속성과 값을 [] 안에 표현함

| 셀렉터 | 설명 |
|--------|------|
| a[href] | href라는 속성을 갖는 a태그 (값은 상관 없음) |
| a[href="#"] | href속성값이 "#"인 a태그 (값이 반드시 일치해야 함) |
| #hello[method='post'] | method속성의 값이 post인, id값이 hello인 어떤 태그 |
| .choose[value='123'] | value속성의 값이 123인, class값이 choose인 어떤 태그 |


### 7) n번째 요소

CSS셀렉터가 복수 요소를 의미할 경우 그 중에서 몇 번째인지를 지정.


| 셀렉터 | 설명 |
|--------|------|
| foo:first-child(2) | foo라는 셀렉터를 갖는 요소 중에서 첫번째 요소 |
| foo:last-child(2) | foo라는 셀렉터를 갖는 요소 중에서 마지막 요소 |
| foo:nth-child(2) | foo라는 셀렉터를 갖는 요소 중에서 2번째 |
| foo:nth-child(odd) | 홀수번째 |
| foo:nth-child(2n) | 짝수번째 |
| foo:nth-child(3n) | 3의 배수 번째 |
| foo:nth-last-child(숫자) | nth-child와 같은 규칙이지만 뒤에서부터 요소를 카운트 |


## #03. CSS 구체성 단위

CSS 셀렉터에 id, class, tag이름이 갖는 점수를 계산하여 점수가 높은 selector가 우선 순위를 갖는다.

- id: 100점
- class: 10점
- tag: 1점