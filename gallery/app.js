const images = document.querySelectorAll('.gallery .container img') ;
const modal = document.querySelector('.modal') ;
const imgModal = document.querySelector('.modal img') ;
const caption  = document.querySelector('.modal .caption') ;


images.forEach(img => {
    img.addEventListener('click',(e)=>{
        let sourceImg = e.target.getAttribute('data-src') ;
        let altImg = e.target.alt ;
        imgModal.src = sourceImg ;
        imgModal.style.cssText = "width: 60%" ;
        caption.textContent = altImg ;
        modal.classList.remove('close') ;
        modal.classList.add('open') ;
        console.log(altImg) ;
    })
})
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')) {
        modal.classList.remove('open') ;
        modal.classList.add('close') ;
        imgModal.style.cssText = "width: 30%" ;
    }
})















