import {Component} from 'react'
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { AiOutlinePoweroff,AiFillEdit } from "react-icons/ai";
import { TiTick, TiTimes, TiEye, TiRefresh } from "react-icons/ti";

import Cookies from 'js-cookie'
import './index.css'

class TeachersPage extends Component{
    state={pages:''}
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({pages:numPages})
      }


    //    defaultLayoutPluginInstance = () => defaultLayoutPlugin();
      logoutFunction = () =>{
        const {history} = this.props
        Cookies.remove('TeachersToken')
        history.replace('/')
    }

    defaultLayoutPluginInstance =()=> defaultLayoutPlugin();
    render(){
        
        const {pages} = this.state
        const  items = JSON.parse(localStorage.getItem('items'));
        console.log(items)
      
        return(
            <div>
                <nav className='css-nav-container'>
                    <ul className='css-ul-container'>
                        <li>
                            <p>Teachers Page</p>
                            
                        </li>
                        <li className='css-teachers-id-subject-container'>
                        <p>ID:2365 </p>
                            <p>Subject:Demo1</p>
                        </li>
                        <li className='css-teachers-id-subject-container'>
                        <p>Time Taken:00:05:36</p>
                        </li>
                        <li className='css-logout-container'>
                            <p>Welcome student</p>
                            <button className='css-logout-button-itself' onClick={this.logoutFunction}><p>logout</p><AiOutlinePoweroff /></button>
                        </li>
                    </ul>
                </nav>
                <div className='css-display-container'>
                    <div className='css-marks-display-teachers-container'>
                        <div className='css-marks-button-teachers-container'>
                            <button className='button-17'>0</button>
                            <button className='button-17'>1/2</button>
                            <button className='button-17'>1</button>
                            <button className='button-17'>2</button>
                            <button className='button-17'>3</button>
                            <button className='button-17'>4</button>
                            <button className='button-17'>5</button>
                            <button className='button-17'>6</button>
                            <button className='button-17'>7</button>
                            <button className='button-17'>8</button>
                            <button className='button-17'>9</button>
                            <button className='button-17'>10</button>
                        </div>
                        <div className='css-marks-button-teachers-container'>
                            <button className='button-67'><TiTick /></button>
                            <button className='button-67'><TiTimes /></button>
                            <button className='button-67'><TiEye /></button>
                            <button className='button-67'><TiRefresh /></button>
                            {/* <button className='button-67'><RxText /></button> */}
                            <button className='button-67'><AiFillEdit /></button>
                        </div>
                    </div>
                    <div className='css-paper-display-teachers-container'>
                    <div className='css-questions-visited-container'>
                        <div className='css-questions-para-container'>
                            <h3>Questions Visited</h3>
                        </div>
                        <div>
                            <h4>1,3, 6, 9, 11, 15, 20</h4>
                        </div>
                    </div>
                    <div className='css-pdf-viewer-container'>
                    {items===null?(<h1>Upload a pdf</h1>):(<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                    <Viewer fileUrl={items} 
                    plugins={[this.defaultLayoutPluginInstance]} 
                    />
                    </Worker></>)
        }
                    </div>
                    
                    </div>
                    <div className='css-right-part-teachers-container'>  
                        <div className='css-right-part-Questions-container'>  
                            <div className='button-4'>
                             <p>Question 1 </p>
                             <p  className='css-score-para' >4/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 2 </p>
                                <p  className='css-score-para' >5/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 3 </p>
                                <p  className='css-score-para' >3/5</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 4 </p>
                                <p  className='css-score-para' >8/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 5 </p>
                                <p  className='css-score-para' >8/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 6 </p>
                                <p  className='css-score-para' >8/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 7 </p>
                                <p  className='css-score-para' >8/10</p>
                            </div>
                            <div className='button-4'>
                                <p>Question 8</p>
                                <p  className='css-score-para' >8/10</p>
                            </div>
                        </div>
                        <div className='css-right-part-total-score-container'>  
                            <div className='css-total-score-container'>
                             <p>Total Score </p>
                             <p  className='css-score-para' >52/75</p>
                            </div>   
                            <div className='css-reject-finish-both-container'>
                            <div className='css-reject-container'>
                                <p>Reject </p>
                            </div>
                            <div className='css-finish-container'>
                                <p>Finish </p>
                                
                            </div>
                            </div> 
                        </div>                        
                        <div className='css-Question-text-container'>
                            <p>Question gets display here </p>
                            </div>
                    </div>
            </div>
            </div>
        )
            
      
    }
}


export default TeachersPage