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
  
  
export {
    NAV_ITEMS,
    TYPEWRITER_HERO,
    PROJECTS,
    SERVICES
}