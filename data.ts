import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { IService, ISkill } from './types'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "Can build scalable SPA using HTML,CSS and React.js/Next.js",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "Handle database, server, api using Express & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "A daily problem solver on Codechef",
      },
      
]

export const languages: ISkill[] = [
  {
    name: "JAVA",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "C++",
    level: "50%",
    Icon: BsCircleFill,
  },

  {
    name: "Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "Tailwind",
    level: "50%",
    Icon: BsCircleFill,
  },
]
export const tools: ISkill[] = [
  {
    name: "Git",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Firebase",
    level: "50%",
    Icon: BsCircleFill,
  },

]