/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Marionogame",
  logo_name: "Marionogame",
  nickname: "Marionogame",
  full_name: "Mario Jose Espaillat Morey",
  subTitle: "Full Stack Developer, Ing. Sistema 🔥. passionate code.",
  resumeLink:
    "https://drive.google.com/file/d/1dNckwLebg_R3BOUmBLmK_MKH5RAEiv1C/view?usp=sharing",
  mail: "mario19ok@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Marionogame",
  linkedin: "https://www.linkedin.com/in/mario-jose-espaillat-morey-2a3328287/",
  gmail: "mario19ok@gmail.com",
  gitlab: "https://gitlab.com/Marionogame",
  facebook: "https://www.facebook.com/mario.espaillatmorey",
  twitter: "https://twitter.com/marionogame",
  instagram: "https://www.instagram.com/mariook1/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Android Native",
        "⚡ Creating application backend in Node, Express, hapi.js, sequelize & joi",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android Native",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "file-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "cib:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "logos:adobe-photoshop",
          style: {
            color: "#001E36",
          },
        },
        {
          skillName: "C-Sharp",
          fontAwesomeClassname: "teenyicons:c-sharp-solid",
          style: {
            color: "#764ABC",
          },
        },
      ],
    },
    {
      title: "Business Programs",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple applications nationwide",
        "⚡ Experience in application optimization",
        "⚡ Experience in desing web",
      ],
      softwareSkills: [
        {
          skillName: "Max Monitor",
          fontAwesomeClassname: "maxMonitor",
          style: "images",
        },
        {
          skillName: "Rastreo",
          fontAwesomeClassname: "rastreo",
          style: "images",
        },
        {
          skillName: "Konteo",
          fontAwesomeClassname: "Konteo",
          style: "images",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Católica del Cibao",
      subtitle: "Computer Systems Engineering",
      logo_path: "ucateci.png",
      alt_name: "UCATECI",
      duration: "2015 - 2021",
      descriptions: [
        "⚡curved and finished successfully.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.ucateci.edu.do/",
    },
    {
      title: "React",
      subtitle: "React hands-on courses",
      logo_path: "fazt.png",
      alt_name: "FAZT",
      duration: "Complete",
      descriptions: [
        "⚡This course teaches what is React?, how to install it, how to configure it, how to use its multiple libraries and functionalities so that when you finish it you can start creating applications using this library.",
      ],
      website_link: "https://www.faztweb.com/contenido/react",
    },
    {
      title: "React Redux",
      subtitle: "React Redux hands-on courses",
      logo_path: "leoMedina.png",
      alt_name: "Leo Medina",
      duration: "Complete",
      descriptions: [
        "⚡Teaches how to set up a project with the react-redux library from scratch. The structure of a redux store, reducers and actions are explained. React, react-dom, react-router-dom, material-ui, react-redux, redux are also used.",
      ],
      website_link:
        "https://www.youtube.com/watch?v=OXWn4XiDUmw&list=PL33bS175Qm6dRwGuzW6AX7Ru7OpubipSw",
    },
    {
      title: "Nodejs",
      subtitle: "Nodejs hands-on courses",
      logo_path: "fazt.png",
      alt_name: "FAZT",
      duration: "Complete",
      descriptions: [
        "⚡It is a practical introduction for Web Developers, who aim to create Backend applications, using the language they already know: Javascript.",
      ],
      website_link: "https://www.faztweb.com/contenido/nodejs",
    },
    {
      title: "hapi",
      subtitle: "hapi hands-on courses",
      logo_path: "futurestudio.png",
      alt_name: "FUTURE STUDIO",
      duration: "Complete",
      descriptions: [
        "⚡Teaches about various functionalities provided by hapi or additional plugins.",
      ],
      website_link:
        "https://futurestud.io/tutorials/hapi-get-your-server-up-and-running",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "https://drive.google.com/",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Perfil profesional",
  description:
    "Programmer with more than 4 years of experience in the world of programming, I have done different projects at the professional level such as Konteo, MaxMonitor, MiRastreo, wooZilla, personal projects among others..., with a thirst for knowledge and high professionalism.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer",
          company: "Ikompras.srl",
          company_url: "https://ikompras.net/",
          logo_path: "logoiKompras.png",
          duration: "May 2019 - Sep 2023 · 4 yrs 5 mos",
          location: "Work From Home",
          description: `Work closely with the business owner and team leaders on development, project builds, change request functions, and maintenance of existing applications. Increased productivity and problem solving techniques creation of functional components, We mainly use react and a wide variety of frameworks, also in charge of training, managing and providing guidance to staff.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Sistema POS",
          company: "Woozilla",
          company_url: "",
          logo_path: "skillenza.png",
          duration: "1 year",
          location: "Work From Home",
          description:
            "Woozilla is a project in charge of Ing Jose Rodriguez where together with other programmers we built a billing system.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are some of my not so recent works since due to a confidentiality agreement I cannot publish the code of the projects I have carried out, but you can soak up my preferences and attitudes at the programming level and you will find a great variety. . of my skills on the different platforms.",
  avatar_image_path: "projects_image.svg",
};
const projectsHeader2 = {
  title: "Projects",
  description:
    "These are the projects that I can't push to GitHub. But it is thanks to this experience that I acquire high-level problem-solving knowledge and obtain my quality as a programmer.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mario.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "IkomprasWebSite",
      url: "https://ikompras.net/",
      description: "This is the official page of the company ikompras.srl",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Konteo",
      url: "https://ikompras.net/konteo",
      description:
        "It is a tool to work on mobile devices and carry out a count of your company",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "Rastreo",
      url: "https://ikompras.net/rastreo",
      description:
        "System to track Projects, Distributors, Supervisors and Technicians in real time",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "MaxMonitor",
      url: "https://ikompras.net/maxmonitor",
      description:
        "It is a customer service assistant designed for all types of businesses that use Whatsapp, Telegram, Facebook, Instagram and Mail as instant messengers.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "ArteRd",
      url: "https://github.com/Marionogame/ArteRD",
      description:
        "It is one of my oldest projects, it is an art page where people can acquire Dominican art.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "DanceEventTime",
      url: "https://github.com/Marionogame/DanceEventTime",
      description:
        "Mobile Application (Android and IOS) For the Publication and Creation of Events Streaming and Qualification of groups that Participate in the Registered Events",
      languages: [
        {
          name: "React Native",
          iconifyClass: "vscode-icons:file-type-reactts",
        },
        {
          name: "React Expo",
          iconifyClass: "vscode-icons:file-type-expo",
        },
      ],
    },
    {
      id: "6",
      name: "EventDanceTimeApi",
      url: "https://github.com/Marionogame/EventDanceTimeApi",
      description: "Backend Api EventDanceTime",
      languages: [
        {
          name: "Hapi.js",
          iconifyClass: "logos:hapi",
        },
        {
          name: "Sequelize",
          iconifyClass: "logos:sequelize",
        },
        {
          name: "SQL",
          iconifyClass: "vscode-icons:file-type-sql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsHeader2,
  contactPageData,
  projects,
};
