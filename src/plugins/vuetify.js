import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#178CA6',
        secondary: '#009688',
        accent: colors.shades.black,
        error: colors.red.accent3,
        gray: '#c3c7c8'
      },
      dark: {
        primary: '#1976D2',
        secondary: '#46f0d0',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#eb01f8',
      },
    },
  },
});
