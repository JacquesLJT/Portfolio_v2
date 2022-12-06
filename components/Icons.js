import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMapLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(faFilePdf, faGithub, faLinkedin, faTwitter, faEnvelope, faMapLocationDot, faCheck, faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default FontAwesomeIcon