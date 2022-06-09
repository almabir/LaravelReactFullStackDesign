import axios from 'axios';
import React, { Component } from 'react'
import ViewModal from './Modal/ViewModal'



export default class TableActionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        }
    }
    getEmployeeDetails = (id) => {
        axios.post('get/individual/employee/details',{
            employeeId: id,
        }).then((response)=>{
            this.setState({
                currentEmployeeName: response.data.name,
                currentEmployeeSalary: response.data.salary,
            });
        });
    }

    render() {
        return (
            <div className='btn btn-group'>
                <button data-bs-toggle="modal"
                    onClick={ () => {this.getEmployeeDetails(this.props.eachRowId)}}
                    data-bs-target={"#modalView"+this.props.eachRowId}
                    type="button"
                    className='btn btn-primary'>
                    View 
                </button>
                <ViewModal modalId={this.props.eachRowId} employeeData={ this.state }/>
                <button  data-bs-toggle="modal" data-bs-target="#modalUpdate" type="button" className='btn btn-info'>Update</button>
                <button data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" className='btn btn-danger'>Delete</button>
            </div>
        )
    }
}
