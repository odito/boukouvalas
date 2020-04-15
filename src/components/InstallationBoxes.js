import React from 'react'

export default function InstallationBoxes(props) {
    const {item}=props;
    return (
     
        
     <div className="single-boxItem" >
            <div className="single-icon">
                <i className={item.icon}></i>
            </div>

            <div className="single-texts">
                <h3>{item.title}</h3>
    <p>{item.paragraph}<b>{item.boltText}</b> </p>
            </div>
    </div>
        
    )
}
