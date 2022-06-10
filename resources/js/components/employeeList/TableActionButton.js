import axios from 'axios';
import React, { Component } from 'react'
import DeleteModal from './Modal/DeleteModal';
import UpdateModal from './Modal/UpdateModal';
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
        axios.post('get/individual/employee/details', {
            employeeId: id,
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.name,
                currentEmployeeSalary: response.data.salary,
            });
            //console.log(response)
        });

    }

    render() {
        return (
            <div className='btn btn-group'>
                <button data-bs-toggle="modal"
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}
                    data-bs-target={"#modalView" + this.props.eachRowId}
                    type="button"
                    className='btn btn-primary'>
                    View
                </button>
                <ViewModal modalId={this.props.eachRowId} employeeData={this.state} />
                <button data-bs-toggle="modal"
                    data-bs-target={"#modalUpdate" + this.props.eachRowId}
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}
                    type="button"
                    className='btn btn-info'>
                    Update
                </button>
                <UpdateModal modalId={this.props.eachRowId} employeeData={this.state} />
                <button data-bs-toggle="modal"
                    data-bs-target={"#modalDelete" + this.props.eachRowId}
                    type="button"
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}
                    className='btn btn-danger'>
                    Delete
                </button>
                <DeleteModal modalId={this.props.eachRowId} employeeData={this.state} />
            </div>
        )
    }
}
