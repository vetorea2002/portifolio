const img=document.getElementById('foto');

img.tabindex=0;

img.addEventListener('click', () =>{
    img.classList.toggle('is-expanded')
})

img.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter' || e.key === ' '){
        img.classList.toggle('is-expanded');
        e.preventdefault();
    }
});

img.addEventListener('mouseenter', () => img.classList.add('is-expanded'))
img.addEventListener('mouseleave', () => img.classList.remove('is-expanded'))