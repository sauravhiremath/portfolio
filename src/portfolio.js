import emoji from "react-easy-emoji";

const greeting = {
  username: "Saurav M. H",
  title: "Heya, I'm Saurav",
  subTitle: emoji(
    "Your friendly neighbourhood Software Developer 🚀 experienced in building Full-Stack Responsive Web applications with TypeScript / Reactjs / NodeJS and their deployments using Nginx and CI/CD tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/156SNgRtP1MVdoWAk2qCFxYaTeGiGFnKu/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/sauravhiremath/",
  linkedin: "https://www.linkedin.com/in/sauravmh/",
  gmail: "vitsaurav@gmail.com",
  twitter: "https://twitter.com/sauravmh/",
  gitlab: "https://gitlab.com/sauravmh/",
  facebook: "https://www.facebook.com/sauravmh/",
  instagram: "https://www.instagram.com/sauravv_404/",
};

const skillsSection = {
  title: "What I do? 🤔",
  subTitle: "PRETTY MUCH EVERYTHING FROM BUILDING A PRODUCT AND DEPLOYING IT",
  skills: [
    emoji(
      "🚀 Build stable and secure backend infrastructure using NodeJS / Golang"
    ),
    emoji(
      "💻 Develop highly interactive Front end / User Interfaces as Single-Page-Applications "
    ),
    emoji(
      "✨ Integration of third party services such as Firebase/ GCP / Digital Ocean"
    ),
    emoji(
      "🎨 Design user-centric UI/UX prototypes for web and mobile applications"
    ),
  ],

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fa fa-code",
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fa fa-code",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "nginx",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Woah! you are quite serious if you looking at the source code
// I don't believe in showing off experience/skills in numbers
// But if you do, here you go (these are not displayed on the page)

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%",
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "75%",
    },
  ],
};

// Well, here we go with my past work
// If you see this, just a heads up its already out-dated
// Because, I work on new and exciting things everyday!

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Software Engineer Fellow",
      company: "MLH & Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2020 – Present",
      desc:
        "Contributed to Facebook/Jest project causing a distinct semantic release.",
      descBullets: [
        "Introduced emitting events from worker-threads back to the parent (both inBand and parallel run)",
        "Developed a feature for reporting progress of individual test cases on the jest-circus test runner",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Vicara",
      companylogo: require("./assets/images/vicaraLogo.jpg"),
      date: "Jan 2020 – Present",
      desc:
        "Joined as a software developer to develop and deploy the distribution infrastructure for the company",
      descBullets: [
        "Designed and developed multi-threaded test-suite in Golang for benchmarking parallel requests measuring latency, throughput and other metrics through synthetic loads",
        "Utilised technologies as NodeJS, Docker, Typescript, MySQL and websockets to aid development of a microservices manager from scratch using lightweight custom protocols",
      ],
    },
    {
      role: "Data Science Head",
      company: "CamCann",
      companylogo: require("./assets/images/camcannLogo.png"),
      date: "Jan 2020 – Present",
      desc: "Formed and Lead the first Data Science division",
      descBullets: [
        "Designed and developed Computer Vision solutions to support running on embedded systems such as Raspberry Pi utilising Open Vino, C++ and Python.",
        "Delivered a working solution to a client which utilised tensorflow.js and websockets.",
        "Managed a team of 4 people to develop and deliver a Virtual makeup assistant and providing real-time valuable data insights through the live video",
      ],
    },
  ],
};

// My Open Source Section to View Github Pinned Projects

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sauravhiremath",
  showGithubProfile: "true",
};

/**
 * Again, I don't believe certifications alone maketh a man!
 *                               ~ Saurav M. H (i'm serious)
 *
 *
 *
 * But still here we go...
 */

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "I don't brag, so here I have showcased some of my certifications and achievements 🎈🎈",

  achivementsCards: [
    {
      title: "MLH Fellow of class 2020",
      subtitle:
        "Selected for contributing to Facebook projects amongst students applied from 20+ countries",
      image: require("./assets/images/mlhFellowship.svg"),
      footerLink: [
        {
          name: "Our Team Won (Execute.ly) Blog",
          url: "https://news.mlh.io/mlh-fellowship-kicks-off-07-06-2020",
        },
        {
          name: "Selection Post",
          url:
            "https://www.linkedin.com/posts/sauravmh_opensource-mlhfellowship-activity-6670759773010579456-p6LX",
        },
      ],
    },
    {
      title: "Venturesity Hackathon Winner",
      subtitle:
        "Developed a platform to anonymously report Tuberculosis cases, and predict TB using Deep Learning",
      image: require("./assets/images/venturesityHack.png"),
      footerLink: [
        {
          name: "What is it?",
          url:
            "https://github.com/sauravhiremath/tb-saathi/blob/master/presentation/phosphorus-rev3.pdf",
        },
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12IUdDQwOHyDiJtnKLEJywweYA6CRKykg/view?usp=sharing",
        },
      ],
    },
    {
      title: "Government recognition for Plastic Road Construction",
      subtitle:
        "Layed out one of the first 50m stretch of Eco-friendly Bitumen-Plastic Road in India",
      image: require("./assets/images/plasticRoad.png"),
      footerLink: [
        {
          name: "Yes, we are in the news",
          url:
            "https://indianexpress.com/article/cities/mumbai/school-kids-plan-for-plastic-roads-excites-bmc-meeting-soon/",
        },
      ],
    },
  ],
};

/**
 * A fun and useful way to share my experiences with the people.
 * Because community is everything and sometimes to time to give back your share too
 */

const blogSection = {
  title: "Blogs ✍",
  subtitle:
    "The only thing that gives me more joy than developing, is helping someone start their journey. And that's how I got started with Blogs 📙",

  blogs: [
    {
      url:
        "https://dev.to/sauravmh/building-a-multiplayer-game-using-websockets-1n63",
      title: "Building a multiplayer game using WebSockets - Part 1",
      description:
        "A definitive guide for building your multiplayer game on a browser the right way using socket.io on NodeJS and React. Ranging from folder-structure to project deployments",
    },
  ],
};

/**
 * Talks: Because sometimes Blogs alone are not enough
 */

const talkSection = {
  title: "Talks and Workshops 🔊",
  subtitle: emoji(
    "WHAT BETTER WAY TO SHARE YOUR KNOWLEDGE IF NOT TALKS AND WORKSHOPS 🗣️"
  ),

  talks: [
    {
      title: "TechEx - Get started with ML",
      subtitle:
        "What is and How to get get started with ML attended by more than 200 people",
      slides_url:
        "https://docs.google.com/presentation/d/1uf9vXJJodQwb1NqqqpXTS7XJuo3LRmwN8nlX7Oj5k1I/edit?usp=sharing",
      event_url:
        "https://www.facebook.com/csivitu/photos/pcb.2584585674899467/2584583278233040/",
    },
    {
      title: "Advanced Data Structures and Algorithms",
      subtitle:
        "Learn what is Dynamic Mem Location, Heap Structure and more about min-heap and max-heap sorting",
      slides_url:
        "https://docs.google.com/presentation/d/1iZ4OI5fBfJuXRjcu7-k4Xdu7jJOA4VmD9IncdkRyc4g/edit?usp=sharing",
      event_url: "https://www.facebook.com/csivitu/posts/2309814529043251",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle:
    "Got an interesting project to work on? Or just wanna hangout over a coffee. Let me know when and where",
  email_address: "sauravhiremath@gmail.com",
};

//Twitter Section

const twitterDetails = {
  title: "My Twitter Insight",
  subtitle:
    "Keep yourself updated with what I am working on currently, and some fun stuff too 🔥",
  userName: "sauravmh",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
};
