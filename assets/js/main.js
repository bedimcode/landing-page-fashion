/* MENU SHOW */ 
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* GSAP ANIMATION */
/*HOME PRIMARY*/
TweenMax.to(".home__primary", 2, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__title', {opacity: 0, duration: 2, delay: 1.5, y: 100})
gsap.from('.home__img img', {opacity: 0, duration: 2, delay:1.5, y: -100})

/*HOME SECONDARY*/
TweenMax.to(".home__secondary", 2.5, {
    width: "100%",
    ease: Expo.easeInOut
})
gsap.from('.home__scroll', {opacity: 0, duration: 3, x: -100})
gsap.from('.home__year', {opacity: -1, duration: 1.5, delay: 1.5, x: 100})