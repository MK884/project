export const techIcons = {
  react: "react.svg",
  javascript:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  node: "https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/twitter_thumb_201604_node.png",
  typescript:
    "https://w7.pngwing.com/pngs/1008/952/png-transparent-typescript-hd-logo.png",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  python:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png",
  react_native:
    "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  tooljet: "tooljet.png",
  scss: "https://static-00.iconduck.com/assets.00/file-type-scss-icon-862x1024-9tvk5qar.png",
  tailwind: "https://avatars.githubusercontent.com/u/67109815?s=280&v=4",
  css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  html: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  express: "https://img.icons8.com/nolan/512/express-js.png",
  android: "android.png",
  api: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png",
  materialUI: "materialui.svg",
  cpp: "cpp.png",
  git: "git-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
};

export const skills: Array<{ src: string; text: string }> = [
  {
    src: techIcons.javascript,
    text: "javaScript",
  },
  {
    src: techIcons.react,
    text: "react",
  },
  {
    src: techIcons.node,
    text: "node.js",
  },
  {
    src: techIcons.typescript,
    text: "typeScript",
  },
  {
    src: techIcons.materialUI,
    text: "Material UI",
  },
  {
    src: techIcons.cpp,
    text: "C++",
  },
  {
    src: techIcons.git,
    text: "Git",
  },
  {
    src: techIcons.mongodb,
    text: "MmngoDB",
  },
  {
    src: techIcons.react_native,
    text: "react native",
  },
  {
    src: techIcons.python,
    text: "python",
  },
  {
    src: techIcons.mysql,
    text: "MySQL",
  },
  {
    src: techIcons.css,
    text: "css",
  },
  {
    src: techIcons.html,
    text: "html",
  },
  {
    src: techIcons.scss,
    text: "scss",
  },
  {
    src: techIcons.tailwind,
    text: "tailwind",
  },
  {
    src: techIcons.express,
    text: "express.js",
  },
  {
    src: techIcons.api,
    text: "REST Api",
  },
];

export const openSourceProjects: Array<IProjectCard> = [
  {
    techStacks: [
      {
        src: techIcons.tooljet,
        alt: "tooljet",
      },
    ],
    title: "fix:QueryManager filter-list button issue",
    codeLink: "https://github.com/ToolJet/ToolJet/pull/10039",
    demoLink: "https://github.com/ToolJet/ToolJet/pull/10039",
    thumbnail:
      "https://opengraph.githubassets.com/063db7b39c3853d0c1c47869ad073652f1ab56cf46a3027fa49487a4898b5a21/ToolJet/ToolJet/pull/10039",
  },
  {
    techStacks: [
      {
        src: techIcons.tooljet,
        alt: "tooljet",
      },
    ],
    title: "Template: Created student attendance tracker",
    codeLink: "https://github.com/ToolJet/ToolJet/pull/10023",
    demoLink: "https://github.com/ToolJet/ToolJet/pull/10023",
    thumbnail:
      "https://opengraph.githubassets.com/babc4ee8c49bee18c898d6004fba0c129d207d99a0ca905a4ab1272253d60cc3/ToolJet/ToolJet/pull/10023",
  },
  {
    techStacks: [
      {
        src: techIcons.tooljet,
        alt: "tooljet",
      },
    ],
    title: "Template: Created base64 encoder decoder",
    codeLink: "https://github.com/ToolJet/ToolJet/pull/9653",
    demoLink: "https://github.com/ToolJet/ToolJet/pull/9653",
    thumbnail:
      "https://opengraph.githubassets.com/9b5acfd3d113e118a7b43757a6ecc247f6472cda003ba0e39f596ddc08d6ebdc/ToolJet/ToolJet/pull/9653",
  },
];

export const majorProjects: Array<IProjectCard> = [
  {
    techStacks: [
      {
        src: techIcons.react,
        alt: "react",
      },
      {
        src: techIcons.typescript,
        alt: "typescript",
      },
      {
        src: techIcons.scss,
        alt: "scss",
      },
      {
        src: techIcons.node,
        alt: "node",
      },
      {
        src: techIcons.mongodb,
        alt: "mongodb",
      },
      {
        src: techIcons.express,
        alt: "express js",
      },
    ],
    title: "wrapper - streamlines link management",
    codeLink: "https://github.com/MK884/wrapper",
    demoLink: "https://wrapper-mk.vercel.app/",
    thumbnail: "wrapper.png",
  },
  {
    techStacks: [
      {
        src: techIcons.react_native,
        alt: "react native",
      },
      {
        src: techIcons.android,
        alt: "android",
      },
      {
        src: techIcons.tailwind,
        alt: "native wind",
      },
      {
        src: techIcons.typescript,
        alt: "typescript",
      },
    ],
    title: "stylish - a clothing store app",
    codeLink: "https://github.com/MK884/stylish",
    demoLink: "https://github.com/MK884/stylish",
    thumbnail: "stylish.png",
  },
  {
    techStacks: [
      {
        src: techIcons.react_native,
        alt: "react native",
      },
      {
        src: techIcons.react,
        alt: "react",
      },
      {
        src: techIcons.android,
        alt: "android",
      },
      {
        src: techIcons.css,
        alt: "css",
      },
      {
        src: techIcons.api,
        alt: "api",
      },
      {
        src: techIcons.typescript,
        alt: "typescript",
      },
    ],
    title: "wallpie - photo's library",
    codeLink: "https://github.com/MK884/wallpie",
    demoLink: "https://wallpie.vercel.app/",
    thumbnail: "wallpie.png",
  },
  {
    techStacks: [
      {
        src: techIcons.css,
        alt: "css",
      },
      {
        src: techIcons.api,
        alt: "api",
      },
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.express,
        alt: "express.js",
      },
    ],
    title: "Blog - make today's blog",
    codeLink: "https://github.com/MK884/Mern-Blog",
    demoLink: "https://github.com/MK884/Mern-Blog",
    thumbnail: "blog.jpeg",
  },
  {
    techStacks: [
      {
        src: techIcons.css,
        alt: "css",
      },
      {
        src: techIcons.react,
        alt: "react",
      },
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.express,
        alt: "express.js",
      },
      {
        src: techIcons.mongodb,
        alt: "MongoDB",
      },
      {
        src: techIcons.node,
        alt: "Node",
      },
    ],
    title: "Campus Connect - Network for management",
    codeLink: "https://github.com/MK884/Campus_Connect",
    demoLink: "https://github.com/MK884/Campus_Connect",
    thumbnail: "campus.png",
  },
];

export const miniProjects: Array<IProjectCard> = [
  {
    techStacks: [
      {
        src: techIcons.react,
        alt: "react",
      },
      {
        src: techIcons.typescript,
        alt: "typescript",
      },
      {
        src: techIcons.postgresql,
        alt: "postgresql",
      },
      {
        src: techIcons.express,
        alt: "express",
      },
      {
        src: techIcons.node,
        alt: "node js",
      },
    ],
    title: "Chess King - Play Chess Game Online with friends",
    codeLink: "https://github.com/MK884/ChessKing",
    demoLink: "https://github.com/MK884/ChessKing",
    thumbnail: "chessKing.png",
  },
  {
    techStacks: [
      {
        src: techIcons.react,
        alt: "react",
      },
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.api,
        alt: "api",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Movies Info - Search and get information of movies",
    codeLink: "https://github.com/MK884/Movie-Info",
    demoLink: "https://movies-info-card.netlify.app/",
    thumbnail: "movies.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Simple Calculator - basic calculator using HTML",
    codeLink: "https://github.com/MK884/JsTutorials/tree/main/Calculator",
    demoLink: "https://calculator-khalid.vercel.app/",
    thumbnail: "calculator.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Random Color Plate Generator",
    codeLink:
      "https://github.com/MK884/JsTutorials/tree/main/Color%20Palette%20Generator",
    demoLink: "https://color-plate-khalid.vercel.app/",
    thumbnail: "color-plate.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Guess The Words - The word guessing game",
    codeLink: "https://github.com/MK884/JsTutorials/tree/main/GuessWords",
    demoLink: "https://guess-words-game.vercel.app/",
    thumbnail: "guess-words.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
      {
        src: techIcons.api,
        alt: "API",
      },
    ],
    title: "QR Code Generator",
    codeLink: "https://github.com/MK884/Qr-code-generator",
    demoLink: "https://qr-code-generator-khalid.vercel.app/",
    thumbnail: "qr.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Passowrd Generator - make strong passwords",
    codeLink: "https://github.com/MK884/Qr-code-generator",
    demoLink: "https://qr-code-generator-khalid.vercel.app/",
    thumbnail: "password.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Translator WebApp - In my language translator app",
    codeLink: "https://github.com/MK884/translator",
    demoLink: "https://translator-app-khalid.vercel.app/",
    thumbnail: "translator.png",
  },
  {
    techStacks: [
      {
        src: techIcons.javascript,
        alt: "javascript",
      },
      {
        src: techIcons.html,
        alt: "HTML",
      },
      {
        src: techIcons.css,
        alt: "CSS",
      },
    ],
    title: "Typing WebApp - Typing speed test",
    codeLink: "https://github.com/MK884/Typing-app",
    demoLink: "https://typing-app-khalid.vercel.app/",
    thumbnail: "typing.png",
  },
];
