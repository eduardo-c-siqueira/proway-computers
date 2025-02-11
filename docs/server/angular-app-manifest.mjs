
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://eduardo-c-siqueira.github.io/proway-computers/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/https://eduardo-c-siqueira.github.io/proway-computers/produtos",
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JBSLDO5P.js",
      "chunk-TCNXGT47.js"
    ],
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers/produtos"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JBSLDO5P.js",
      "chunk-TCNXGT47.js"
    ],
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers/produtos/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IFMDHTIB.js",
      "chunk-TCNXGT47.js"
    ],
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers/carrinho"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R6O43PAG.js",
      "chunk-TCNXGT47.js"
    ],
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers/contato"
  },
  {
    "renderMode": 0,
    "route": "/https:/eduardo-c-siqueira.github.io/proway-computers/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24258, hash: '7a54d10a7d24f6fafabf769fda61cc74d1e09afb52af287f9e6344fe60cd1f50', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17501, hash: 'c0491dc3fcbc3a27dd1a78adbd5816e43a2cf86c3b22b5a8419afba1905dceb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MUOOWOUW.css': {size: 8264, hash: 'rwvspWAbq4g', text: () => import('./assets-chunks/styles-MUOOWOUW_css.mjs').then(m => m.default)}
  },
};
