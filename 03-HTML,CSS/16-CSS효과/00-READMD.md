# CSS 효과

## #01. 박스 그림자 효과

```css
box-shadow: [inset]   x-offset   y-offset   blur-radius   color;
```

- x-offset : 본체와 그림자의 가로축 거리 (px단위)
- y-offset : 본체와 그람자의 세로축 거리 (px단위)
- blur-radius : 그림자의 번짐 정도 (px단위)
- color : 그림자의 색상

그림자 관련 값들을 콤마로 구분하여 여러개 지정할 경우 포토샵의 레이어 처럼 처리할 수 있다.


### 1) inset이 없는 경우

그림자가 박스의 뒤에 생성된다. (DropShadow 효과)

- x-offset : +값인 경우 박스의 오른쪽에 생성된다.
- y-offset : +값인 경우 박스의 아래쪽에 생성된다.

### 2) inset이 적용된 경우

그림자가 박스의 안쪽으로 생성된다. (InnerShadow 효과)

- x-offset : +값인 경우 박스의 왼쪽에 생성된다.
- y-offset : +값인 경우 박스의 위쪽에 생성된다.

## #02. 둥근 모서리 효과

### 1) 박스의 모서리를 둥글게 표시하기

4개의 값을 한번에 설정하는 형태와 단일 값을 설정하는 형태가 있다.

- 4개의 값을 부여하는 경우 : 좌측 상단부터 시계방향으로 모서리의 값을 서로 다르게 설정할 수 있다.<br/>각 값은 공백으로 구분한다.
    - ex: 5px  6px  7px  8px
- 단일 값을 사용하는 경우 : 네 모서리 모두 동일한 값이 적용된다.
- 4 모서리를 개별적으로 설정하기 위한 분리 속성
    - border-top-left-radius : 좌측 상단 모서리 처리
    - border-top-right-radius : 우측 상단 모서리 처리
    - border-bottom-left-radius : 좌측 하단 모서리 처리
    - border-bottom-right-radius : 우측 하단 모서리 처리

### 2) 이미지 둥글게 표시하기

border-radius 속성을 이미지에 적용할 경우 원 모양의 이미지 표현이 가능하다.

```css
.img-circle {
    border-radius: 50%;
}
```
```html
<img src="..." class="img-circle" width="100" height="100" />
```

## #03. 투명도

모든 HTML요소에 대해 `opacity` 속성을 사용하여 투명도를 지정할 수 있다.

`0`은 완전 투명, `1`은 불투명, `0.5`는 반투명이다.

## #04. 요소 변형하기

요소의 형태를 변환한다.

이 때 변형되는 요소의 중심을 기준으로 상대적으로 좌표가 구성된다.

두 개 이상의 효과를 적용할 경우 공백으로 구분하여 함수를 명시한다.

```css
transform: 함수1(값) 함수1(값) ... 함수n(값)
```

| 함수 | 설명 | 적용 예 |
|---|---|---|
| rotate | 중점을 기준으로 회전한다.<br/>각도가 양수인 경웅 오른쪽, 음수인 경우 왼쪽으로 회전한다. | `transform: rotate(45deg);` |
| rotateX | X축을 기준으로 회전한다. | `transform: rotateX(45deg);` |
| rotateY | Y축을 기준으로 회전한다. | `transform: rotateY(45deg);` |
| translate | 요소를 이동한다. 가로,세로 순서로 값을 지정한다. | `transform: translate(45px 45px);` |
| translateX | 요소를 횡으로 이동한다. | `transform: translateX(45px);` |
| translateY | 요소를 종으로 이동한다. | `transform: translateY(45px);` |
| scale | 요소의 크기를 변환한다. 가로,세로 순서로 값을 지정한다. | `transform: scale(2, 2);` |
| scaleX | 요소의 넓이를 변환한다. | `transform: scaleX(2);` |
| scaleY | 요소의 높이를 변환한다. | `transform: scaleY(2);` |
| skew | 요소를 찌그러트린다. | `transform: skew(45deg 45deg);` |
| skewX | 요소를 찌그러트린다. | `transform: skewX(45deg);` |
| skewY | 요소를 찌그러트린다. | `transform: skewY(45deg);` |


## #04. 트랜지션

CSS 프로퍼티의 값이 변화할 때, 프로퍼티 값의 변화가 일정 시간(duration)에 걸쳐 일어나도록 하는 것.

```css
transition: 속성명 시간 [리듬];
```

- 속성명을 지정할 경우 해당 속성에 대해서만 작용한다.
- 속성명을 `all`로 지정할 경우 모든 CSS속성에 작용한다.
- 시간은 `1/1000`초를 의미하는 `ms`단위와 `1`초단위를 의미하는 `s`를 사용할 수 있다.
  - ex) `300ms`, `0.3s`
- 리듬은 트랜지션 효과의 변화 흐름, 시간에 따른 변화 속도와 같은 일종의 변화의 리듬을 지정한다.

### 트랜지션 리듬

| 프로퍼티값 | 효과 |
|---|---|
| ease | 기본값. 느리게 시작하여 점점 빨라졌다가 느리지면서 종료한다. |
| linear | 시작부터 종료까지 등속 운동을 한다. |
| ease-in | 느리게 시작한 후 일정한 속도에 다다르면 그 상태로 등속 운동한다. |
| ease-out | 일정한 속도의 등속으로 시작해서 점점 느려지면서 종료한다. |
| ease-in-out | ease와 비슷하게 느리게 시작하여 느리지면서 종료한다. |


## #05. Media Query

CSS가 적용될 해상도 구간을 지정하여 구간별로 CSS를 다르게 적용하는 기법

### 1) 적용예시

#### 최소 해상도만 지정한 경우

```CSS
@media screen and (min-width: 최소넓이px) {
    selector {
        속성: 값
    }
}
```

#### 최소 해상도만 지정한 경우

```CSS
@media screen and (max-width: 최대넓이px) {
    selector {
        속성: 값
    }
}
```

#### 해상도 구간을 지정한 경우

```CSS
@media screen and (min-width: 최소넓이px) and (max-width: 최대넓이px) {
    selector {
        속성: 값
    }
}
```

### 2) 반응형 웹

미디어 쿼리를 활용하여 하나의 웹 페이지가 해상도 구간에 따라 다른 레이아웃으로 구성되도록 한 웹 페이지

#### 최소 해상도 중심

```CSS
/* Small devices (landscape phones, 576px and up) */
@media screen and (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media screen and (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) { ... }

/* X-Large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) { ... }

/* XX-Large devices (larger desktops, 1400px and up) */
@media screen and (min-width: 1400px) { ... }
```

#### 최대 해상도 중심

```CSS
/* X-Small devices (portrait phones, less than 576px) */
@media screen and (max-width: 576px) { ... }

/* Small devices (landscape phones, less than 768px) */
@media screen and (max-width: 768px) { ... }

/* Medium devices (tablets, less than 992px) */
@media screen and (max-width: 992px) { ... }

/* Large devices (desktops, less than 1200px) */
@media screen and (max-width: 1200px) { ... }

/* X-Large devices (large desktops, less than 1400px) */
@media screen and (max-width: 1400px) { ... }
```


## #06. 반응형 웹 디자인의 9가지 기본 원칙
> 출처: https://knulab.com/archives/1153