import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import Message from './messages'
import VueHotkey from 'v-hotkey'
import axios from 'axios';
import Toasted from 'vue-toasted';
import vSelect from "vue-select";

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(VueCompositionAPI);
Vue.use(VueI18n);
Vue.use(VueHotkey);
Vue.use(Toasted, { iconPack : 'custom-class' });
Vue.component('multi-select', vSelect);

// get startgg api key (local or instance)
Vue.prototype.$getApikey = function() {
  return localStorage.apikey ? localStorage.apikey : Vue.prototype.$apikey;
}

import './assets/scss/main.scss'

const messages = Message.message;
export const i18n = new VueI18n({
  locale: getBrowserLocale({ countryCodeOnly: true }), // set locale
  fallbackLocale: 'fr',
  messages, // set locale messages
})

new Vue({
  // `vuetify` is a valid root-instance option (vuetify augments Vue's component
  // options types), but that augmentation isn't picked up through the
  // `vuetify/lib/framework` subpath import used in ./plugins/vuetify - cast to
  // avoid pulling in a broader vuetify types investigation for this conversion.
  vuetify,
  i18n,
  render: h => h(App)
} as any).$mount('#app')

export default function getBrowserLocale(options = {}) {
  const defaultOptions = { countryCodeOnly: false }
  const opt = { ...defaultOptions, ...options }
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language
  if (!navigatorLocale) {
    return undefined
  }
  const trimmedLocale = opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()
  return trimmedLocale
}