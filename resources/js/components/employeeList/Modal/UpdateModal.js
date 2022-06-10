import axios from 'axios';
import React, { Component } from 'react'

export default class UpdateModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }
        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null;
        }
        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null;
        }
        if (current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }
        //console.log(employeeUpdate)
        return employeeUpdate;
     }

    updateEmployeeData = () => {
        axios.post('update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then( (response) =>{
            location.reload();
        });

    }

    render() {
        return (
            <>
                <div className="modal fade" id={"modalUpdate" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    <div className='form-group'>
                                        <input className='form-control'
                                            placeholder='Input Update Name'
                                            id="employeeName"
                                            onChange={this.inputEmployeeName}
                                            value={this.state.employeeName ?? ""}                                            
                                            type="text" />
                                        <br />
                                        <input className='form-control'
                                            id="employeeSalary"
                                            placeholder='Input Update Salary'
                                            onChange={this.inputEmployeeSalary}
                                            value={this.state.employeeSalary ?? ""}
                                            type="text" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button"
                                    onClick={this.updateEmployeeData}
                                    className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
