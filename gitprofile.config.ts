// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dhtjddls', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'challengebackgroup21/MovieWiki', 'CodingOnRollingPaper/RollingPaper','kdt3rdMyhalf/myhalf',
          'dhtjddls/lunchRecommend_chromeExtension'
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MovieWiki',
          description:
            '영화 위키피디아 문서 형상관리 서비스',
          imageUrl:
            'https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb78890b5-f0ce-49eb-8c1c-075426099788%2Fmwmain.png?table=block&id=f3dd94f7-a8bf-4da7-98fc-20671e7180df&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1730&userId=&cache=v2',
          link: 'https://teamsparta.notion.site/MovieWiki-21-dbc8f76619b74d918b7721ebaf8c95ed',
        },
        {
          title: '마음푸쉬',
          description:
            '서로 롤링페이퍼를 통해 마음을 나누기 위해 시작한 나만의 롤링페이퍼 서비스'
            ,
          imageUrl:
            'https://wood-art-566.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4cf110f4-f6ec-494b-a999-c8ef26c65656%2F%25EB%25A7%2588%25EC%259D%258C%25ED%2591%25B8%25EC%2589%25AC.png?table=block&id=722f22dc-394c-4c27-ba5d-2014b1f5163f&spaceId=4f30aec2-98c0-41cf-9b1d-b34886469f4b&width=580&userId=&cache=v2',
          link: 'https://github.com/CodingOnRollingPaper/RollingPaper',
        },
        {
          title: '반쪽',
          description:
            '나도 강아지! 반려인들을 위한 커뮤니티 서비스 반쪽',
          imageUrl:
            'https://camo.githubusercontent.com/c980addc0095ccac0ca81b6fa247c5059237903e0e2ad7874f11f860d38ebe29/68747470733a2f2f692e6962622e636f2f675651306d5a482f6c6f676f2e706e67',
          link: 'https://github.com/kdt3rdMyhalf/myhalf#readme',
        },
        {
          title: '점메추 (점심 메뉴 추천)',
          description:
            '이게 왜 없지? 라는 생각에 간단하게 만든 점심 메뉴 추천 크롬익스텐션',
          imageUrl:
            'https://lh3.googleusercontent.com/49oiLGao9R97EMGUV8D4qs9n8c_IKPXXGMXlj_P5BrXcEJpRFKW3dSoNTJflWWJNZjpD-UfST2v1kwC7Cs35unPf=s60',
          link: 'https://chromewebstore.google.com/detail/%EC%A0%90%EB%A9%94%EC%B6%94/oaefomeoippfngdifjlhlbomapnggnnk?hl=ko',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of dhtjddls',
    description: '',
    imageURL: '',
  },
  social: {
    // linkedin: 'ariful-alam',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://velog.io/@dhtjddls/posts',
    phone: '010-7720-2647',
    email: 'dhtjddls12@naver.com',
  },
  resume: {
    fileUrl:
      'https://getype.s3.amazonaws.com/getype/1709835100950_ì¤ì±ì¸,BackendDeveloper581838a5d8a04de084538b7362220b9f.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Nest.js',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
  ],
  experiences: [
    {
      company: '데브툴즈',
      position: 'Backend Enginee',
      from: 'January 2024',
      to: 'February 2024',
      companyLink: 'https://devtools.kr/#/',
    },
    {
      company: '이지시큐',
      position: 'Backend Engineer',
      from: 'August 2023',
      to: 'December 2023',
      companyLink: 'http://www.aegisecu.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: '항해 99 백엔드 개발자 과정 수료',
      degree: '',
      from: '2023',
      to: '2023',
    },
    {
      institution: '포스코 코딩온 웹개발자 과정 수료',
      degree: '',
      from: '2022',
      to: '2022',
    },
    {
      institution: '한양대학교 ERICA 한국언어문학 전공',
      degree: '학사',
      from: '2016',
      to: '2022',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and 👍`,

  enablePWA: true,
};

export default CONFIG;
