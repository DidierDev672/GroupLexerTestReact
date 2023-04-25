import React from "react";
import "../styles/modal.css";

const Modal = ({ isOpen, onClose,handleData,  children }) => {
    if(!isOpen) return null;

    return(
        <React.Fragment>
            <div className="modal-overlay">
                <div className="modal-content">
                    { children }
                    <button type="button" className="btn-update" onClick={handleData}> Actualizar </button>
                    <br />
                    <button type="button" className="btn-shut" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default  Modal;