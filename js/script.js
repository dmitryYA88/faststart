window.onload = function () {
    window.setTimeout(function () {
      document.querySelector('.preloader').classList.remove('preloader');
    }, 500);
}

const animItems = document.querySelectorAll('.anim-atems');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll () {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < animItemOffset + animItemHeight) {
                animItem.classList.add('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =  window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }    
    }
    animOnScroll();
}

formElem.onsubmit = async (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest;
    xhr.open('POST','https://hackwithoutmercy.ru/nordic/dima/faststart/php/db.php');
    let data = new FormData(formElem);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(data);
    xhr.onload = function() {
        if (xhr.status != 200) { 
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } else { 
        alert('Спасибо, ваш запрос отправлен, мы свяжемся с вами в ближайшее время');
        }
    };
};

