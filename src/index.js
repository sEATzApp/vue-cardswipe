import { default as cardSwipe } from './cardswipe.js';

const VueCardSwipe = {
  install(app, opts) {
    // provide plugin to Vue
    app.config.globalProperties.$cardSwipe = cardSwipe;
  }
}

export default VueCardSwipe;
