import {Navigate, Route} from 'react-router-dom'

import Cookies from 'js-cookies'

const ProtectedRouter = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/Auth" />
  }

  return <Route {...props} />
}

export default ProtectedRouter