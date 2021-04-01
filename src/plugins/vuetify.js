import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#178CA6',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
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
      generator: 
      {
        primary: '#009688',
        secondary: '#cddc39',
        accent: '#607d8b',
        error: '#f44336',
        warning: '#ffc107',
        info: '#4caf50',
        success: '#8bc34a'
        }
    },
  },
});
