const applyStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

const createObserver = ({ target, styles, threshold }) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          applyStyles(target, styles);
        }
      });
    },
    { threshold }
  );
};

const observeElement = (observer, element) => observer.observe(element);

const elements = {
  aboutMe: document.querySelector(".about-me"),
  projects: document.querySelector(".projects"),
  contactMe: document.querySelector(".contact-me"),
};

const observersConfig = [
  {
    target: elements.aboutMe,
    styles: { opacity: 1, transform: "translateY(0px)" },
    threshold: 0.5,
  },
  {
    target: elements.projects,
    styles: { opacity: 1, transform: "translateY(0px)" },
    threshold: 0.5,
  },
  {
    target: elements.contactMe,
    styles: { opacity: 1, transform: "translateY(0px)" },
    threshold: 0.5,
  },
];

const observers = observersConfig.map((config) => createObserver(config));

observers.forEach((observer, index) => {
  observeElement(observer, Object.values(elements)[index]);
});
