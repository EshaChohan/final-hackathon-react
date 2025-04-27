import { Outlet, Link } from "react-router-dom";
import '../App.css'
import logo from '../Assets/logo.png'
function Main(){
return(
    <>
    <div className="container">
        <div style={{marginLeft:'20px'}}> <img src={logo} style={{height:'120px',width:'120px'}}/>
        <span className='company-name'>
          TaskNest</span>
        </div>
        <div style={{textAlign:'center', marginTop:'-20px'}}>

        <h2>Welcome To Our<br/> Task Tracking Management System
        </h2>
        <p>You can asign your tasks here.<br/> With details & get updated about your tasks weather it is in to do , in progress or in done stage,
          <br/>
          You can also edit and delete your tasks at any time
        </p>
        <button><Link to="/signup" style={{color: 'rgb(8, 34, 34)',textDecoration:'none',}}>Get Started</Link></button>
        <Outlet/>
        </div>
        </div>
        </>
)
}
export default Main