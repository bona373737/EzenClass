//@main.js
//@index.html파일의 동작구현_department데이터 전체목록 조회


//페이지가 실행되면서 바로 함께 동작해야하므로 즉시실행 함수 형태로 구현
// (async()=>{})();
(async () => {
    let json = null;
    try {
        json = await axios.get('http://localhost:3000/department');
    } catch (e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.');
        return;
    }
    if (json != null) {
        const listBody = document.querySelector('#listBody');
        const {
            data
        } = json;
        console.log(data);

        data.forEach((v, i) => {
            //table의 학과번호 - 학과이름 - 학과위치 내용 채우기
            //학과이름에 상세보기로의 이동링크추가
            //4번째칸에 수정,삭제 링크 추가
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerHTML = v.id;
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            const a1 = document.createElement('a');
            a1.setAttribute('href', `view.html?id=${v.id}`)
            a1.innerHTML = v.dname;
            td2.appendChild(a1);
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.innerHTML = v.loc;
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            tr.appendChild(td4);
            const a2 = document.createElement('a');
            a2.setAttribute('href', `edit.html?id=${v.id}`);
            a2.innerHTML = '수정';
            td4.append(a2);
            const a3 = document.createElement('a');
            a3.setAttribute('href', '#');
            a3.dataset.id = v.id;
            a3.dataset.dname = v.dname;
            a3.innerHTML = '삭제';
            a3.classList.add('btn-delete');
            td4.appendChild(a3);

            listBody.appendChild(tr);


            //삭제 링크 클릭이벤트 구현
            a3.addEventListener('click', async e => {
                e.preventDefault();
                const current = e.currentTarget;
                const id = current.dataset.id;
                const dname = current.dataset.dname;

                if (!confirm(`정말 ${dname}을(를) 삭제 하시겠습니까?`)) {
                    return;
                }

                let json = null;
                try {
                    json = axios.delete(`http://localhost:3000/department/${id}`);
                } catch (e) {
                    console.error(e);
                    alert('요청을 처리하는데 실패했습니다.');
                    return;
                }

                if (json != null) {
                    current.closest('tr').remove();
                }
            })
        });
    }
})();