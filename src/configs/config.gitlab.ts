import { Config } from 'git-cms-service';

const kBaseURL = 'https://gitlab.com/api/v4/projects/21279359';

export const config: Config = {
  service: {
    name: 'GitLab',
    baseURL: kBaseURL,
    webBaseURL: 'https://gitlab.com/ez-connect/documentation',
    rest: {
      baseURL: kBaseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        // 'Private-Token': 'blah blah blah',
      },
    },
    authorization: {
      clientId:
        'b47877cbd1266f62248380e8ed04fecd2e58b676bdcb4a604d245291da78e111',
      clientSecret:
        'c9e20578e161e29be4d46c9a340e75e95441492be5e508290127c56c5465495d',
      directUri: 'http://localhost:3000',
    },
    // condition: {
    //   state: 'closed',
    // },
    labels: {
      nav: 'nav',
      header: 'header',
      footer: 'footer',
      toc: 'toc',
      post: 'post',
    },
  },
  router: {
    home: '/',
    auth: '/auth',
  },
};
