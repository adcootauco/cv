/**
 * CV Portfolio Data
 * 
 * Simulates an API response structure.
 * Ideally, this would be fetched from a backend like Xano or Airtable.
 */

const RESUME_DATA = {
    // Personal Information
    name: "Foncy Cootauco",
    title: "Low-Code Solutions Architect",
    email: "adcootauco@gmail.com",
    phone: "(+63) 968-227-1757",
    location: "Philippines",

    // Hero Section
    hero: {
        headline: "Building production apps <span class='highlight'>10x faster</span> with low-code platforms",
        subheadline: "I architect and develop custom web applications using Xano, Weweb, and Tadabase—delivering enterprise-grade solutions without the traditional development timeline."
    },

    // Social Media
    social: [
        { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/foncyc", label: "LinkedIn" },
        { icon: "fab fa-github", url: "https://github.com/foncyc", label: "GitHub" },
        { icon: "fab fa-facebook", url: "https://www.facebook.com/foncyc", label: "Facebook" },
        { icon: "fab fa-instagram", url: "https://www.instagram.com/foncyc/", label: "Instagram" },
        { icon: "fab fa-x-twitter", url: "https://twitter.com/foncyc/", label: "X" }
    ],

    // Primary Stack (shown in sidebar)
    primaryStack: [
        { name: "Xano", img: "xano.png" },
        { name: "Weweb", img: "weweb.jpg" },
        { name: "Tadabase", img: "tadabase.png" },
        { name: "REST APIs", img: "api.png" }
    ],

    // Languages
    languages: [
        { name: "English", level: 5, type: "Professional" },
        { name: "Filipino", level: 5, type: "Native" }
    ],

    // Platform Expertise (main content area)
    platforms: [
        { name: "Xano", description: "Backend & APIs", img: "xano.png", level: "Expert" },
        { name: "Weweb", description: "Frontend Builder", img: "weweb.jpg", level: "Expert" },
        { name: "REST APIs", description: "Integrations", img: "api.png", level: "Expert" },
        { name: "Tadabase", description: "Database Apps", img: "tadabase.png", level: "Advanced" },
        { name: "Node.js", description: "Server Runtime", img: "nodejs.png", level: "Advanced" },
        { name: "PHP", description: "Backend Dev", img: "php.png", level: "Proficient" }
    ],

    // Featured Projects (2-3 best low-code projects)
    featuredProjects: [
        {
            title: "Custom Enterprise Platform Migration",
            company: "Strategic Visionz",
            logo: "strategicvisionz.png",
            timeline: "SEP 2024 - Present",
            description: "A large-scale platform migration from Knack to Tadabase, transitioning business-critical applications while developing highly customized solutions.",
            tags: [
                { name: "Tadabase", img: "tadabase.png" },
                { name: "Weweb", img: "weweb.jpg" },
                { name: "Xano", img: "xano.png" },
                { name: "Ably", img: "ably.webp" },
                { name: "NodeJS", img: "nodejs.png" }
            ],
            accomplishments: [
                "Led <strong>end-to-end migration</strong> of business-critical application, preserving functionality while enabling advanced customization",
                "Developed solutions combining <strong>low-code platforms with external APIs</strong>, delivering features not achievable out-of-the-box",
                // "Implemented <strong>phased rollout strategy</strong> with zero business disruption during migration"
            ]
        },
        {
            title: "Followup Program",
            company: "Strategic Visionz",
            logo: "strategicvisionz.png",
            timeline: "JAN 2024 - AUG 2024",
            description: "A lead management and marketing automation platform with pipeline tracking, SMS/email automation, and centralized customer communications.",
            tags: [
                { name: "Weweb", img: "weweb.jpg" },
                { name: "Xano", img: "xano.png" },
                { name: "Twilio", img: "twilio.png" },
                { name: "Sendgrid", img: "sendgrid.png" }
            ],
            accomplishments: [
                "<strong>Eliminated CRM subscription costs</strong> by replacing noCRM with custom Weweb/Xano solution",
                "Centralized customer outreach by integrating <strong>SMS and email automation</strong> directly into platform",
                "Connected with Move Calculator via <strong>REST APIs</strong> for unified lead-to-quote workflow"
            ]
        }
    ],

    // Work Experience
    experience: [
        {
            company: "Strategic Visionz",
            type: "Remote",
            logo: "strategicvisionz.png",
            positions: [
                { title: "Senior Full Stack Developer", startDate: "Apr 2023", endDate: "Present" }
            ],
            duties: [
                "Architect and develop custom web applications for field and home service clients",
                "Design and implement workflow automations that streamline operations",
                "Build and maintain RESTful API integrations with third-party platforms",
                "Rapidly prototype using low-code/no-code platforms to accelerate delivery"
            ]
        },
        {
            company: "De La Salle Lipa, Inc.",
            type: "Hybrid",
            logo: "lasalle-logo.jpg",
            positions: [
                { title: "Software Solutions Head", startDate: "Aug 2021", endDate: "Apr 2023" },
                { title: "Application Developer", startDate: "Jan 2018", endDate: "Jul 2021" }
            ],
            duties: [
                "Led Software Solutions team in delivering institution-wide digital transformation",
                "Defined technical architecture and standards for internally developed applications",
                "Collaborated with department heads to gather requirements and prioritize development roadmaps",
                "Oversaw full software development lifecycle from planning through deployment",
                "Evaluated emerging technologies and recommended adoption strategies aligned with institutional goals",
                "Ensured application security and compliance with data privacy standards"
            ]
        }
    ],

    // ALL Projects (12 total: 3 low-code, 9 traditional)
    projects: [
        // LOW-CODE PROJECTS (3)
        {
            id: "enterprise-migration",
            title: "Custom Enterprise Platform Migration",
            company: "Strategic Visionz",
            logo: "strategicvisionz.png",
            timeline: "SEP 2024 - Present",
            description: "A large-scale platform migration from Knack to Tadabase, transitioning business-critical applications while developing highly customized solutions using low-code tools and third-party integrations.",
            tags: [
                { name: "Tadabase", img: "tadabase.png" },
                { name: "Weweb", img: "weweb.jpg" },
                { name: "Xano", img: "xano.png" },
                { name: "Ably", img: "ably.webp" },
                { name: "NodeJS", img: "nodejs.png" },
                { name: "React", img: "reactjs.png" }
            ],
            team: "2 team members; 1 Manager, 1 Developer",
            accomplishments: [
                "Led <strong>end-to-end migration</strong> of a business-critical application from Knack to Tadabase, preserving existing functionality while enabling advanced customization capabilities.",
                "Develop highly customized solutions by combining <strong>low-code/no-code platforms with external tools and APIs</strong>, delivering features not achievable with out-of-the-box platform capabilities."
            ],
            category: "low-code"
        },
        {
            id: "followup-program",
            title: "Followup Program",
            company: "Strategic Visionz",
            logo: "strategicvisionz.png",
            timeline: "JAN 2024 - AUG 2024",
            description: "A lead management and marketing automation platform that integrates with company systems to track pipelines, automate SMS/email outreach, and centralize customer communications.",
            tags: [
                { name: "Weweb", img: "weweb.jpg" },
                { name: "Xano", img: "xano.png" },
                { name: "Twilio", img: "twilio.png" },
                { name: "Sendgrid", img: "sendgrid.png" }
            ],
            team: "2 team members; 1 Manager, 1 Developer",
            accomplishments: [
                "Replaced third-party CRM subscription (noCRM) with a <strong>custom Weweb/Xano solution</strong>, eliminating recurring licensing costs while delivering tailored lead processing workflows.",
                "Resolved common CRM frustrations—limited customization, rigid pipelines, and fragmented communication tracking—by building a <strong>fully customizable pipeline and automation system</strong>.",
                "Centralized customer outreach by integrating <strong>SMS and email automation</strong> directly into the platform, eliminating the need for individual employee cellphones.",
                "Connected the Followup Program with the Move Calculator and other company systems via <strong>REST APIs</strong>, creating a unified workflow from lead capture to quote generation."
            ],
            category: "low-code"
        },
        {
            id: "move-calculator",
            title: "Move Calculator",
            company: "Strategic Visionz",
            logo: "strategicvisionz.png",
            timeline: "MAY 2023 - DEC 2023",
            description: "A logistics quoting application that manages residential and commercial moves, featuring distance-based pricing, furniture inventory tracking, interactive maps, and seamless integration with existing company systems.",
            tags: [
                { name: "Weweb", img: "weweb.jpg" },
                { name: "Xano", img: "xano.png" },
                { name: "Google Maps", img: "googlemaps.png" },
                { name: "Here Maps", img: "heremaps.png" }
            ],
            team: "2 team members; 1 Manager, 1 Developer",
            accomplishments: [
                "Replaced a legacy Knack-based Move Calculator with a <strong>scalable Weweb/Xano solution</strong>, eliminating performance bottlenecks and enabling future feature expansion.",
                "Resolved long-standing usability issues from the previous system by conducting deep requirement analysis and implementing customer-requested features including <strong>interactive maps and dynamic pricing dashboards</strong>.",
                "Integrated seamlessly with existing company systems via <strong>REST APIs</strong>, enabling customer service teams to generate accurate move quotes based on inventory, distance, and service type."
            ],
            category: "low-code"
        },

        // TRADITIONAL PROJECTS (9)
        {
            id: "lms-middleware",
            title: "LMS Middleware - Grades",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "AUG 2020 - JUN 2021",
            description: "A middleware solution integrating legacy student information systems with Canvas LMS, enabling automated grade transmutation and posting for faculty.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" },
                { name: "Canvas API", img: "canvas.png" }
            ],
            team: "3 team members; 1 Manager, 1 Canvas Specialist, 1 Developer",
            accomplishments: [
                "Eliminated manual grade encoding for <strong>500+ faculty members</strong>, reducing grade submission time from 2-3 hours to under 15 minutes per class.",
                "Improved grade posting accuracy to <strong>99.9%</strong> by implementing a faculty-controlled review workflow that allows selective verification by subject and student before final submission."
            ],
            category: "traditional"
        },
        {
            id: "online-attendance",
            title: "Online Attendance Monitoring",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "NOV 2020",
            description: "A web-based attendance tracking system enabling remote work compliance during the COVID-19 pandemic.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" }
            ],
            team: "1 Developer",
            accomplishments: [
                "Enabled attendance tracking for <strong>700+ remote employees within 2 weeks</strong> of pandemic lockdown, by deploying a portal-integrated time logging system with automated daily IN/OUT capture."
            ],
            category: "traditional"
        },
        {
            id: "email-support-tools",
            title: "Email Support Admin Tools",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "MAY 2020 - JUN 2020",
            description: "An internal support tool for rapid account lookup and issue resolution across student, parent, and employee inquiries.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" }
            ],
            team: "1 Developer",
            accomplishments: [
                "Reduced account lookup time by <strong>93%</strong> (from 15 minutes to under 1 minute per inquiry) by building a unified search interface that aggregates data from multiple legacy systems via REST APIs."
            ],
            category: "traditional"
        },
        {
            id: "interim-admissions",
            title: "Interim Admissions Website",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "SEP 2019 - APR 2020",
            description: "A fully online admissions platform enabling contactless application processing during the COVID-19 pandemic.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" }
            ],
            team: "3 team members; 1 Manager & 2 Developers",
            accomplishments: [
                "Enabled <strong>100% contactless admissions processing for 1,000+ applicants</strong> during pandemic lockdowns, by digitizing signup, document submission, and payment workflows into a single online platform."
            ],
            category: "traditional"
        },
        {
            id: "parent-portal",
            title: "Parent Portal",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "JAN 2019 - AUG 2019",
            description: "A unified parent portal providing single sign-on access to grades, billing, enrollment, and LMS services linked to their children's accounts.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" }
            ],
            team: "3 team members; 1 Manager, 1 QA, & 1 Developer",
            accomplishments: [
                "Increased tuition fee collection rate by <strong>400%</strong> and eliminated 130,000 sheets of paper annually, by consolidating grades, billing, and enrollment into a single sign-on portal.",
                "Achieved <strong>95% parent adoption</strong> within the first semester by designing an intuitive, user-centered interface integrated with 5+ legacy systems via REST APIs."
            ],
            category: "traditional"
        },
        {
            id: "nfc-activator",
            title: "School ID (NFC) Activator",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "FEB 2019",
            description: "An administrative tool for instant activation and management of NFC-enabled school IDs across campus services.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" },
                { name: "NFC", img: "nfc.jpg" },
                { name: "Android", img: "android.png" }
            ],
            team: "1 Developer",
            accomplishments: [
                "Reduced ID activation time by <strong>98%</strong> (from 10-15 minutes to 15-20 seconds per card) by building a browser-based tool with direct NFC reader integration.",
                "Eliminated ID data entry errors entirely by replacing manual encoding with <strong>dynamic read/write operations</strong> via a plug-and-play NFC card reader."
            ],
            category: "traditional"
        },
        {
            id: "event-attendance",
            title: "Event Attendance Registration",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "OCT 2018 - MAR 2019",
            description: "A campus-wide NFC-based event registration platform supporting instant tap-to-register attendance tracking.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" },
                { name: "NFC", img: "nfc.jpg" },
                { name: "Android", img: "android.png" }
            ],
            team: "2 Developers",
            accomplishments: [
                "Eliminated paper-based event registration for <strong>9,000+ students and employees</strong> by deploying a tap-to-register system with plug-and-play NFC card readers.",
                "Reduced per-person registration time by <strong>95%</strong> (from 20 seconds to 1 second) by implementing single-tap NFC authentication.",
                "Enabled real-time attendance reporting for <strong>100+ events annually</strong> by providing a self-service admin module accessible to all employees via the portal.",
                "Enriched attendance analytics with demographic and academic data by integrating the platform with legacy student information systems via REST APIs."
            ],
            category: "traditional"
        },
        {
            id: "employee-clearance",
            title: "Employee's Periodical Clearance",
            company: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            timeline: "APR 2018 - AUG 2018",
            description: "A digital clearance management system enabling HR, Finance, and department heads to track and clear employee obligations before payroll release.",
            tags: [
                { name: "PHP", img: "php.png" },
                { name: "MySQL", img: "mysql.png" },
                { name: "DLSL API", img: "api.png" }
            ],
            team: "2 team members; 1 Manager & 1 Developer",
            accomplishments: [
                "Saved <strong>3,200 sheets of paper annually</strong> and reduced clearance processing time by 80%, by digitizing the multi-department clearance workflow.",
                "Eliminated payroll tagging delays entirely by providing Finance with <strong>real-time clearance status dashboards</strong>, reducing month-end processing from 2 days to same-day completion.",
                "Increased clearance compliance rate to <strong>98%</strong> by deploying automated email notifications and a portal-accessible tracking interface for all 700+ employees."
            ],
            category: "traditional"
        },
        {
            id: "cv-portfolio",
            title: "Curriculum Vitae",
            company: "Personal Project",
            logo: "photo.png",
            timeline: "MAY 2017 - AUG 2017",
            description: "A personal portfolio website showcasing professional experience, skills, and projects with a responsive, data-driven design.",
            tags: [
                { name: "NodeJS", img: "nodejs.png" },
                { name: "ExpressJS", img: "expressjs.png" },
                { name: "Bootstrap", img: "bootstrap.png" },
                { name: "Heroku", img: "heroku.webp" },
                { name: "MongoDB", img: "mongodb.png" }
            ],
            team: "",
            accomplishments: [
                "Built and deployed a <strong>production-ready full-stack web application</strong> within 3 months of completing IT certification, using Node.js, Express, and MongoDB on Heroku demonstrating end-to-end development capability from design to deployment."
            ],
            category: "traditional"
        }
    ],

    // Skills by Category
    skills: {
        expert: [
            { name: "Xano", level: 5 },
            { name: "Weweb", level: 5 },
            { name: "REST API Design", level: 5 },
            { name: "Tadabase", level: 5 },
        ],
        advanced: [
            { name: "Full Stack Development", level: 4 },
            { name: "Node.js", level: 4 },
            // { name: "Database Design", level: 4 }
        ],
        proficient: [
            // { name: "Cyber Security", level: 3 },
            { name: "PHP", level: 2 },
            { name: "React", level: 2 },
            // { name: "Linux Administration", level: 2 }
        ]
    },

    // Education
    education: [
        {
            school: "University of the Philippines Diliman",
            logo: "uplogo.png",
            course: "Certificate in IT - Applications Development",
            dates: "Jan 2017 - Jun 2017"
        },
        {
            school: "De La Salle Lipa",
            logo: "lasalle-logo.jpg",
            course: "BS Hotel & Restaurant Management",
            dates: "2002 - 2006"
        }
    ],

    // Certifications
    certifications: [
        {
            name: "Google Cybersecurity Professional Certificate V2",
            issuer: "Coursera",
            logo: "coursera.png",
            date: "July 2025",
            url: "https://www.credly.com/badges/a4dd4f15-b6af-4644-a38d-c85ed5bb2c0e/linked_in_profile"
        }
    ]
};

/**
 * Simulates fetching data from an external API (like Xano).
 * Uses a Promise to mimic network latency.
 */
function fetchData() {
    return new Promise((resolve) => {
        console.log('Fetching data from API...');
        // Simulate slight network delay
        setTimeout(() => {
            console.log('Data received');
            resolve(RESUME_DATA);
        }, 300);
    });
}
