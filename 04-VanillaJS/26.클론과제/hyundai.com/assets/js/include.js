Array.from(document.querySelectorAll('*[data-include]')).map(async (v, i) => {
    const include = v.dataset.include;
    let component = null;

    try {
        const response = await axios.get(include);
        console.log(response);
        component = response.data;
        // console.log(component);

    } catch (e) {
        console.error(e);
    }

    if (component != null) {
        v.outerHTML = component;

        const subMenuOpen = document.querySelector('#sub-menu-open');
        const subMenu = document.querySelector('#sub-menu');
        subMenuOpen.addEventListener('mouseover', e => {
            subMenu.style.display = 'block';
        });
        subMenuOpen.addEventListener('mouseout', e => {
            subMenu.style.display = 'none';
        });
        document.querySelector('#close-btn').addEventListener('click', e => {
            const btn = document.querySelector('#sub-menu')
            btn.style.display = 'none';
        })
    }

})