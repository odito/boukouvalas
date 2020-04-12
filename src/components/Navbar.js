import React, { Component } from 'react';

import './Navbar.css';
import logo from '../img/logo.png'
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';


export default class Navbar extends Component {

    render() {
        return (
            <ProductConsumer>

    {value=>{
        const {Links, SubLinks, isOpen, open, headerShow, handleToggle, closeLink, closeSub}=value;
        return(
            <nav className={headerShow ?'scrollNav':''}>
            <div className="logoBtn">
                <div className="logo">
                    <Link to="/" className="logoA"  ><img src={logo} alt="" className="logoImg" />
                    </Link>
                </div>
                <div className={isOpen ?"btn actBars":'btn undefined'}
                onClick={handleToggle}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <div className={isOpen?"fix":'undefined'} >
              <ul className={isOpen ?" links openLinks":"links undefined"}>
                  {/* mapping menu links dinamically */}
                    {
                    Links.map((Links=>{
                    return  <li key={Links.id}><Link to={Links.path}  onClick={closeLink}>{Links.link}</Link></li>
                    }))
                   }

          <li onClick={closeSub}><Link to="#">Υπηρεσιες <span><i className="fas fa-angle-down"></i></span></Link> 

            <ul className={open?"submenu ":' newSubmenu'} onClick={this.loseLink} >
                   
                   {/* mapping submenu links dinamically */}
                    {SubLinks.map((SubLinks=>{
                      return <li key={SubLinks.id}><Link to={SubLinks.subPath}  onClick={closeLink}>{SubLinks.subMenuLink}</Link></li>
                    }))}

             </ul>
                    </li>
                    <li><Link to="/επικοινωνια" onClick={closeLink}>Επικοινωνία</Link></li>
                </ul>
            </div>
        </nav>
        )
    }

    }
         </ProductConsumer>
    
        )
    }
}
