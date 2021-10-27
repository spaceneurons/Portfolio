const faders = document.querySelectorAll(".fade-in");
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  // Want to make sure all columns are in the page. Once all columns are visible to the intersection observer, they will fade in
  threshold: 0.5,
  // Add a root margin so once were 100 pixels from the bottom, it appears
  // Enhances the fade in expereince so it doesn't happen right when we get to the page
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    // if false then entry is intersection. Intersection observer, whether or not it's intersecting, is going to fire as soon as the page loads.
    if (!entry.isIntersecting) {
      return;
    } else {
      // stops looking once it's done its job
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
