Array.from(document.querySelectorAll('*[data-include]')).forEach(async (v, i) => {
    const include = v.dataset.include;
    let html = null;

    try {
        const response = await axios.get(include);
        console.log(response);
        html = response.data;
    } catch (e) {
        console.log(e);
    }

    if (html != null) {
        v.outerHTML = html;
    }


    //** header 검색란 클릭 이벤트 */
    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('click', e => {
        //childeNode로 input이 없을때만 이벤트 실행
        if (!searchInput.contains(document.querySelector('input'))) {
            searchInput.classList.add('clicked');

            const inputBox = document.createElement('input');
            inputBox.setAttribute('type', 'text');
            inputBox.setAttribute('placeholder', '통합검색');
            inputBox.classList.add('inputStyle');
            searchInput.appendChild(inputBox);
        };
    })

})