/**
 * Created by HoChine on 2017/1/19.
 */
mediaSilder();
function mediaSilder() {
    var mySwiper = new Swiper('.swiper-container',{
        initialSlide:2,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier:2.5,
            slideShadows : false
        }
    })
}