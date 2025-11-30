gsap.registerPlugin(ScrollTrigger);

const elementsAppear = gsap.utils.toArray(".appear-animation");
const animatedVideos = gsap.utils.toArray(".video-and-img video");
const animatedImages = gsap.utils.toArray(".video-and-img img");

elementsAppear.forEach(el => {
    gsap.from(el, {
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: el,    
        scrub: 2,
        start: "top 100%",
        end: "top 50%",
        markers: true
    }
})
})

gsap.from(".main-text", {
    y: 100,
    opacity: 0,
    duration: 2,
})


gsap.to(animatedVideos, {
    y: 200,
    scrollTrigger: {
        trigger: animatedVideos,
        scrub: 2,
        start: "top center",
        end: "bottom center"
    }
})

gsap.to(animatedImages, {
    y: 250,
    scrollTrigger: {
        trigger: animatedImages,
        scrub: 2,
        start: "top center",
        end: "bottom 60%"
    }
})
