import Auth from '@/pages/auth/routes'
import Home from '@/pages/home/routes'
import Spring from '@/pages/springs/routes'
// import Logs from '@/pages/logs/routes'

const routes = [
  ...Home,
  ...Auth,
  ...Spring
  // ...Logs
]

export default routes
