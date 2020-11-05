const targetElement = document.querySelectorAll(".gototop")
document.addEventListener('scroll', function(){
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add('show');
        }
    }
})

document.addEventListener('scroll', function(){
    const scrollY = window.pageYOffset;
    const goToTop = document.getElementById('gototop')
    const headerNav = document.getElementById('header-nav')

    if(scrollY > 0){
        // document.getElementById('header-nav').classList.add('active');
        goToTop.classList.add('active');
    }else{
        // document.getElementById('header-nav').classList.remove('active');
        goToTop.classList.remove('active');
    };

    if(document.getElementById('intro').getBoundingClientRect().top <= 0){
        headerNav.classList.add('active');
    }else{
        headerNav.classList.remove('active');
    }
});

$('#schedule-modal-btn').click(function(){
    $('#modal-wrapper').fadeIn();
})

$('.close-modal').click(function(){
    $('#modal-wrapper').fadeOut();
})
$('#modal-wrapper').click(function(){
    $('#modal-wrapper').fadeOut();
})
