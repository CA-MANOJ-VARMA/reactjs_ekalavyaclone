import {Component} from 'react'
import { AiOutlinePoweroff } from "react-icons/ai";

import Cookies from 'js-cookie'
import './index.css'

class StudentsPage extends Component{

    state = {pdfFile:'',uploadedFiles:[]}

    logoutFunction = () =>{
        const {history} = this.props
        localStorage.removeItem('items')
        Cookies.remove('StudentsToken')
        history.replace('/')
    }


     pdfUploaded=(e)=>{
        const {uploadedFiles} = this.state
        const fileType=['application/pdf'];
        let selectedFile=e.target.files[0];
        const fileName = e.target.files[0].name
        if(selectedFile){
          if(selectedFile&&fileType.includes(selectedFile.type)){
            let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) =>{
                   localStorage.setItem('items',JSON.stringify(e.target.result))
                    this.setState({pdfFile: e.target.result,uploadedFiles:uploadedFiles.push(fileName) })

                }
                
          }
        }
      }


  
    render(){
        const {uploadedFiles} = this.state
       
         
                

        return(
            <div className='css-studentspage-bg-container'>
                <nav className='css-nav-container'>
                    <ul className='css-ul-container'>
                        <li>
                            Students Page
                        </li>
                        <li className='css-logout-container'>
                            <p>Welcome student</p>
                            <button className='css-logout-button-itself' onClick={this.logoutFunction}><p>logout</p><AiOutlinePoweroff /></button>
                        </li>
                    </ul>
                </nav>
                <div className='css-studetspage-body-container'>
                    <div className='css-marks-container'>
                    <div className='css-total-score-container'>
                             <p>Papers Uploaded </p>
                             <p  className='css-score-para' >5</p>
                            </div>
                            <div className='css-total-score-container'>
                             <p>Papers Corrected </p>
                             <p  className='css-score-para' >1</p>
                            </div>
                            <div className='css-total-score-container'>
                             <p>Papers Remained </p>
                             <p  className='css-score-para' >5</p>
                            </div>
                    </div>
                    <div className='css-upload-container'>
                        
                        <div className='css-input-file-container'>
                        <input type='file' className='css-file-input-itself' required onChange={this.pdfUploaded}/>
                        </div>
                        {localStorage.getItem('items')===null?(<h1>No file Uploaded</h1>):(<h1> file Uploaded Refresh Teachers Portal</h1>)}
{/*                        
                        <button onClick={this.pdfUploaded}className='css-upload-button'>Upload </button> */}
                    </div>
                </div>
            </div>
        
        )
    }
}

export default StudentsPage



// class PdfContainer extends Component () {
//     render(){
//         return(
//             <div>Hello</div>
//         )
//     }
// }

// export {PdfContainer}

// export const PdfContainer = pdfFile;