export const portfolioData = {
        hero: {
            comment: "Broad expertise in native Android development, backend integration, and infrastructure.\n Experienced in modernizing legacy systems, leading large-scale rewrites, and building scalable, secure architectures.\n Strongadvocate for CI/CD, Agile practices, and high-quality software that delivers real-world impact.",
            name: "Thai Phan Dinh",
            role: "Senior Software Developer",
            specialties: ["Mobile", "Android", "Kotlin", "Jetpack Compose"]
        },

        floatingActions: [
            {
                icon: "download",
                label: "Download Resume",
                link: "#resume.pdf",
                primary: true
            },
            {
                icon: "mail",
                label: "Contact Me",
                link: "mailto:dinhthaidaica@gmail.com",
                primary: false
            }
        ],

        headerTabs: [
            { icon: "flutter", label: "Portfolio.tsx", active: true },
            { icon: "description", label: "README.md", active: false },
            { icon: "folder", label: "Project Structure", active: false }
        ],

        timeline: [
            {
                date: "Jan 2023 - Nov 2025",
                title: "Senior Android Developer",
                company: "IBG - Evryone Group.",
                description: [
                    "Solely responsible for all Android development, from architecture design to release and ongoing maintenance.",
                    "Consolidated multiple legacy applications into a single modern IBG app, delivering key modules such as Video Call, Work Schedule, Accessibility, and more.",
                    "Built the BorgerPortalen app from the ground up in collaboration with KMD, integrating MitID and leveraging Jetpack Compose and a modern Android tech stack to strengthen communication between citizens and municipalities.",
                    "Designed and maintained CI/CD pipelines using Firebase, CircleCI, and Fastlane to enable automated testing and reliable continuous delivery.",
                    "Developed internal tools and scripts to streamline workflows and improve development and release efficiency."
                ],
                technologies: ["Clean Architecture", "Kotlin", "Jetpack compose", "GraphQL", "MitId", "Firebase", "KeyCloak", "Ktor server", "Docker"],
                side: "right",
                type: "experience",
                link: "https://www.evryone.io",
                image: "https://play-lh.googleusercontent.com/zIvj1UwRPGQ3u6haY9sFvZn1ZaIKGGpLg3cBRch7k2H9a1TaAUUqFh3Se2o5IIgHs7E=w480-h960"
            },
            {
                date: "Jan 2023 - Nov 2025",
                title: "Senior Mobile Developer",
                company: "iMotions",
                description: [
                    "Owned the Android application, integrating internal device sensors and external hardware via Bluetooth to support asynchronous data collection.",
                    "Contributed to the core client of the CACHET Research Platform (CARP).",
                    "Set up and maintained CI/CD pipelines using GitHub Actions, AWS, and Firebase to support automated testing and delivery."
                ],
                technologies: ["Android Jetpack", "Bluetooth Low Energy (BLE)", "Kotlin Coroutines", "GitHub Actions", "Azure"],
                type: "experience",
                link: "https://imotions.com",
                image: "https://media.licdn.com/dms/image/v2/C4D33AQFhS_tbMZFNww/productpage-logo-image_200_200/productpage-logo-image_200_200/0/1631008598309/imotions_software_logo?e=1769554800&v=beta&t=6GnXjrrSAmYoAxeUBiPB04wvVXin60J9gWkyKznpMW4"
            },
            {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern stack for optimal performance.",
                platforms: ["Web", "Mobile", "API"],
                type: "project",
                featured: true,
                githubLink: "https://github.com/yourusername/ecommerce",
                demoLink: "https://demo.example.com"
            },
            {
                date: "June 2015 - Feb 2021",
                title: "Android developer",
                company: "Planday",
                description: [
                    "Owned and delivered core product areas, including messaging; user and account management (multi-account support, authentication, and session handling); feature rollouts; modern scheduling; and user behavior tracking.",
                    "Modularized the main codebase to smaller independent modules, allowing multiple teams to work in parallel on the same project.",
                    "Boosted PlayStore rating from 3.6 to 4.4 and achieved a 99.8% crash-free rate by driving rigorous process optimization and quality enhancements",
                    "Set up and maintained CI/CD pipelines",
                    "Led the overhaul of automated testing, introducing BDD practices with Cucumber to improve test coverage and reliability",
                    "Coached and mentored new team members, supporting onboarding and raising overall engineering standards"
                ],
                technologies: ["Android Development", "RxJava", "Retrofit", "Realm", "Kotlin", "Koin", "Firebase", "TeamCity", "Jenkins", "SonarQube", "BDD"],
                side: "right",
                type: "experience",
                link: "https://www.linkedin.com/company/planday",
                image: "https://media.licdn.com/dms/image/v2/C4E0BAQFyd08VKekB6w/company-logo_200_200/company-logo_200_200/0/1674044116095/planday_logo?e=1770249600&v=beta&t=GgWJ7Rn8GMYAuIG9641rQs4IvU1OfH-hJ3zRjSuL9jk"
            },
            {
                date: "Jan 2017 - Dec 2019",
                title: "Android developer",
                company: "GoStream",
                description: [
                    "Developed the first mobile version of GoStream, allowed users to livestream and create interactive mini-games to boost engagement during their streams."
                ],
                technologies: ["RTMP", "WebRTC"],
                side: "left",
                type: "experience",
                link: "https://www.gostream.vn",
                image: "https://w.ladicdn.com/s600x350/5f685ac09d921d4138c4f6ca/logo-main-20231031123133-caspk.png"
            },
            {
                date: "June 2013 - May 2015",
                title: "Android Developer",
                company: "Samsung Electronics R&D Center",
                description: [
                    "Developed & maintained android apps in B2B & B2C Cloud Solution in various Samsung flagship models.",
                    "Developed the SmartMeeting system, involving in frontend, backend and clients integrated into Samsung tablet devices",
                    ],

                technologies: ["Android System", "Android Development", "Java", "Spring framework"],
                side: "right",
                type: "experience",
                link: "https://www.samsung.com/vn",
                image: "https://images.samsung.com/is/image/samsung/assets/us/about-us/brand/logo/pc/720_600_1.png?$720_N_PNG$"
            }
        ],

        education: [
            {
                date: "August 2008 - June 2013",
                title: "Bachelor in Computer Science",
                company: "Hanoi university of science and technology",
                description: "Focus on Software Engineering.",
                technologies: ["Data Structures", "Algorithms", "Operating System"],
                side: "left",
                type: "education",
                link: "https://hust.edu.vn/en/",
                image: "https://hust.edu.vn/uploads/sys/logo-website02_136_200_1.png"
            }
        ],

        skills: [
            {
                category: "Frontend",
                icon: "layers",
                color: "code-keyword",
                items: [
                    { name: "React", level: "Expert" },
                    { name: "TypeScript", level: "Advanced" },
                    { name: "Next.js", level: "Advanced" },
                    { name: "Tailwind CSS", level: "Expert" }
                ],
                link: null
            },
            {
                category: "Backend",
                icon: "database",
                color: "code-function",
                items: [
                    { name: "Node.js", level: "Expert" },
                    { name: "PostgreSQL", level: "Advanced" },
                    { name: "GraphQL", level: "Intermediate" },
                    { name: "Redis", level: "Intermediate" }
                ],
                link: null
            },
            {
                category: "DevOps & Tools",
                icon: "memory",
                color: "code-string",
                items: [
                    { name: "Docker", level: "Advanced" },
                    { name: "AWS", level: "Advanced" },
                    { name: "GitHub Actions", level: "Expert" },
                    { name: "Kubernetes", level: "Intermediate" }
                ],
                link: null
            }
        ],

        projects: [
            {
                title: "Task Management Platform",
                description: "Real-time collaborative task manager with team features, notifications, and analytics dashboard.",
                technologies: ["React", "Firebase", "WebSockets"],
                github: "https://github.com/yourusername/tasks",
                demo: "https://tasks.example.com"
            },
            {
                title: "Weather Dashboard",
                description: "Interactive weather app with forecasts, maps, and historical data visualization.",
                technologies: ["Vue.js", "Chart.js", "Weather API"],
                github: "https://github.com/yourusername/weather",
                demo: null
            },
            {
                title: "Developer Blog",
                description: "Technical blog with markdown support, syntax highlighting, and SEO optimization.",
                technologies: ["Next.js", "MDX", "Tailwind"],
                github: "https://github.com/yourusername/blog",
                demo: "https://blog.example.com"
            },
            {
                title: "API Gateway",
                description: "Microservices API gateway with rate limiting, authentication, and request routing.",
                technologies: ["Node.js", "Redis", "Docker"],
                github: "https://github.com/yourusername/gateway",
                demo: null
            }
        ],

        footer: {
            copyright: "© 2025 Thai Phan Dinh. I'm learning again how to do frontend.",
            links: [
                { icon: "code", label: "GitHub", url: "https://github.com/dinhthaidaica" },
                { icon: "work", label: "LinkedIn", url: "https://linkedin.com/in/phan-dinh-thai" },
                { icon: "chat", label: "X", url: "https://x.com/thaiphan198" }
            ]
        }
    };
