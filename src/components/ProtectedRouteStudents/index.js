import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRouteStudents = props => {
  const studentsToken = Cookies.get('StudentsToken')

    console.log(studentsToken)

  if (studentsToken === undefined) {
    return <Redirect to="/" />
  }
    return <Route {...props} />
  
 
}

export default ProtectedRouteStudents