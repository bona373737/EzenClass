const dataInclude = document.querySelectorAll('*[data-include]');
Array.from(dataInclude).map(async (v, i) => {
    const include = v.dataset.include;
    let html = null;
    try {
        const response = await axios.get(include);
        html = response.data;
    } catch (e) {
        console.error(e);
    }

    if (html != null) {
        v.outerHTML = html;
    }
})