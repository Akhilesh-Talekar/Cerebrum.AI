// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { z } from "zod";

import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
  postgres: "postgresql",
  postresql: "postgresql",
  python: "python",
  py: "python",
  java: "java",
  c: "c",
  "c++": "cplusplus",
  cpp: "cplusplus",
  csharp: "csharp",
  "c#": "csharp",
  dotnet: "dot-net",
  ".net": "dot-net",
  ruby: "ruby",
  rails: "rails",
  "ruby on rails": "rails",
  php: "php",
  laravel: "laravel",
  kotlin: "kotlin",
  swift: "swift",
  go: "go",
  golang: "go",
  rust: "rust",
  dart: "dart",
  flutter: "flutter",
  android: "android",
  ios: "apple",
  apple: "apple",
  xcode: "apple",
  linux: "linux",
  ubuntu: "ubuntu",
  debian: "debian",
  centos: "centos",
  fedora: "fedora",
  vscode: "vscode",
  "visual studio code": "vscode",
  "visual studio": "visualstudio",
  intellij: "intellij",
  webstorm: "webstorm",
  postman: "postman",
  eslint: "eslint",
  prettier: "prettier",
  nginx: "nginx",
  apache: "apache",
  nginxproxy: "nginx",
  nginxproxymanager: "nginx",
  kafka: "apachekafka",
  jenkins: "jenkins",
  ansible: "ansible",
  terraform: "terraform",
  pandas: "pandas",
  numpy: "numpy",
  matplotlib: "matplotlib",
  scikit: "scikit-learn",
  scikitlearn: "scikit-learn",
  sklearn: "scikit-learn",
  pytorch: "pytorch",
  tensorflow: "tensorflow",
  huggingface: "huggingface",
  openai: "openai",
  playwright: "playwright",
  vite: "vite",
  astro: "astro",
  sanity: "sanity",
  supabase: "supabase",
  appwrite: "appwrite",
  elasticsearch: "elasticsearch",
  storybook: "storybook",
  threejs: "threejs",
  blender: "blender",
  canva: "canva",
  notion: "notion",
  slack: "slack",
  trello: "trello",
  jira: "jira",
  asana: "asana",
  monday: "monday",
  zoom: "zoom",
  miro: "miro",
  dropbox: "dropbox",
  onedrive: "onedrive",
  firebasehosting: "firebase",
  cloudflare: "cloudflare",
  supabaseauth: "supabase",
  planetScale: "planetscale",
};

// export const interviewer: CreateAssistantDTO = {
//   name: "Interviewer",
//   firstMessage:
//     "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "sarah",
//     stability: 0.4,
//     similarityBoost: 0.8,
//     speed: 0.9,
//     style: 0.5,
//     useSpeakerBoost: true,
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

// Interview Guidelines:
// Follow the structured question flow:
// {{questions}}

// Engage naturally & react appropriately:
// Listen actively to responses and acknowledge them before moving forward.
// Ask brief follow-up questions if a response is vague or requires more detail.
// Keep the conversation flowing smoothly while maintaining control.
// Be professional, yet warm and welcoming:

// Use official yet friendly language.
// Keep responses concise and to the point (like in a real voice interview).
// Avoid robotic phrasing—sound natural and conversational.
// Answer the candidate’s questions professionally:

// If asked about the role, company, or expectations, provide a clear and relevant answer.
// If unsure, redirect the candidate to HR for more details.

// Conclude the interview properly:
// Thank the candidate for their time.
// Inform them that the company will reach out soon with feedback.
// End the conversation on a polite and positive note.

// - Be sure to be professional and polite.
// - Keep all your responses short and simple. Use official language, but be kind and welcoming.
// - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//       },
//     ],
//   },
// };

// export const feedbackSchema = z.object({
//   totalScore: z.number(),
//   categoryScores: z.tuple([
//     z.object({
//       name: z.literal("Communication Skills"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Technical Knowledge"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Problem Solving"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Cultural Fit"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Confidence and Clarity"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//   ]),
//   strengths: z.array(z.string()),
//   areasForImprovement: z.array(z.string()),
//   finalAssessment: z.string(),
// });

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    companyName: "Facebook",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    companyName: "Google",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: "3",
    companyName: "tcs",
    userId: "user1",
    role: "Devops Engineer",
    type: "Mixed",
    techstack: ["vue", "vercel", "postgres", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: "4",
    companyName: "wipro",
    userId: "user1",
    role: "Cyber Security",
    type: "Mixed",
    techstack: ["netlify", "firebase", "angular", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

export const generator = {
  name: "InterviewPrep",
  nodes: [
    {
      name: "start",
      type: "conversation",
      isStart: true,
      metadata: {
        position: {
          x: -278.4774475097656,
          y: -45.87525939941406,
        },
      },
      prompt:
        "Greet the user with username as {{userName}} and help them create a new personalized ai interview",
      voice: {
        model: "aura-2",
        voiceId: "theia",
        provider: "deepgram",
      },
      variableExtractionPlan: {
        output: [
          {
            title: "type",
            description: "What type of the interview should it be? ",
            type: "string",
            enum: [],
          },
          {
            title: "role",
            description:
              "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX?",
            type: "string",
            enum: [],
          },
          {
            title: "level",
            description: "The job experience level.",
            type: "string",
            enum: [],
          },
          {
            title: "techstack",
            description:
              "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…",
            type: "string",
            enum: [],
          },
          {
            title: "amount",
            description: " How many questions would you like to generate?",
            type: "number",
            enum: [],
          },
          {
            title: "companyName",
            description: "Which company are you targeting for?",
            type: "string",
            enum: [],
          },
        ],
      },
      messagePlan: {
        firstMessage: "Hey there!",
      },
    },
    {
      name: "conversation_1",
      type: "conversation",
      metadata: {
        position: {
          x: 33.522552490234375,
          y: 270.2120056152344,
        },
      },
      prompt:
        "Thank the user for their cooperation and assure them the interview will be generated shortly.",
      voice: {
        model: "aura-2",
        voiceId: "theia",
        provider: "deepgram",
        mipOptOut: false,
      },
      variableExtractionPlan: {
        output: [],
      },
    },
    {
      name: "hangup_1747512399374",
      type: "hangup",
      metadata: {
        position: {
          x: 790.9724652759669,
          y: 1000.5158808491688,
        },
      },
      messagePlan: {
        firstMessage: "Alright, have a nice day!",
      },
    },
    {
      name: "apiRequest_1747809152762",
      type: "apiRequest",
      metadata: {
        position: {
          x: 259.52255249023443,
          y: 488.2120056152344,
        },
      },
      method: "POST",
      url: "https://cerebrumai.vercel.app/api/vapi/generate",
      headers: {
        type: "object",
        properties: {},
      },
      body: {
        type: "object",
        properties: {
          role: {
            type: "string",
            description: "",
            value: "{{role}}",
          },
          companyName: {
            type: "string",
            description: "",
            value: "{{companyName}}",
          },
          type: {
            type: "string",
            description: "",
            value: "{{type}}",
          },
          level: {
            type: "string",
            description: "",
            value: "{{level}}",
          },
          techstack: {
            type: "string",
            description: "",
            value: "{{techstack}}",
          },
          amount: {
            type: "number",
            description: "",
            value: "{{amount}}",
          },
          userid: {
            type: "string",
            description: "",
            value: "{{userid}}",
          },
        },
      },
      output: {
        type: "object",
        properties: {},
      },
      mode: "blocking",
      hooks: [],
    },
    {
      name: "conversation_1747809383338",
      type: "conversation",
      metadata: {
        position: {
          x: 472.5225524902344,
          y: 760.2120056152344,
        },
      },
      prompt:
        "thank the user for their time, patience and inform them that the interview has been generated successfully.",
      voice: {
        provider: "deepgram",
        voiceId: "theia",
        model: "aura-2",
      },
    },
  ],
  edges: [
    {
      from: "start",
      to: "conversation_1",
      condition: {
        type: "ai",
        prompt: "If user provides all the require variables",
      },
    },
    {
      from: "conversation_1",
      to: "apiRequest_1747809152762",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
    {
      from: "apiRequest_1747809152762",
      to: "conversation_1747809383338",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
    {
      from: "conversation_1747809383338",
      to: "hangup_1747512399374",
      condition: {
        type: "ai",
        prompt: "",
      },
    },
  ],
  clientMessages: [],
  serverMessages: [],
};
