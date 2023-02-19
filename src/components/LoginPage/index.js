import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component{
    state={email:'',password:'',typeofuser:'student'}

    userTypeChangeFunction = (event) =>{
        const typeofuser = event.target.value
        console.log(typeofuser)
        this.setState({typeofuser})
    }

    onChangeEmail = (event)=>{
        const email=event.target.value
        this.setState({email})
    }

    onChangePassword = (event)=>{
        const password=event.target.value
        this.setState({password})
    }



    formSubmitFunction = (event) =>{
        const {email,password,typeofuser} = this.state
        event.preventDefault()
       
        if (email==='user1@student.com' && password==='123456789' && typeofuser==='student') {
            const {history} = this.props
            console.log(this.props)
            console.log('correct Details');
            // historyReplace()
            const studentsTokenValue = 'studentLoggedIN'
            Cookies.set('StudentsToken', studentsTokenValue, {expires: 30})
           history.replace('./studentspage')
        }
        if (email==='user1@teacher.com' && password==='123456789' && typeofuser==='teacher') {
            const {history} = this.props
            console.log(this.props)
            console.log('correct Details');
            // historyReplace()
           const teachersTokenValue = 'teacherLoggedIN'
           Cookies.set('TeachersToken', teachersTokenValue, {expires: 30})
           history.replace('./teacherspage')
        }
    }

    render(){
        
        const {email,password} = this.state

     
        return(
            <div className='css-loginpage-bg-container'>
            <form className='css-form-container' type='submit' >
                <div className='css-email-container'>
                    <label className='css-label-itself'>Email</label>
                    <input type='email' placeholder='Enter Email Here' className='css-input-itself'
                    value={email}
                    onChange={this.onChangeEmail}/>
                </div>
                <div className='css-email-container'>
                    <label className='css-label-itself'>Password</label>
                    <input type='password' placeholder='Enter password Here' className='css-input-itself'
                     value={password}
                    onChange={this.onChangePassword}/>
                </div>
                <div className='css-email-container'>
                    <select className='css-select-login-container' onChange={this.userTypeChangeFunction}>
                        <option className='css-option-itself' value='student'>Student</option>
                        <option className='css-option-itself' value='teacher'>Teacher</option>
                    </select>
                </div>
                <div className='css-email-container'>
                    <button type='button' className='css-login-button-itself' onClick={this.formSubmitFunction}>Login</button>
                </div>
            </form>
            
            </div>
        )
        }
        
    
    
}

export default LoginPage