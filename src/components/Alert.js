import React from 'react'

function Alert(props) {

    // creating a function to capitalize the first letter of the alert type.
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '80px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}

                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.onClose}></button> */}
            </div>}
         </div>
    )
}

export default Alert
