import emoji from 'react-easy-emoji';

const greeting = {
  username: 'Saurav M. H',
  title: "Hi there, I'm Saurav",
  subTitle: emoji(
    'Your friendly neighbourhood Software Developer 🚀 with experience building Full-Stack Web and Security applications. Shh... secretly a DevOps Ninja 🥷'
  ),
  resumeLink: 'https://drive.google.com/file/d/156SNgRtP1MVdoWAk2qCFxYaTeGiGFnKu/view?usp=sharing'
};

const socialMediaLinks = {
  github: 'https://github.com/sauravhiremath/',
  linkedin: 'https://www.linkedin.com/in/sauravmh/',
  gmail: 'vitsaurav@gmail.com',
  twitter: 'https://twitter.com/sauravmh/',
  instagram: 'https://www.instagram.com/sauravv_404/'
};

const skillsSection = {
  title: 'What do I bring to the table? 🤔',
  subTitle: 'Being a tenacious programmer I aim to build top-notch quality products',
  skills: [
    emoji('🚀 Build stable and secure product platforms'),
    emoji('🏛 Design and develop robust and scalable product architecture'),
    emoji('🛡️ Scaling your product, all while maintaining high security standards'),
    emoji('🎨 Design accessible and user friendly web apps and tools')
  ],

  softwareSkills: [
    {
      skillName: 'Reactjs',
      fontAwesomeClassname: 'fab fa-react'
    },
    {
      skillName: 'NextJS',
      fontAwesomeClassname: 'fa fa-code'
    },
    {
      skillName: 'Nodejs',
      fontAwesomeClassname: 'fab fa-node'
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'fas fa-database'
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fab fa-docker'
    },
    {
      skillName: 'Kubernetes',
      fontAwesomeClassname: 'fab fa-cloudflare'
    },
    {
      skillName: 'Golang',
      fontAwesomeClassname: 'fa fa-code'
    },
    {
      skillName: 'Typescript',
      fontAwesomeClassname: 'fa fa-code'
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js'
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm'
    },
    {
      skillName: 'yarn',
      fontAwesomeClassname: 'fab fa-yarn'
    },
    {
      skillName: 'SQL Database',
      fontAwesomeClassname: 'fas fa-database'
    },
    {
      skillName: 'Nginx',
      fontAwesomeClassname: 'fas fa-server'
    },
    {
      skillName: 'HTML-5',
      fontAwesomeClassname: 'fab fa-html5'
    },
    {
      skillName: 'CSS',
      fontAwesomeClassname: 'fab fa-css3-alt'
    },
    {
      skillName: 'GCP',
      fontAwesomeClassname: 'fab fa-google'
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'fas fa-fire'
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python'
    }
  ]
};

// Woah! you are quite serious if you looking at the source code
// I don't believe in showing off experience/skills in numbers
// But if you do, here you go (these are not displayed on the page)

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: 'Full Stack Web Development',
      progressPercentage: '90%'
    },
    {
      Stack: 'DevOps',
      progressPercentage: '80%'
    },
    {
      Stack: 'Security and System Design',
      progressPercentage: '75%'
    },
    {
      Stack: 'UI/UX Design',
      progressPercentage: '70%'
    }
  ]
};

// Well, here we go with my past work
// If you see this, just a heads up its already out-dated
// Because, I work on new and exciting things everyday!

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: 'Software Developer Consultant',
      company: 'RapidSec',
      companylogo: '/images/rapidsecLogo.png',
      date: 'Feb 2021 – Current',
      desc: 'R&D on core company products.'
    },
    {
      role: 'Technical Content Writer',
      company: 'LogRocket',
      companylogo: '/images/logRocketLogo.jpg',
      date: 'March 2021 – Current',
      desc: 'I produce articles and informatics on latest developments in tech industry'
    },
    {
      role: 'Software Engineer Fellow',
      company: 'MLH & Facebook',
      companylogo: '/images/facebookLogo.png',
      date: 'June 2020 – August 2020',
      desc: 'Contributed to Facebook/Jest project causing a distinct semantic release.'
      // descBullets: [
      //   'Introduced emitting events from worker-threads back to the parent (both inBand and parallel run)',
      //   'Developed a feature for reporting progress of individual test cases on the jest-circus test runner'
      // ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Vicara',
      companylogo: '/images/vicaraLogo.jpg',
      date: 'Jan 2020 – August 2020',
      desc: 'Joined as a software developer to develop and deploy the distribution infrastructure for the company'
      // descBullets: [
      //   'Designed and developed multi-threaded test-suite in Golang for finding network bottlenecks',
      //   'Utilised technologies as NodeJS, Docker, Typescript, MySQL and websockets to aid development of a microservices manager'
      // ]
    },
    {
      role: 'Data Science Head',
      company: 'CamCann',
      companylogo: '/images/camcannLogo.png',
      date: 'Jan 2020 – August 2020',
      desc: 'Formed and Lead the first Data Science division'
      // descBullets: [
      //   'Designed and developed Computer Vision solutions to support running on embedded systems utilising Open Vino, C++ and Python.',
      //   'Managed a team of 4 people to develop and deliver a AI powered Virtual makeup assistant'
      // ]
    }
  ]
};

// My Open Source Section to View Github Pinned Projects

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'sauravhiremath',
  showGithubProfile: 'true'
};

/**
 * Certifications alone don't maketh a man!
 *              ~ Saurav M. H (i'm serious)
 *
 *
 *
 * But still here we go...
 */

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle: "I don't brag, so here I have showcased some of my certifications and achievements 🎈🎈",

  achivementsCards: [
    {
      title: 'Oxford University Hack Winner, 2020',
      subtitle: 'Winner for VMWare Track',
      image: '/images/oxfordHack2020Logo.jpg',
      footerLink: [
        {
          name:
            'AI based interactive solution for those who want to get rid of their old items, as well as for those who collect them.',
          url: 'https://devpost.com/software/connectup-io'
        }
      ]
    },
    {
      title: 'Cambridge University Hack Winner, 2020',
      subtitle: 'Grand Prize Winner for BlackRock Sponsor',
      image: '/images/hexCambridgeHackLogo.svg',
      footerLink: [
        {
          name: 'A tool to empower small businesses to become financially healthy and crisis-proof',
          url: 'https://devpost.com/software/fin-wrapped'
        }
      ]
    },
    {
      title: 'Code for Good Winner, 2020',
      subtitle: 'National Hackathon by JP Morgan & Chase',
      image: '/images/jpmcLogo.jpg',
      footerLink: [
        {
          name: 'Built solution for Panah Foundation NGO managing their internal workflows',
          url:
            'https://www.linkedin.com/posts/sauravmh_codeforgood-hackathon-ngoindia-activity-6701149352917905408-dGvn'
        }
      ]
    },
    {
      title: 'DeveloperWeek Hackathon, 2021',
      subtitle: 'Winner for TypingDNA Sponsor',
      image: '/images/developerWeek2021HackLogo.jpg',
      footerLink: [
        {
          name:
            'Secure your data using your typing pattern with additional layers of encryption',
          url: 'https://embed.sauravmh.com/'
        }
      ]
    },
    {
      title: 'Government Recognition',
      subtitle: 'Layed out one of the first 50m stretch of Eco-friendly Bitumen-Plastic Road in India',
      image: '/images/plasticRoad.png',
      footerLink: [
        {
          name: 'Yes, we are in the news',
          url:
            'https://indianexpress.com/article/cities/mumbai/school-kids-plan-for-plastic-roads-excites-bmc-meeting-soon/'
        }
      ]
    }
  ]
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Vellore Institute of Technology, Vellore',
      logo: '/images/vitLogo.jpg',
      subHeader: 'B.Tech in Computer Science with Specialization in Bioinformatics',
      duration: '2018 - 2022 (Present)',
      desc: 'Core Member of Bioinformatics Club',
      descBullets: ['Winner of various inhouse and international hacks']
    }
  ]
};

/**
 * A fun and useful way to share my experiences with the people.
 * Because community is everything and sometimes to time to give back your share too
 */

const blogSection = {
  title: 'Blogs ✍',
  subtitle:
    "The only thing that gives me more joy than developing, is helping someone start their journey. And that's how I got started with Blogs 📙",

  blogs: [
    {
      url: 'https://dev.to/sauravmh/building-a-multiplayer-game-using-websockets-1n63',
      title: 'Building a multiplayer game using WebSockets - Part 1',
      description:
        'A definitive guide for building your multiplayer game on a browser the right way using socket.io on NodeJS and React. Ranging from folder-structure to project deployments'
    },
    {
      url: 'https://dev.to/sauravmh/browser-game-design-using-websockets-and-deployments-on-scale-1iaa',
      title: 'Browser Game Design using WebSockets and Deployments on Scale - Part 2',
      description:
        'Deploying and apps at scale, without using n8s or serverless. Just a cluster of $5 servers!. Using Nginx and NodeJS'
    },
    {
      url: 'https://dev.to/sauravmh/going-opensource-a-dive-into-facebook-s-jest-cgb',
      title: "Going OpenSource - A dive into facebook's jest",
      description:
        'How to get started and sustain in opensource. My progress as I started from scratch and introduced new features to the Facebook project Jest'
    }
  ]
};

/**
 * Talks: Because sometimes Blogs alone are not enough
 */

const talkSection = {
  title: 'Talks and Workshops 🔊',
  subtitle: emoji('WHAT BETTER WAY TO SHARE YOUR KNOWLEDGE IF NOT TALKS AND WORKSHOPS 🗣️'),

  talks: [
    {
      title: 'TechEx - Get started with ML',
      subtitle: 'What is and How to get get started with ML attended by more than 200 people',
      slides_url:
        'https://docs.google.com/presentation/d/1uf9vXJJodQwb1NqqqpXTS7XJuo3LRmwN8nlX7Oj5k1I/edit?usp=sharing',
      event_url: 'https://www.facebook.com/csivitu/photos/pcb.2584585674899467/2584583278233040/'
    },
    {
      title: 'Advanced Data Structures and Algorithms',
      subtitle: 'Learn what is Dynamic Mem Location, Heap Structure and more about min-heap and max-heap sorting',
      slides_url:
        'https://docs.google.com/presentation/d/1iZ4OI5fBfJuXRjcu7-k4Xdu7jJOA4VmD9IncdkRyc4g/edit?usp=sharing',
      event_url: 'https://www.facebook.com/csivitu/posts/2309814529043251'
    }
  ]
};

const contactInfo = {
  title: emoji('Contact Me 📞'),
  subtitle: 'Got an interesting project to work on? Or just wanna hangout over a coffee. Lemme know when and where',
  email_address: 'sauravhiremath@gmail.com'
};

//Twitter Section

const twitterDetails = {
  title: 'My Twitter Insight',
  subtitle: 'Keep yourself updated with what I am working on currently, and some fun stuff too 🔥',
  userName: ''
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  educationInfo,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails
};
