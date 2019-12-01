import React from 'react';
import {connect} from 'react-redux';

const Input_Filter = () => {
    return(
        <div className="lg:pl-64 lg:pr-64 w-full flex flex-col flex-col lg:flex-row lg:justify-between">
            <div>
                <input className=" lg:mb-0  mb-6" placeholder="New Todo" type="text"/>
            </div>
            <div>
                <input className="filterButton" placeholder="filter here" type="select"/>
            </div>
        </div>
    )
}
export default Input_Filter
