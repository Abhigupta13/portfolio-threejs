import {
    testing,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    stratex_logo,
    sih_logo,
    quickmart_image,
    bookingpilot_image,
    scraperxyz,
    tourfy,
    campapi,cpp,awsS3Icon,jestIcon,jiraIcon,mysql,postgre,postmanIcon,sql

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
      icon: backend,
    },
    {
      title: "Software Testing",
      icon: testing,
    },
    {
      title: "Full-Stack Development",
      icon: web,
    },
    {
      title: "Competitive Programming",
      icon: creator,
    },
  ];
  
   const technologies = [
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "C/C++", icon: cpp || web },
    { name: "SQL", icon: sql || web},
    { name: "ReactJS", icon: reactjs },
    { name: "Redux", icon: redux },
    { name: "HTML", icon: html },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "NodeJS", icon: nodejs },
    { name: "ExpressJS", icon: backend },
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql|| web },
    { name: "PostgreSQL", icon: postgre|| web },
    { name: "Git", icon: git },
    { name: "AWS S3", icon: awsS3Icon|| web },
    { name: "Jest", icon: jestIcon|| web },
    { name: "Jira", icon: jiraIcon|| web },
    { name: "Postman", icon: postmanIcon|| web },
  ];
  
  
  
  const experiences = [
    {
      title: "Backend Developer Intern",
      company_name: "Stratex Consulting Services Pvt. Ltd.",
      date: "Jun 2024 - Nov 2024",
      icon: stratex_logo,
      iconBg: "#ffff",
      link: "https://drive.google.com/drive/folders/1NOYIQSVCNPxTFCVqgNwbEp0MPZ6Gf3_R?usp=sharing", // Link to related documents
      points: [
        "Architected and documented 35+ API blueprints following an API-first approach, reducing integration time by 30% across multiple development teams.",
        "Developed modules and APIs for HRM, CRM, Appointment, Billing, Roster, forms, and authentication.",
        "Implemented secure data solutions utilizing AWS S3 using KMS, ensuring compliance and data protection.",
        "Engineered 400+ unit tests using Jest, significantly enhancing codebase reliability.",
        "Mentored new interns, sharing best practices and ensuring seamless continuation of work processes.",
      ],
    },
    {
      title: "Smart India Hackathon 2023",
      company_name: "Her Safety (Shortlisted at College Level)",
      date: "Aug 2023 - Oct 2023",
      icon: sih_logo, // Replace with your logo variable
      iconBg: "#ffff",
      link: "https://hersafety.vercel.app/", // Replace with actual link if available
      points: [
        "Developed a web application enabling women to anonymously report incidents of harassment and assault.",
        "Integrated a feature to recommend the top 10 nearby NGOs for women's support services.",
        "Provided a platform for users to share safety tips and learn from prior victims' experiences.",
        "Utilized React.js and Bootstrap for an interactive and user-friendly interface.",
        "Collaborated in a team to create a socially impactful solution within a limited timeframe.",
      ],
    },
    
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
      name: "QuickMart | MERN Stack E-commerce Website",
      description:
        "Developed a comprehensive MERN stack e-commerce platform featuring product listings, detailed product pages, cart, and secure checkout. Integrated Stripe for payment processing and enhanced user security using Passport.js, JWT, and secure cookies.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "yellow-text-gradient",
        },
      ],
      image: quickmart_image, // Replace with your image variable
      source_code_link: "https://github.com/Abhigupta13/Ecommerce-server", // Replace with your GitHub link
    },
    {
      name: "BookingPilot | Flight Booking Backend",
      description:
        "Designed the backend for an Airline Booking Management System with a 4-microservices architecture. Implemented an API Gateway for efficient routing and JWT-based authentication for secure user access and booking management.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "yellow-text-gradient",
        },
      ],
      image: bookingpilot_image, // Replace with your image variable
      source_code_link: "https://github.com/Abhigupta13/API_Gateway-Airline", // Replace with your GitHub link
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects, services2 };