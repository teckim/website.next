export interface IProject {
  title?: string;
  image?: string;
  description?: string;
  technologies?: string[];
  company?: string;
  type?: string;
  year?: string;
  links?: {
    live?: string;
    source?: string;
  };
}

const projects: IProject[] = [
  {
    title: 'Vehiculum',
    image: 'vehiculum.png',
    description: 'A pixel-perfect app for online car leasing platform. At VEHICULUM, all leasing offers are available without a down payment. This offers the advantage that no large one-off payment is required to lease a car.',
    technologies: ['NuxtJs', 'SCSS', 'Figma', 'BEM Methodology'],
    company: 'PixelConn',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://www.vehiculum.de/',
    },
  },
  {
    title: 'Cheddar Up',
    image: 'cheddar-up.png',
    description: 'A web application that helps groups collect money and forms online for dues, events, fundraisers, group gifts, selling...the list goes on. For free!',
    technologies: ['React', 'Adobe XD'],
    company: 'PixelConn',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://www.cheddarup.com/',
    },
  },
  {
    title: 'Hiway',
    image: 'hiway.png',
    description: 'A blockchain-based work marketplace. It is based on some of the most creative and forward-thinking Fourth Industrial Revolution technologies: big data, blockchain, and artificial intelligence. Hiway benefits both the employee and the employer, empowering both individuals searching for work and those who need work done.',
    technologies: ['VueJs', 'SCSS'],
    company: 'PixelConn',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://hiway.io/',
    },
  },
  {
    title: 'CATS Configurator',
    image: 'cats.png',
    description: 'An open source cross-platform desktop app to communicate and configure CATS boards via USB.',
    technologies: ['ElectronJs', 'VueJs', 'Vuetify'],
    company: 'Upwork',
    type: 'GUI Dev',
    year: '2021',
    links: {
      live: 'https://github.com/catsystems/cats-configurator/releases/tag/0.1.3',
      source: 'https://github.com/catsystems/cats-configurator',
    },
  },
  {
    title: 'Cointral',
    image: 'cointral.png',
    description: 'A Turkish Cryptocurrency trading platform.',
    technologies: ['VueJs', 'NuxtJs', 'AntDesign'],
    company: 'Upwork',
    type: 'Front End Dev',
    year: '2021',
    links: {
      live: 'https://www.cointral.com/',
    },
  },
  {
    title: 'Blograils',
    image: 'blograils.png',
    description: 'Blograils is a full-stack web application blog, built using Ruby on Rails and PostgreSQL. Users can create, see, like comment on posts.',
    technologies: ['Ruby On Rails', 'TailwindCSS'],
    company: 'Microverse',
    type: 'Full Stack Dev',
    year: '2022',
    links: {
      live: 'https://blograils.onrender.com/',
      source: 'https://github.com/teckim/blograils'
    },
  },
  {
    title: 'Math Magicians',
    image: 'math-magicians.png',
    description: 'In this React web application, users can use the calculator feature, and see some quotes.',
    technologies: ['React', 'MUI'],
    company: 'Microverse',
    type: 'Front End Dev',
    year: '2022',
    links: {
      live: 'https://github.com/teckim/math-magicians/',
      source: 'https://main--sparkling-unicorn-8ccaee.netlify.app/',
    },
  },
  {
    title: 'To-Do App',
    image: 'screenshot-1.png',
    description: 'ToDo List web application, built to help users manage their list of tasks. Users can add, edit, remove, and reorder a list of tasks. And they can also mark a task as completed.',
    technologies: ['HTML', 'CSS', 'JS', 'Webpack'],
    company: 'Microverse',
    type: 'Front End Dev',
    year: '2022',
    links: {
      live: 'https://teckim.github.io/todo-list/',
      source: 'https://github.com/teckim/todo-list',
    },
  },
  {
    title: 'JS Conference',
    image: 'screenshot-2.png',
    description: 'A landing page, the first capstone project in Microverse school.',
    technologies: ['HTML', 'CSS', 'JS'],
    company: 'Microverse',
    type: 'Front End Dev',
    year: '2022',
    links: {
      live: 'https://teckim.github.io/js-conference/',
      source: 'https://github.com/teckim/js-conference',
    },
  },
];

export default projects;