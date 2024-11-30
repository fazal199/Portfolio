import { FaPager } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { BsCloudArrowUpFill } from "react-icons/bs";
const NAV_ITEMS: any = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

const TYPEWRITER_HERO = ["Web Developer!", "Web Designer!"];
const PROJECTS = [
  {
    id: 1,
    title: "Imaginify [Image Editing]",
    image: "/projectimages/img1.webp",
    tags: ["Nextjs", "Cloudinary", "Clerk"],
    functionalities: [
      "User authentication",
      "AI Integration",
      "Responsive UI",
      "Payment integration",
    ],
    description:
      "Created a Fullstack web application called Imaginify using Clerk for authentication, MongoDB as the database, Stripe for the payment gateway, and Cloudinary to store and manipulate images. With Imaginify, you can easily manipulate your images, such as removing backgrounds or objects and changing the colors of objects. You can download and save your edited images or see what others are building.",
    liveLink: "https://imaginify-sooty-kappa.vercel.app/",
    codeLink: "https://github.com/fazal199/imaginify",
  },
  /*   {
  id : 2,
    title: "The TrueFeedback",
    image: "",
    tags: ["Nextjs", "NextAuth", "Mongodb"],
  functionalities: [
    "User authentication",
    "Smooth User Experience",
    "Form Validation",
    "Responsive UI",
  ],
    description:
       "I created a Fullstack web application called TrueFeedback using Next.js as the framework, NextAuth for authentication, and MongoDB as the database. With TrueFeedback, you can send and receive feedback from anonymous people. It's a social platform where one person can send anonymous feedback to another without revealing their identity. The receiver receives the feedback in the form of a text message.", 

  liveLink: "https://imaginify-sooty-kappa.vercel.app/",
  codeLink: "https://github.com/fazal199/imaginify",
  }, */

  {
    id: 3,
    title: "The Movix [Movie App]",
    image: "/projectimages/img3.webp",
    tags: ["React", "Redux", "Sass"],
    functionalities: [
      "Global State Management",
      "Handle videos",
      "Learn Optimization",
      "Responsive UI",
    ],
    description:
      "I created a Frontend web application called Movix using React for the interactive frontend, TMDb's API for movie data, and Redux for state management. With Movix, you can learn about the latest trending movies. You can find details about each movie, including its genres and cast, as well as a brief description. You can also watch the movie trailer.",
    liveLink: "https://movix-movie-website-xi.vercel.app/",
    codeLink: "https://github.com/fazal199/movix-movie-website",
  },
  {
    id: 4,
    title: "The Password Manager",
    image: "/projectimages/img4.webp",
    tags: ["React", "Mongodb", "Tailwindcss"],
    functionalities: [
      "Manage Password",
      "User Authentication",
      "Smooth User Experience",
      "Responsive UI",
    ],
    description:
      "I created a mini full-stack web application called PassGuru using React, Express.js, and MongoDB. With PassGuru, you don't need to remember your passwords. You can manage your passwords for different applications. You can easily create, delete, and edit your password information whenever you want, all for free.",
    liveLink: "https://pass-guru-mern-app.vercel.app/",
    codeLink: "https://github.com/fazal199/PassGuru-Mern-App",
  },

  {
    id: 5,
    title: "The Coindex",
    image: "/projectimages/img5.webp",
    tags: ["React", "Redux", "Axios"],
    functionalities: [
      "Real-Time Data Fetching",
      "Fast and Efficient Performance",
      "Smooth User Experience",
      "Responsive UI",
    ],
    description:
      "I created a frontend web application called Coindex using React, CoinGecko's API, and Redux. With Coindex, you can get the latest details about cryptocurrencies like Bitcoin, Ethereum, and more. I have added a graph with all the historical data, which will help you decide the best crypto coin for you.",
    liveLink: "https://coindex-react.vercel.app/",
    codeLink: "https://github.com/fazal199/Coindex-react",
  },

  {
    id: 6,
    title: "The Text Utils",
    image: "/projectimages/img5.webp",
    tags: ["React", "Tailwindcss", "Javascript"],
    functionalities: [
      "Text Editing",
      "Fast and Efficient Performance",
      "Smooth User Experience",
      "Responsive UI",
    ],
    description:
      "I created a mini web application called Text-Utils using React. With Text-Utils, you can easily manipulate your paragraphs, descriptions, and any text by just clicking a button. It is fully responsive and absolutely free.",
    imgUrl: "/projectimages/img9.webp",
    liveLink: "https://text-utils-react-app-red.vercel.app/",
    codeLink: "https://github.com/fazal199/Text-Utils-React-App",
  },
 //currency converter ka image daal yaha and live link bhi
  {
    id: 7,
    title: "The Currency Converter",
    image: "/projectimages/img5.webp",
    tags: ["React", "Tailwindcss", "Javascript"],
    functionalities: [
      "Data Fetching",
      "Fast and Efficient Performance",
      "Smooth User Experience",
      "Responsive UI",
    ],
    description:
      "I created a mini web application using React called Currency Converter. With My Currency Converter you can easily convert your currency from one to another. it supports the most known currencies like inr,usd, euro etc.",
    
    imgUrl: "/projectimages/img9.webp",
    liveLink: "https://text-utils-react-app-red.vercel.app/",
    codeLink: "https://github.com/fazal199/CurrencyConverter-react",
  },
];

const SERVICES: any = [
  {
    id: 1,
    title: "Landing Page",
    description:
      "Get a landing page that works for you. I create simple, clear, and effective designs that attracts customers and Grow Your Business. Let's work together to grow your business.",
   icon : FaPager,
    imgUrl: "/services/serv1.webp",
  },
  {
    id: 2,
    title: "Custom Web-App",
    description:
      "Get a custom web app that meets your needs. I Develop simple, efficient, and user-friendly web apps that enhance your business. Let's work together to achieve your business goals.",
    icon : FaCode,
    imgUrl: "/services/serv2.webp",
  },
  {
    id: 3,
    title: "Full Custom Website",
    description:
      "Get a custom full custom website that meets your needs. I Develop simple, efficient, and user-friendly websites that enhance your business. Let's work together to achieve your business goals.",
    icon : CgWebsite,
    imgUrl: "/services/serv3.webp",
  },
  {
    id: 4,
    title: "API Development",
    description:
      "Get a fully customized API solution that meets your specific needs. I develop robust, scalable, and efficient APIs that enhance your business capabilities. Let's work together to create seamless integrations and achieve your business goals.",
   icon :BsCloudArrowUpFill,
    imgUrl: "/services/serv4.webp",
  },
];
const SKILL_CATEGORIES = [
  {
    title: "Frontend Skills",
    skills: [
      { name: "HTML", src: "/skillslogos/html.webp" },
      { name: "CSS", src: "/skillslogos/css.webp" },
      { name: "Tailwind CSS", src: "/skillslogos/tailwind.webp" },
      { name: "JavaScript", src: "/skillslogos/javascript.webp" },
      { name: "jQuery", src: "/skillslogos/jquery.webp" },
      { name: "TypeScript", src: "/skillslogos/typescript.webp" },
      { name: "Node.js", src: "/skillslogos/nodelogo.webp" },
      { name: "React", src: "/skillslogos/reactlogo.webp" },
      { name: "Next.js", src: "/skillslogos/nextlogo.webp" },
      { name: "Redux", src: "/skillslogos/reduxlogo.webp" },
      { name: "GSAP", src: "/skillslogos/gsap.webp" },
    ],
  },
  {
    title: "Backend Skills",
    skills: [
      { name: "Express.js", src: "/skillslogos/expressjs.webp" },
      { name: "MongoDB", src: "/skillslogos/mongodblogo.webp" },
      { name: "Mongoose", src: "/skillslogos/mongoose.webp" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Postman", src: "/skillslogos/postman.webp" },
      { name: "Git", src: "/skillslogos/git.webp" },
      { name: "GitHub", src: "/skillslogos/github.webp" },
      { name: "Notion", src: "/skillslogos/notion.webp" },
      { name: "Cursor AI", src: "/skillslogos/cursor.webp" },
      { name: "Chatgpt", src: "/skillslogos/chatgpt.webp" },
      { name: "Claude AI", src: "/skillslogos/claude.webp" },
      { name: "Figma", src: "/skillslogos/figma.webp" },

    ],
  },
];

const FREELANCE_EMAIL = "itsmefazal98@gmail.com"

export { NAV_ITEMS, TYPEWRITER_HERO, PROJECTS, SERVICES, SKILL_CATEGORIES,FREELANCE_EMAIL };
