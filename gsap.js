function circleScewDoing() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(dets.clientX, dets.clientY, xscale, yscale);
    });
}

function circleMouseFollower(x, y, xscale, yscale) {
    document.querySelector("#minicircle").style.transform = `translate(${x}px, ${y}px) scale(${xscale},${yscale})`;
}

circleScewDoing();





function homepageAnimation(){
    
gsap.set(".slidex" , {scale : 5})

var tl = gsap.timeline({
    transform:"translatex(-200%)",
        scrollTrigger:{
            trigger:".home",
            start: "top top ",
            end:"bottom top",
            pin:true,
            scrub:2
        },
         scale:1,
         ease: Power2
    })


tl.to(".vdodiv",{
 
    
    '--clip':"0%",
    ease: Power2
    
} ,'a')
.to(".slidex",{
    scale:1,
    ease:Power2
}, 'a')

.to(".lft",{
    xPercent: -10,
    stagger:.07,
    ease:Power4
}, 'b')
.to(".rgt",{
    xPercent: 10,
    stagger:.07,
    ease:Power4
}, 'b')
}
homepageAnimation();



function realpageAnimation() {
    gsap.to(".slide1, .slide2, .slide3", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        xPercent: -200,
        ease: "power4.out"  // Ensure easing function is a string
    });
}
realpageAnimation();

// Animation for div1 and div2 when on slide1
gsap.timeline({
    scrollTrigger: {
        trigger: ".slide1",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    }
})
.to(".div1", {
    yPercent: 90,
    duration: 3,
    stagger: 0.5,
    ease: "power4.out"
}, 'start')
.to(".div2", {
    yPercent: -90,
    duration: 3,
    stagger: 0.5,
    ease: "power4.out"
}, 'start');

// Animation for div4 when on slide2
gsap.timeline({
    scrollTrigger: {
        trigger: ".slide2",  // Changed to slide2 to match context
        start: "top top",
        end: "bottom top",
        scrub: 1,
    }
})
.to(".div4", {
    yPercent: -100,
    duration: 2,
    ease: "power4.out"
});


gsap.timeline({
    scrollTrigger: {
        trigger: ".slide3",
        start: "top center",  // Start animation when the top of .slide3 reaches the center of the viewport
        end: "bottom top",   // End animation when the bottom of .slide3 reaches the top of the viewport
        scrub: 1,
        markers: true // Enable markers for debugging (remove in production)
    }
})
.to(".div5", {
    yPercent: 150,
    duration: 2,
    stagger: 0.01,
    ease: "power4.out",
    delay: 1 // Add a delay of 1 second before starting the animation
});
