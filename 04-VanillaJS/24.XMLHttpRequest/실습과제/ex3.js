const KAKAO_REST_KEY = '1ec49be112f4786c2d52d4c0b706c6f4';
let currentPage = 1;
let queryKeyword = null;
let isEnd = false;

//검색폼의 submit 이벤트(검색어 변경되는 신규검색)
document.querySelector('#searchForm').addEventListener('submit', e => {
    e.preventDefault();

    const queryField = document.querySelector('#query');
    queryKeyword = queryField.value.trim();

    //검색어가 미입력된 상태에 대한 예외처리
    if (!queryKeyword) {
        alert('검색어를 입력하세요');
        queryField.focus();
        return;
    }

    currentPage = 1;
    get_search()
})

//현재 검색어 유지.. 추가검색 (스크롤 이벤트)
window.addEventListener('scroll', e => {
    if (isEnd || document.querySelector('#loading').classList.contains('active')) {
        return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.screen.availHeight;
    const documentHeight = document.body.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight) {
        currentPage++;
        get_search();
    }
})


//카카오 검색api에 연결하는 비동기처리 async함수
async function get_search() {
    const loading = document.querySelector('#loading');
    loading.classList.add('active');

    const list = document.querySelector('#list');

    //blog, cafe 선택
    const filter = document.querySelector('#searchForm select');
    const filterChoose = filter.selectedIndex;
    const filterValue = filter[filterChoose].value;

    if (currentPage == 1) {
        Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
            list.removeChild(v);
        })
    }

    let json = null;
    try {
        const url = filterValue === 'blog' ? 'https://dapi.kakao.com/v2/search/blog' : 'https://dapi.kakao.com/v2/search/cafe';
        json = await axios.get(url, {
            params: {
                query: queryKeyword,
                page: currentPage,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
        })
        console.log(json);
    } catch (e) {
        console.error(e);
        alert('요청을 처리하는데 실패했습니다.');
    } finally {
        loading.classList.remove('active');
    }

    //http통신성공한 경우 받아온 데이터 활용하는 후속동작
    if (json != null) {
        const {
            data
        } = json;
        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement('li');

            const a = document.createElement('a');
            a.setAttribute('href', v.url);
            a.setAttribute('target', '_blank');

            const img = document.createElement('img');
            img.setAttribute('src', v.thumbnail);

            const textBlock = document.createElement('div');
            textBlock.setAttribute('id', 'text-block');

            const h3 = document.createElement('h3');
            h3.innerHTML = v.title;
            const p = document.createElement('p');
            p.innerHTML = v.contents
            const span1 = document.createElement('span');
            span1.innerHTML = filterValue === 'blog' ? v.blogname : v.cafename;
            const span2 = document.createElement('span');
            const date = v.datetime.substring(0, 10);
            span2.innerHTML = date;

            textBlock.appendChild(h3);
            textBlock.appendChild(p);
            textBlock.appendChild(span1);
            textBlock.appendChild(span2);

            a.appendChild(img);
            a.appendChild(textBlock);

            li.appendChild(a);
            list.appendChild(li);
        })
    }
} //async function end