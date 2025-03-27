document.addEventListener('DOMContentLoaded', function () {
    const headerResult = document.querySelector('.header-result');
    const resultBlock = document.querySelector('.result');

    if (headerResult && resultBlock) {
        headerResult.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если header-result - ссылка)

            // Определяем позицию блока result относительно верха страницы
            const resultBlockOffsetTop = resultBlock.offsetTop;

            // Плавно прокручиваем страницу к блоку result
            window.scrollTo({
                top: resultBlockOffsetTop,
                behavior: 'smooth' // Добавляем плавную анимацию
            });
        });
    } else {
        console.warn('Элемент с классом .header-result или .result не найден на странице.');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const headerCourse = document.querySelector('.header-course');
    const infoBlock = document.querySelector('.info');

    if (headerCourse && infoBlock) {
        headerCourse.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если header-course - ссылка)

            // Определяем позицию блока info относительно верха страницы
            const infoBlockOffsetTop = infoBlock.offsetTop;

            // Плавно прокручиваем страницу к блоку info
            window.scrollTo({
                top: infoBlockOffsetTop,
                behavior: 'smooth' // Добавляем плавную анимацию
            });
        });
    } else {
        console.warn('Элемент с классом .header-course или .info не найден на странице.');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const headerTestimonials = document.querySelector('.header-testimonials');
    const feedbackBlock = document.querySelector('.feedback');

    if (headerTestimonials && feedbackBlock) {
        headerTestimonials.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если header-testimonials - ссылка)

            // Определяем позицию блока feedback относительно верха страницы
            const feedbackBlockOffsetTop = feedbackBlock.offsetTop;

            // Плавно прокручиваем страницу к блоку feedback
            window.scrollTo({
                top: feedbackBlockOffsetTop,
                behavior: 'smooth' // Добавляем плавную анимацию
            });
        });
    } else {
        console.warn('Элемент с классом .header-testimonials или .feedback не найден на странице.');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const headerContacts = document.querySelector('.header-contacts');
    const formBlock = document.querySelector('.form');

    if (headerContacts && formBlock) {
        headerContacts.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если header-contacts - ссылка)

            // Определяем позицию блока form относительно верха страницы
            const formBlockOffsetTop = formBlock.offsetTop;

            // Плавно прокручиваем страницу к блоку form
            window.scrollTo({
                top: formBlockOffsetTop,
                behavior: 'smooth' // Добавляем плавную анимацию
            });
        });
    } else {
        console.warn('Элемент с классом .header-contacts или .form не найден на странице.');
    }
});

