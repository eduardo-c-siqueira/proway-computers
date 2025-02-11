
export default {
  basePath: 'https://eduardo-c-siqueira.github.io/proway-computers',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
