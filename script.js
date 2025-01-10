// Disable browser scroll restoration
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  
  // Scroll to top on page unload
  window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
  });
  
  // Ensure ScrollTrigger starts from the top on load
  window.addEventListener("load", () => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Force scroll to top
      ScrollTrigger.refresh(); // Refresh ScrollTrigger for accurate calculations
    }, 0);
  });
  
  // GSAP and ScrollTrigger setup
  const races = document.querySelector(".races");
  
  function getScrollAmount() {
    return -(races.scrollWidth - window.innerWidth);
  }
  
  const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
  });
  
  ScrollTrigger.create({
    trigger: ".racesWrapper",
    start: "top top",
    end: () => `+=${races.scrollWidth - window.innerWidth}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
  });
  
  // Refresh ScrollTrigger on window resize for responsiveness
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
  