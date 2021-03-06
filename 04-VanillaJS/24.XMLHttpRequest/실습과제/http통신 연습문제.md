# HTTP통신 연습문제 

## promise방식으로 axios를 활용한 다중행(목록) 조회
```js
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #loading{
            width: 100px;
            height: 100px;
            background-image: url('./img/loading.gif');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -50px;
            margin-left: -50px;
            z-index: 99999999;
            display: none;
        }
        #lading.active{
            display: block;
        }
        dt{
            font-weight: bold;
            margin: 10px 0px;
            font-size: 20px;
        }
        dt::before{
            content: '*';
            padding-right: 5px;
        }
        dd{
            font-weight: normal;
            margin-bottom: 30px;
            border-left: 5px #d5d5d5 solid;
            padding-left: 15px;
            font-size: 16px;
        }
        #dept-item{
            display: none;
        }
    </style>
</head>
<body>
    <div id="loading"></div>
    <h1>Axios</h1>
    <button id="btn">목록 가져오기</button>
    <hr>
    <table border="1">
        <thead>
            <tr>
                <th>학과번호</th>
                <th>학과명</th>
                <th>학과위치</th>
            </tr>
        </thead>
        <tbody id="list-body">

        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
       document.querySelector('#btn').addEventListener('click', e=>{
           e.preventDefault();

            //로딩바 표시하기
            const loading = document.querySelector('#loading');
            loading.classList.add('active');

            //axios 사용하여 http통신
            const listBody = document.querySelector('#list-body');
            axios
            .get('http://localhost:3000/department')
            // .then((json)=>{
            //     console.log(json)
            .then(({data})=>{
                data.map((v,i) => {
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td');
                    td1.innerHTML = v.id;
                    const td2 = document.createElement('td');
                    td2.innerHTML = v.dname;
                    const td3 = document.createElement('td');
                    td3.innerHTML = v.loc;

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    listBody.appendChild(tr);
                });
            })
            .catch((error)=>{
                // console.dir(error);
                console.error(error);
                console.error(error.response.status);
                console.error(error.response.statusText);
                // console.error(error.response.statusText);
            })
            .finally(()=>{
                loading.classList.remove('active');
            })
        })
    </script>
</body>
</html>
```
![문제1결과](ex1결과.png)


## aysnc~await방식으로 axios를 활용한 다중행(목록) 조회
```js
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #loading{
            width: 100px;
            height: 100px;
            background-image: url('./img/loading.gif');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -50px;
            margin-left: -50px;
            z-index: 99999999;
            display: none;
        }
        #lading.active{
            display: block;
        }
        dt{
            font-weight: bold;
            margin: 10px 0px;
            font-size: 20px;
        }
        dt::before{
            content: '*';
            padding-right: 5px;
        }
        dd{
            font-weight: normal;
            margin-bottom: 30px;
            border-left: 5px #d5d5d5 solid;
            padding-left: 15px;
            font-size: 16px;
        }
        #dept-item{
            display: none;
        }
    </style>
</head>
<body>
    <div id="loading"></div>
    <h1> Async~await +  Axios </h1>
    <button id="btn">목록 가져오기</button>
    <hr>
    <table border="1">
        <thead>
            <tr>
                <th>학과번호</th>
                <th>학과명</th>
                <th>학과위치</th>
            </tr>
        </thead>
        <tbody id="list-body">

        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
       document.querySelector('#btn').addEventListener('click', async (e)=>{
           e.preventDefault();

            //로딩바 표시하기
            const loading = document.querySelector('#loading');
            loading.classList.add('active');

            //axios 사용하여 http통신
            const listBody = document.querySelector('#list-body');

            let json = null;
            try{
                json = await axios.get('http://localhost:3000/department');
                json = json.data;
                console.log(json);

            }catch(error){
                console.dir(error);
                console.error(error);
                console.error(error.response.status);
                console.error(error.response.statusText);
            }finally{
                loading.classList.remove('active');
            }

            if(json != null){
                json.map((v,i) => {
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td');
                    td1.innerHTML = v.id;
                    const td2 = document.createElement('td');
                    td2.innerHTML = v.dname;
                    const td3 = document.createElement('td');
                    td3.innerHTML = v.loc;

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    listBody.appendChild(tr);
                });
            }

        })//eventListener end
    </script>
</body>
</html>

```
![문제2결과](ex2결과.png)