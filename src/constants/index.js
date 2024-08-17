import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    fastapi,
    singularity,
    hog,
    scraperxyz,
    tourfy,
    campapi
  } from "../assets";

  const services2 = [
    {
      title: "Click Here",
      icon: web,
    }
]
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Backend Development",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Frontend Development",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Singularity AI",
      icon: singularity,
      iconBg: "#383E56",
      date: "May 2023 - Jul 2023",
      points: [
        "Developed the BlendED plugin for ChatGPT using Python FastAPI, Uvicorn, and Dockerfile for seamless integration with the BlendED platform.",
        "Maintained up-to-date documentation for seamless project onboarding. Successfully managed project timelines in a remote work environment.",
        "Created RESTful API endpoints for question management, incorporating web scraping for dynamic content generation.",
        "Achieved over 2000 new worksheet creations per month.",
      ],
    },
    {
      title: "Graphic Designing Coordinator",
      company_name: "House of Geeks Technical Society of IIIT Ranchi",
      icon: hog,
      iconBg: "#383E56",
      date: "Feb 2023 - May 2023",
      points: [
        "Crafted an eye-catching promotional banner for Octocon 3.0, showcasing creative design skills.",
        "Collaborated on the design of the IIIT Ranchi Newsletter, contributing to its visual appeal and layout.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MyCamp API | Bootcamp Management System",
      description:
        "Welcome to the MyCamp API documentation! This API allows you to manage bootcamps, courses, user authentication, users, and reviews for educational purposes.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "RestAPI",
          color: "pink-text-gradient",
        }
      ],
      image: campapi,
      source_code_link: "https://github.com/adityaiiitr/MyCamp-API",
    },
    {
      name: "ScraperXYZ Bot | Python-Telegram Integration ",
      description:
        "Connected Telegram Bot to a polling program via Telegram Bot API Token, enabling bot commands and treating all text as searchable queries. Leveraged httpx and selectolax for web scraping, extracting data from the XYZ website. Deployed on AWS EC2 for seamless performance.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "green-text-gradient",
        }
      ],
      image: scraperxyz,
      source_code_link: "https://github.com/adityaiiitr/scraperxyz-telegram-bot",
    },
    {
      name: "TourFY | Your First Tour",
      description:"This was my initial foray into web development, where I successfully designed a responsive website using only HTML and CSS, implementing CSS Flexbox Grid for improved responsiveness.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "FlexBox",
          color: "pink-text-gradient",
        },
      ],
      image: tourfy,
      source_code_link: "https://github.com/adityaiiitr/TourFY",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, services2 };