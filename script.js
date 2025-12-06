gsap.registerPlugin(ScrollTrigger);

const elementsAppear = gsap.utils.toArray(".appear-animation");
const overlapLg = gsap.utils.toArray(".overlap-lg");

const overlapMd = gsap.utils.toArray(".overlap-md");
const securityCards = gsap.utils.toArray(".card-sm");
const cards = gsap.utils.toArray(".card");
const rowCards = gsap.utils.toArray(".row-card")

gsap.from(".main-text", {
    y: 100,
    opacity: 0,
    duration: 2,
});

gsap.from(".card-lg-animated", {
    width: "80%",
    scrollTrigger: {
        trigger: ".card-lg-animated",
        scrub: 1,
        start: "top 100%",
        end: "center 100%",
    }
});

gsap.from(".img-overlap", {
    y: 150,
    scrollTrigger: {
        trigger: ".img-overlap",
        scrub: 1,
        start: "center 100%",
        end: "bottom 100%",
    }
});

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
});



overlapLg.forEach(el => {
    gsap.from(el, {
        y: 350,
        scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "top 140%",
            end: "center 100%",
        }
    })
});

overlapMd.forEach(el => {
    gsap.from(el, {
        y: 370,
        scrollTrigger: {
            trigger: el,
            scrub: 2,
            start: "top 140%",
            end: "center 100%"
        }
    })
});

securityCards.forEach(el => {
    gsap.from(el, {
        filter: "blur(3px)",
        scale: 0.2,
        opacity: 0.8,
        toggleActions: "play none none none",
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "center 80%"
        }
    })
});
gsap.from(".cards-grid", {
    scale: 0.75,
    filter: "blur(15px)",
    duration: 0.3,
    scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".cards-grid",
        start: "top 80%",
        end: "center 80%",
    }
});

gsap.from(cards, {
    scale: 0.9,
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: {
        each: 0.1,
        grid: [3, 2],
        from: "start", 
        ease: "power1.inOut"
    },
    scrollTrigger: {
        trigger: cards[0],
        start: "top 80%",
        toggleActions: "play none none none"
    }
});


gsap.from(".cards-row", {
    scale: 0.75,
    filter: "blur(15px)",
    duration: 0.3,
    scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".cards-row",
        start: "top 80%",
        end: "center 80%",
    }
});

gsap.from(rowCards, {
    scale: 0.95,
    duration: 0.05,
    stagger:  {
        each: 0.2,
        from: "start",
        ease: "power1.inOut"
    },
    scrollTrigger: {
        toggleActions: "play none none none",
        trigger: rowCards[0],
        start: "top 80%",
    }
})