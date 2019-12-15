import Auth from '@/pages/auth/routes'
import Home from '@/pages/home/routes'
// import Logs from '@/pages/logs/routes'

const routes = [
  ...Home,
  ...Auth
  // ...Logs
]

export default routes
