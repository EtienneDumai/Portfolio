
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4991, hash: 'c6edaf74a6edb8e34f05b67854b0f1778a8300823acc634f845b116fcf66c292', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'a6f24d65422b7dc55c0a7b07115a6e8a630572f421180e16bee3d13e7af59720', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5193, hash: 'd638dc5ef232fef42e029b732e6d14ff77f390b9b6da4e39276729842cad6083', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2O7XF2IJ.css': {size: 88673, hash: 'vMKB8Zxuffs', text: () => import('./assets-chunks/styles-2O7XF2IJ_css.mjs').then(m => m.default)}
  },
};
