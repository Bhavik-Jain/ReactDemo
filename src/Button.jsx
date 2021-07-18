import React from 'react';

function Button(props){
    return(
        <>
            <div className="container">
                <div className="card">
                    {props.buttonName}
                </div>
            </div>
        </>
    )
};

export default Button;