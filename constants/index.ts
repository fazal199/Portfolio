import { Code,Database,Layout,Palette } from "lucide-react"


const NAV_ITEMS:any = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
]

const TYPEWRITER_HERO = ["Web Developer!", "Web Designer!"]
const PROJECTS = [
    {
      title: "E-commerce Platform",
      image: "/projectimages/img1.webp",
      tags: ["React", "Node.js", "MongoDB"],
      functionalities: [
        "User authentication",
        "Product catalog",
        "Shopping cart",
        "Payment integration"
      ]
    },
    {
      title: "Task Management App",
      image: "/projectimages/img1.webp",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      functionalities: [
        "Create and assign tasks",
        "Real-time updates",
        "Project timelines",
        "File attachments"
      ]
    },
    {
      title: "Social Media Dashboard",
      image: "/projectimages/img1.webp",
      tags: ["Angular", "Firebase", "Redux"],
      functionalities: [
        "Analytics overview",
        "Post scheduling",
        "Engagement metrics",
        "Competitor analysis"
      ]
    }
  ]

  const SERVICES = [
    {
      title: 'Landing Page',
      description: 'Captivate your audience with a stunning, conversion-focused landing page that makes a lasting first impression.',
      icon: Layout,
      image: '/services/serv1.webp',
    },
    {
      title: 'Custom Web App',
      description: 'Transform your ideas into powerful, scalable web applications tailored to your unique business needs.',
      icon: Code,
      image: '/services/serv1.webp',
    },
    {
      title: 'Customize Website',
      description: 'Elevate your online presence with a bespoke website design that reflects your brand\'s personality and values.',
      icon: Palette,
      image: '/services/serv1.webp',
    },
    {
      title: 'API Development',
      description: 'Build robust, efficient APIs that power your applications and integrate seamlessly with third-party services.',
      icon: Database,
      image: '/services/serv1.webp',
    },
  ]
  const SKILL_CATEGORIES = [
    {
        title: 'Frontend Skills',
        skills: [
            { name: 'HTML', src: '/skillslogos/html.png' },
            { name: 'CSS', src: '/skillslogos/css.png' },
            { name: 'Tailwind CSS', src: '/skillslogos/tailwind.png' },
            { name: 'JavaScript', src: '/skillslogos/javascript.png' },
            { name: 'jQuery', src: '/skillslogos/jquery.png' },
            { name: 'TypeScript', src: '/skillslogos/typescript.png' },
            { name: 'Node.js', src: '/skillslogos/nodelogo.webp' },
            { name: 'React', src: '/skillslogos/reactlogo.webp' },
            { name: 'Next.js', src: '/skillslogos/nextlogo.jpg' },
            { name: 'Redux', src: '/skillslogos/reduxlogo.webp' },
            { name: 'GSAP', src: '/skillslogos/gsap.png' }
        ]

    },
    {
        title: 'Backend Skills',
        skills: [
            { name: 'Express.js', src: '/skillslogos/expressjs.png' },
            { name: 'MongoDB', src: '/skillslogos/mongodblogo.webp' },
            { name: 'Mongoose', src: '/skillslogos/mongoose.png' }
        ]

    },
    {
        title: 'Tools',
        skills: [
            { name: 'Postman', src: '/skillslogos/postman.png' },
            { name: 'Git', src: '/skillslogos/git.png' },
            { name: 'GitHub', src: '/skillslogos/github.png' },
            { name: 'Notion', src: '/skillslogos/notion.png' },
            { name: 'Cursor AI', src: '/skillslogos/cursor.webp' },
            { name: 'Chatgpt', src: '/skillslogos/chatgpt.png' },
            { name: 'Claude AI', src: '/skillslogos/claude.png' },
        ]

    }
]
  
export {
    NAV_ITEMS,
    TYPEWRITER_HERO,
    PROJECTS,
    SERVICES,
    SKILL_CATEGORIES
}