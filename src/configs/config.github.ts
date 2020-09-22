import { Config } from 'git-cms-service';

const kBaseURL = 'https://api.github.com/repos/ez-connect/documentation';

export const config: Config = {
  service: {
    name: 'GitHub',
    baseURL: kBaseURL,
    webBaseURL: '',
    rest: {
      baseURL: kBaseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token 7605d0407d6cffa76e024a178b1fe9cf1d479ec0',
      },
    },
    authorization: {
      clientId: '1018088c847a3f5328f5',
      clientSecret: '490855f69ab145d378ed2e0612908e6109902694',
      directUri: 'http://localhost:3000/auth',
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
