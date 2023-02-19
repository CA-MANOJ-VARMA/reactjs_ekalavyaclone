import {Component} from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom'
import LoginPage from './components/LoginPage' 
import StudentsPage from './components/StudentsPage' 
import TeachersPage from './components/TeachersPage' 
import ProtectedRouteStudents from './components/ProtectedRouteStudents'
import ProtectedRouteTeachers from './components/ProtectedRouteTeachers'
import './App.css';

class App extends Component {
  state= { isDarkThemeActive:''}
  
  
  onChangeTheme = pdfFile => {
    console.log(pdfFile)
    this.setState({isDarkThemeActive:pdfFile})
  }

  render(){
    const {isDarkThemeActive} = this.state
    console.log(isDarkThemeActive)
    return(
      

      <BrowserRouter>
      
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <ProtectedRouteStudents exact path='/studentspage' component={StudentsPage}/>
        <ProtectedRouteTeachers exact path='/teacherspage' component={TeachersPage}/>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App
