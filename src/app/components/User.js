import React, { Component } from 'react'

export const User = (props) => {
        return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>User Name : {props.username}</p>
                    </div>
                </div>
            </div>
        );
}