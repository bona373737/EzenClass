// document.querySelector('#sub-menu-open').addEventListener('mouseover', e => {
//     e.currentTarget.classList.add('active');
// });

// setTimeout(() => {
//     console.log(document.querySelector('#sub-menu-open'))
// }, 0.3);

document.querySelectorAll('#tag-menu>span').forEach((v, i) => {
    v.addEventListener('click', e => {
        const currentTarget = e.currentTarget;
    })

})

document.querySelectorAll('.img-content>img').forEach((v, i) => {
    v.setAttribute('src', `assets/img/car${i+1}.png`);
})

document.querySelectorAll('.image-wrap').forEach((v, i) => {
    v.querySelector('img').setAttribute('src', `assets/img/sns${i+1}.png`);

    v.addEventListener('mouseover', e => {
        v.querySelector('.hidden-text').style.visibility = 'visible';
    })
    v.addEventListener('mouseout', e => {
        v.querySelector('.hidden-text').style.visibility = 'hidden';
    })
})