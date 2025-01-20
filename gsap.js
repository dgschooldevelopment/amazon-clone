var t1 = gsap.timeline();

t1.from(".page1 h1", {
    opacity: 0,
    x: -200,
    duration: 1,

})

gsap.to("")

gsap.to(".page2 h1", {
    x: -2000,
    scrollTrigger: {
        trigger: ".page2",
        // start: "center bottom",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        pin: true
        // toggleActions: "restart none none reverse"
    }
}

)