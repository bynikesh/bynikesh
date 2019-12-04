module.exports = {
  siteTitle: "Nikesh Adhikari | Software Engineer",
  siteDescription:
    "Nikesh Adhikari is a Software Developer based in Sydney, NSW who specializes in developing exceptional, high-quality websites and applications.",
  siteKeywords:
    "Nikesh Adhikari, Node/React Developer, software engineer, front-end engineer, web developer, javascript",
  siteUrl: "https://bynikesh.com",
  siteLanguage: "en_US",
  googleAnalyticsID: "UA-44997043-2",
  //googleVerification: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
  name: "Nikesh Adhikari",
  location: "Sydney, MA",
  email: "info@bynikesh.com",
  github: "https://github.com/bynikesh",
  twitterHandle: "@bynikesh",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/bynikesh",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/nikeshadhikari/",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/bynikesh",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bchiang7",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bchiang7",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  navHeight: 100,
  greenColor: "#64ffda",
  navyColor: "#0a192f",
  darkNavyColor: "#020c1b",

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
