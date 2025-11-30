gsap.registerPlugin(ScrollTrigger);

const elementsAppear = gsap.utils.toArray(".appear-animation");
const overlapLg = gsap.utils.toArray(".overlap-lg");
const overlapMd = gsap.utils.toArray(".overlap-md");

elementsAppear.forEach(el => {
    gsap.from(el, {
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: el,    
        scrub: 2,
        start: "top 100%",
        end: "top 50%",
    }
})
})

gsap.from(".main-text", {
    y: 100,
    opacity: 0,
    duration: 2,
})

overlapLg.forEach(el => {
    gsap.to(el, {
        y: 200,
        scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "top center",
            end: "bottom center"
        }
    })
})

overlapMd.forEach(el => {
    gsap.to(el, {
        y: 220,
        scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "top center",
            end: "bottom 60%"
        }
    })
})
