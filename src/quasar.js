import Vue from 'vue'

import './styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  Notify,
  Loading,
  QDrawer,
  QBadge,
  QTabPanels,
  QTabPanel,
  QSpinnerHearts,
  Dialog,
  QBtnGroup,
  QDialog,
  ClosePopup,
  QCard,
  QCardSection,
  QCardActions
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { QCard, QCardSection, QCardActions, QSpinnerHearts, QDrawer, QBadge, QTabPanels, QTabPanel, QBtnGroup, QDialog /* not needed if importStrategy is not 'manual' */ },
  directives: { ClosePopup /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Loading,
    Notify,
    Dialog,
    ClosePopup
  }
})
