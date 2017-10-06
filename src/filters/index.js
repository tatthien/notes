import Vue from 'vue'
import * as dateFns from 'date-fns'
Vue.filter('formatDate', (value) => {
  return dateFns.format(value, 'MMM DD, YYYY')
})
