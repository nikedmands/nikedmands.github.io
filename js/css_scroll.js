// java animations
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        // 'offest' value is stored as top of window-150
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        // show animation when the section is in window view
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // repeat the animation
        else {
            sec.classList.remove('show-animate');
        }   
    })
}