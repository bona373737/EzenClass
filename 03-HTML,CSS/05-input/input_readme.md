# 입력요소

## #01. 입력 양식 구성

### 1) 입력 양식 영역 만들기

```html
<form   [method="get/post"]  [action="backend-url"]
        [enctype="multipart/form-data"]>
</form>
```

- method: 입력값을 백엔드 페이지에게 전송하는 방식 (GET,POST,PUT,DELETE)
- action : 입력값을 전송받을 백엔드 페이지의 URL
- enctype: 파일 업로드가 요구될 경우 명시

화면 UI를 구성하는 과정에서는 중요하지 않기 때문에 method, action, enctype 속성은 명시하지 않는 경우가 많다.


### 2) 입력양식 안에서의 그룹 지정 (필요한 경우만 수행)

```html
<fieldset>                      ← 그룹의 영역 지정
    <legend> 제목 </legend>     ←  그룹의 제목을 표현
    ... 입력 항목들을 표현 ...
</fieldset>
```


## #02. 입력항목

### 1) 입력양식 기본 구성

```html
<input type="종류"
    name="백엔드에서의 식별자" 
    [id="CSS,JS에서의 식별자"]
    [value="입력값"]
    [placeholder="설명글"]
    [maxlength="최대입력가능한 글자 수"]
    [min="최소값"]
    [max="최대값"]
    [step="입력단위"]
    [checked]
    [required] />
```

#### 입력양식의 기본 종류

아래의 값 중 하나를 type 속성에 명시한다.

| 속성명 | 설명 |
|---|---|
| `text` | 일반 텍스트를 입력한다. (아이디, 글 제목 등)  |
| `password` | 비밀번호를 입력한다. 입력 내용이 `*`로 표시된다.  |
| `checkbox` | 체크박스를 표시한다. (여러개 선택)  |
| `radio` | 라디오 버튼을 표시한다. (단일 선택) |
| `button` | 아무런 기능이 없는 버튼을 표시한다. 눌렀을 때 동작할 기능은 Javascript로 구현해야 한다.  |
| `submit` | 입력 내용을 백엔드에게 전송하기 위한 버튼을 표시한다.  |
| `reset` | 입력 내용을 초기화 시키는 버튼을 표시한다.  |
| `image` | `src` 속성에 지정된 이미지 버튼을 표시한다. submit과 기능이 동일하다. |
| `time` | 시간을 선택할 수 있는 요소를 표시한다.  |


#### 스마트폰의 키보드에 영향을 주는 종류

| 속성명 | 설명 |
|---|---|
| `email` | 이메일을 입력할 수 있는 요소를 표시한다.  |
| `tel` | 전화번호 입력을 위한 요소를 표시한다.  |
| `url` | 웹 사이트 주소를 입력할 수 있는 요소를 표시한다.  |
| `number` | 숫자를 입력할 수 있는 요소를 표시한다.  |
| `range` | 범위를 지정할 수 있는 slider를 표시한다.  |
| `search` | 키보드 상에 검색버튼이 표시되는 입력 요소를 표시한다.  |
| `date` | 날짜를 선택할 수 있는 요소를 표시한다.  |

##### `<input>`태그의 속성 

| 속성명 | 설명 |
|--------|------|
| value="기본값" | 페이지가 열릴 때 입력되어 있을 값 |
| checked | type속성이 radio, checkbox 인 경우 선택상태로 지정함 |
| min="최소값" | type속성이 number, range 인 경우 사용 |
| max="최대값" | type속성이 number, range 인 경우 사용 |
| step="숫자" | type속성이 number, range 인 경우 사용 |
| maxlength="숫자" | 키보드로 입력하는 형태에서 최대 글자수 |
| src="이미지경로" | image 형태인 경우만 사용 |
| required | 필수 입력 항목 지정 (모든 브라우저가 지원하는 것은 아님) |


## #02. 그 밖의 요소

### 1) 장문 입력

```html
<textarea name="식별자" id="식별자" [maxlength="숫자"]>내용</textarea>
```

### 2) 드롭다운
```html
<select name="식별자" id="식별자" [multiple]>
    <option value="값" selected>화면표시내용</option>
</select>
```

### 3) 버튼

#### `<input>`태그에 대해서...

```html
<input type="button|submit|reset" value="click me" />
```

| 종류 | 설명 |
|--------|------|
| type="button" | 이 자체로는 아무 기능이 없음. 동작할 내용을 JS로 구현 |
| type="submit" | 입력한 내용을 백엔드에 전송하는 기능 (일반적인 저장버튼) |
| type="reset"  | 입력한 내용을 모두 초기화 |
| type="image" | submit과 기능이 동일 |


#### 버튼요소의 다른 형태

```html
<button type="button|submit|reset">Click me</button>
```

## #03. 입력 요소의 제목 지정하기

### 1) 텍스트를 입력하는 요소

`<label>`태그의 for 속성과 `<input>` 태그의 id속성을 연결한다.

```html
<label for="식별자2">텍스트</label>
<input type="종류" name="식별자1" id="식별자2" />
```

### 2) 체크, 라디오 버튼

```html
<label>
    <input type="종류" name="식별자1" id="식별자2" />
    텍스트
</label>
```