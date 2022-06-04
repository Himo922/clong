export const data = [
  {
    title: "STEM-League",
    subtitle: "Software development",
    year: "2021",
    description:
      "STEM League, which is a learning tool kit for steam learning. I created the software parts of the project including low latency control via the web dashboard and software control on Rpi. It is currently used in a secondary school for learning STEM. ",
    technologies: ["ReactJs", "RPi", "Flask"],
    githubLink: "https://github.com/clonglam/Stem-League",
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    title: "E-commerce ",
    subtitle: "Frontend & headless CMS",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["Nextjs", "headlessCMS", "apis"],
    githubLink: "https://github.com/clonglam/staples-style-ecommerce",
    imageLink: `/images/ecommerce-staples.png`,
  },
  {
    title: "Trip Advisor",
    subtitle: "Frontend & Backend Development",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["React", "datocms", "apis"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/Coming_Soon.png`,
  },
];

export const projectContent = [
  {
    title: "Stem League",
    year: "2021",
    tags: ["web development", "Software Development", "dashboard Design"],
    coverImg: `/images/stemLeague/stemLeague_cover.png`,
    vistLink: `https://github.com/clonglam/Stem-League`,
    description: `STEM League, which is a learning tool kit for steam learning. I created the software parts of
    the project including low latency control via the web dashboard and software control on Rpi. It is currently used in a secondary school for learning STEM. `,

    challenge: `The software need to control to different hardware component at the same time in low latecy & acutral.
    The target of this project is for school use, students and teachers may also use the system. We need to design a dashboard that
     can controll all of the component and also in a userfriendly way.`,
    solution: `Use can use mobile or taplet to connect to the control dashboard, by using the http request, students or teachers can
     send request to different component and to control them to move different direction`,

    ksp: [
      {
        ksp_Img: [`/images/stemLeague/stem_league_iPhone.png`],
        title: "Control in One hand",
        subtitle: "",
        description: `We care about UI, we design the UI base on the controller size, 
        while they are contolling the device, users can even no looking the contorler just focus on the device that were contorlling.
`,
      },
      {
        ksp_Img: [`/images/stemLeague/stemring_anim.gif`],
        title: "PRESS & MOVE ",
        subtitle: "",
        description: `We use http request use the componet as server and use the controler to pass http request to control it, it response as you think, 
          nearly no latency, you PRESS it MOVE`,
      },
    ],
    technologies: ["ReactJs", "RPi", "Flask"],
    imageLink: `/images/stemLeague/STEM_Leage_phone.png`,
  },
];

export const allProject = [
  {
    title: "STEM League",
    type: "Software Development",
    subtitle: "Software development",
    year: "2021",
    description: `STEM League, which is a learning tool kit for steam learning. I created the software parts of the project including low latency control via the web dashboard and software control on Rpi. It is currently used in a secondary school for learning STEM. `,
    technologies: ["ReactJs", "RPi", "Flask"],
    url: `/project/stem`,
    githubLink: "https://github.com/clonglam/Stem-League",
    imageLink: `/images/stemLeague/STEM_Leage_phone.png`,
  },
  {
    title: "18-realty",
    type: "Web Development",
    subtitle: "Frontend & headless CMS",
    year: "2021",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["Web Development", "chatbot"],
    // url: `http://18-realty.com`,
    githubLink: "18-realty.com",
    imageLink: `/images/18realty.png`,
  },
  {
    title: "e-commerce ",
    type: "Web Development",
    subtitle: "Frontend & headless CMS",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["Nextjs", "headlessCMS", "apis"],
    url: `https://github.com/clonglam/staples-style-ecommerce`,
    githubLink: "https://github.com/clonglam/staples-style-ecommerce",
    imageLink: `/images/ecommerce-staples.png`,
  },
  {
    title: "Ever Creation International",
    type: "Web Development ",
    subtitle: "Frontend & headless CMS",
    year: "2020",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["Web Develop", "Product Category"],
    // url: `https://github.com/clonglam/staples-style-ecommerce`,
    // githubLink: "https://github.com/clonglam/staples-style-ecommerce",
    imageLink: `/images/everCreaction.png`,
  },
  {
    title: "Space Knowledge",
    type: "Interactive Game",
    subtitle: "Software Development",
    year: "2020",
    description: `Created a interactive application using depth tracking camera to capture the hand and 
    control the application. (Unity, C#)`,
    technologies: ["Unity", "C#", "Interactive Game"],
    imageLink: `/images/spaceKnowledge_cover.jpg`,
  },
  {
    title: "Ocean World",
    type: "Interactive Game",
    subtitle: "Software Development",
    year: "2020",
    description: `Created a depth tracking camera educational game. User can use their movement to control 
    the avatar in the game. (Unity, C#)`,
    technologies: ["Unity", "C#", "Interactive Game"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/oceanWorldCover.png`,
  },
  {
    title: "Actor Gallery",
    type: "Web development",
    subtitle: "Frontend & Backend Development",
    year: "2021",
    description: `Created and designed a webpage for Academy of film HKBU. to promote the actors from the academy.`,
    technologies: ["React", "cms", "apis"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/actorGallery.png`,
  },
];
