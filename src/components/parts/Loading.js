import React from 'react';

const Loading = () => 
{
    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
            <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">
                    Učitavanje...
                </span>
            </div>
        </div>
    )
};

export default Loading;