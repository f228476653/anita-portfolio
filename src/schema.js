const schema = {
    header :{
        name: "Anita",
        avatarImg: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/avatar.jpg?raw=true",
        headerTagline: [
          "Full-stack Developer"
        ],
        headerParagraph:
          "Friendly, enthusiastic, and upbeat Full-stack Developer with more than 3 years of experience in the field " ,
        contactEmail: "huilong494@gmail.com"
    },
    work:[
        {
            id: 1,
            title: "Smart Parking Cloud Service and Front-end Page",
            para:
                "It is a cloud-based, multiple device parking payments software platform that enables people to park conveniently " +
                "while providing lot owners and managers with real-time data and enforcement tools. ",
            imageSrc: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/work/paku.png?raw=true",
            url: "https://github.com/f228476653/parking_server_code_v2"
        },
        {
            id: 2,
            title: "Persistent Key Value Storage",
            para:
                "Implementation is from the smallest data structure used by LSM tree. " +
                "Separate values from the sstable and put values into vlog file. Also, have a background job that periodically merged all sstable files "+
                "together. Delete operation is implement by ...",
            imageSrc: "https://raw.githubusercontent.com/f228476653/PersistentKeyValueStorage/main/images/Architecture.jpg",
            url: "https://github.com/f228476653/PersistentKeyValueStorage"
        },
        {
            id: 3,
            title: "Twitter clone",
            para:
                "Using React in frontend and using Spring boot as main backend framework "+
                ",Postgres as main database "+
                ",Seaweedfs as an image storage "+
                ",Vultr as a hosting JWT as Auth framework "+
                ",Flyway as a database migration tool",
            imageSrc: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/work/twitter.png?raw=true",
            url: "https://github.com/f228476653/CSIS3275001"
        },
        {
            id: 4,
            title: "TPE Airport App Backend",
            para:
                "Use Django REST framework to build APIs as backend for Airport mobile apps ",
            imageSrc: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/work/airport_big_logo.png?raw=true",
            url: "https://www.taoyuan-airport.com/main_en/docdetail.aspx?uid=437&pid=437&docid=165"
        },
        {
            id: 5,
            title: "Internal Protocal System",
            para:
                "Develop Internal HR System, Budget System, Analysis and Report based on SpringMVC, Hibernate",
            imageSrc: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/work/iisi.png?raw=true",
            url: "https://www.iisigroup.com/"
        },
        {
            id: 6,
            title: "Other Projects",
            para:
                "From granular APIs to Full-stack applications. Find out more about my recent projects and experiments on my GitHub page.",
            imageSrc: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/work/github.png?raw=true",
            url: "https://github.com/f228476653?tab=repositories"
        }
    ],
    about:{
        aboutParaOne:
            "I dived into the coding world just before I entered the College. " + 
            "My first project with programming was customizing and developing HR system in which stimulated my sense of curiosity to learn more.",
        aboutParaTwo:
            "Fast-forwarding to my first job as a Java Developer, I was challenged to build a enterprise internal system using Java and SpringMVC. " ,
        aboutParaThree:
            "After gaining some experience, I've assumed more complex projects on which programming was not the only variable. " + 
            "As a experienced developer, I was able to use and learn several other skills to deliver the best solution through a concise roadmap that would lead to results.",
        aboutParaFour:
            "Throughout this exciting journey as a Software Engineer, I also have other interests that unconsciously go hand in hand, such as culinary, handicraft. " ,
        aboutImage: ""
    },
    skills:[
        {
            id: 1,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/java.png?raw=true",
            para:
                "Started using Java from the beginning of my career. I have developed software of many kind, " +
                "from desktop, web, mobile and webservices, APIs and much more.",
            references: [
                {
                    title: 'Twitter-clone',
                    description: 'Clone Twitter by using Java as backend API. ',
                    link: 'https://github.com/f228476653/CSIS3275001'
                },
                {
                    title: 'Internal Protocal System',
                    description: 'This pure java application simulates thread working.',
                    link: 'https://www.iisigroup.com/'
                }
            ]
        },{
            id: 2,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/python.png?raw=true",
            para:
            "Python has been the chosen runtime for some of my recent projects. " +
            "I have written APIs, web crawlers and libraries in conjunction with several different frameworks. " +
            "Just to mention a few, Flask, Django, aiohttp, much more.",
            references: [
                {
                    title: 'Smart Parking Cloud Service',
                    description: "Provide async Web Apps powered by Aiohttp, SQLAlchemy and Swagger API" +
                        "features access to the Twitter-clone API environment.",
                    link: 'https://github.com/f228476653/CSIS3275001'
                },
                {
                    
                }
            ]
        },
        {
            id: 3,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/angular.png?raw=true",
            para:
                "For my front-end development framework of choice, Angular 6 was used to build Parking Platform, " +
                "a project that interfaces with Parking Platform API and provides a simple yet robust UI. " +
                "Recently, I have been using React as well as part of my front-end stack.",
            references: [
                {
                    title: 'Parking Management Platform',
                    description: 'Parking Management Platform is a complete GUI written in Angular to interact with the Switcher API.',
                    link: 'https://github.com/f228476653/home-rental'
                },
                {
                    title: 'Home rental',
                    description: 'List Porterties for rent.',
                    link: 'https://github.com/f228476653/home-rental'
                }
            ]
        },
        {
            id: 4,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/nodejs.png?raw=true",
            para:
                "Nodejs has been the chosen runtime for some of my recent open-source projects. " +
                "I have written APIs, web crawlers and libraries in conjunction with several different frameworks. " +
                "Just to mention a few, express, express-graphql, jest, sinon, mocha, and much more.",
            references: [
                {
                    title: 'Shopping WebSite Backend API',
                    description: 'Shopping Cart using NodeJS with Express and MongoDB.',
                    link: 'https://github.com/f228476653/Shopping-site'
                }
            ]
        },
        {
            id: 5,
            img: "https://github.com/f228476653/anita-portfolio/blob/master/src/images/skills/react.png?raw=true",
            para:
                "React makes it painless to create interactive UIs. " +
                "Build encapsulated components that manage their own state, then compose them to make complex UIs."
                ,
            references: [
                {
                        title: 'Twitter-clone',
                        description: 'Fully functioning Front-End for a Twitter clone with React' ,
                        link: 'https://github.com/f228476653/CSIS3275001'
                }
            ]
        },
        {
            id: 6,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/mongodb.png?raw=true",
            para:
                "When the goal is to develop a concise and granular APIs which scales horizontally, " +
                "MongoDB is my NoSQL DB of choice. Using it to produce aggregation analysis or " +
                "even using multi-tenancy approach to create independent data store mechanism over the same platform were the reason MongoDB shined."
        },
        {
            id: 7,
            img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/master/src/images/skills/git.png?raw=true",
            para:
                "Not only a version controller, but part of the process of creating software which each one of them might have different approaches. " +
                "As we have worked mostly with open-source projects, it requires a high level of code verification and " +
                "quality gates over the version control that led us to use Git Fork workflow."
        }
    ],
    contact:{
            contactSubHeading: "Let's connect!",
            social: [
                {
                    img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/b7c89ce502a9bea58708408d974717aa511ad431/src/images/linkedin.svg",
                    url: "https://www.linkedin.com/in/anita-chang/"
                },
                {
                    img: "https://raw.githubusercontent.com/f228476653/anita-portfolio/b7c89ce502a9bea58708408d974717aa511ad431/src/images/github.svg",
                    url: "https://github.com/f228476653",
                }
            ]
        }
}

module.exports = { schema }