import Auth from '@/pages/auth/routes'
import Home from '@/pages/home/routes'
import Spring from '@/pages/springs/routes'
import Record from '@/pages/records/routes'
import Message from '@/pages/messages/routes'
import Audit from '@/pages/audits/routes'
// import Logs from '@/pages/logs/routes'

const routes = [
  ...Home,
  ...Auth,
  ...Spring,
  ...Record,
  ...Message,
  ...Audit
  // ...Logs
]

export default routes
