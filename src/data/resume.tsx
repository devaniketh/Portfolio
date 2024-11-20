import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Aniketh Deb",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Build it, ship it, and watch the magic happen—let's create something extraordinary together!🚀",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solidity",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devaniketh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aniketh-deb-660632235/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Aniketh_Deb",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://drive.google.com/file/d/1S5rmDCVDkC6iVDwqstcAFyPxDdVUTzVA/view?usp=drive_link",
        icon: Icons.email,
        navbar: false,
      },    
    },
  },

  // work: [
  //   // Work experience data...
  // ],
  
  // education: [
  //   // Education data...
  // ],
  
  projects: [
    {
      title: "ZK-ReUseIt",
      href: "zk-re-use-it.vercel.app",
      dates: "",
      active: true,
      description:
        "ZKREuseit is a decentralized marketplace built on the Reclaim Protocol and Polygon zkEVM. By eliminating intermediaries, we ensure user control over data and transactions. Our platform enhances privacy and security through zero-knowledge proofs, enabling low-cost, scalable transactions while creating a fairer resale ecosystem for buyers and sellers. ",
      technologies: [
        "Reclaim Protocol-SDK's",
        "Typescript",
        "Solidity",
        "Ether.Js",
        "TailwindCSS",
        "React",
      
      ],
      links: [
        {
          type: "Website",
          href: "zk-re-use-it.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AnikethDeb2004/Zk-ReUseIt.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hi.png",
      video: 
        "",
    },
    {
      title: "SecureInsure",
      href: "secure-insure.vercel.app",
      dates: "",
      active: true,
      description:
        "SecureInsure leverages blockchain and smart contracts to enhance security, transparency, and efficiency in the insurance industry. Blockchain ensures a tamper-proof ledger for transactions, reducing fraud. Smart contracts automate claims processing and policy issuance, minimizing costs and eliminating intermediaries. This approach improves trust and customer satisfaction through transparent and streamlined operations.",
      technologies: [
        "Solidity",
        "React",
        "WAGMI",
        "TailwindCSS",
        "NodeJs",
      ],
      links: [
        {
          type: "Website",
          href: "https://secure-insure.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AnikethDeb2004/SecureInsure",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hello.png",
      video: "",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;