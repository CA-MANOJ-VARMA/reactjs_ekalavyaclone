import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRouteStudents = props => {
  const teachersToken = Cookies.get('TeachersToken')

    console.log(teachersToken)

  if (teachersToken === undefined) {
    return <Redirect to="/" />
  }
    return <Route {...props} />
  
 
}

export default ProtectedRouteStudents