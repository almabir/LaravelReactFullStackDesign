import axios from 'axios';
import React, { Component } from 'react'
import ViewModal from './Modal/ViewModal'



export default class TableActionButton extends Component {
    constructor(props) {
        super(props);
    }
    getEmployeeDetails = (id) => {
        axios.post('get/individual/employee/details',{
            employeeId: id,
        }).then((response)=>{
            console.log(response.data);
        });
    }
    Alertt(){
        console.log("Hi")
    }
    render() {
        return (
            <div className='btn btn-group'>
                <button data-bs-toggle="modal"
                    onClick={ () => {this.getEmployeeDetails(this.props.eachRowId)}}
                    data-bs-target="#modalView"
                    type="button"
                    className='btn btn-primary'>
                    View 
                </button>
                <ViewModal modalId={this.props.eachRowId} />
                <button  data-bs-toggle="modal" data-bs-target="#modalUpdate" type="button" className='btn btn-info'>Update</button>
                <button data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" className='btn btn-danger'>Delete</button>
            </div>
        )
    }
}
