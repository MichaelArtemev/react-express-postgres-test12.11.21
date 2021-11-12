import React from "react";
import "./component-Modal.css";

const Modal = ({active, setActive,children}) => {    
    return (
        <div className="container p-4">
            <div className="d-flex align-items-center" >
                <div className={active? "modal active": "modal"} onClick={()=> setActive(false)}>
                    <div className={active? "modal__content active": "modal__content"} onClick={(e)=>{e.stopPropagation()}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;
