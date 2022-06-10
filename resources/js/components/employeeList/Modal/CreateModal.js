import axios from 'axios';
import React, { Component } from 'react'
import { toast } from 'react-toastify';

export default class CreateModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    createEmployeeData = () => {
        axios.post('create/employee/data',{
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(()=>{
            toast.success("Employee Created Successfully");
            setTimeout(()=>{
                location.reload();
            },  2000);
        });
    }

    getEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }
    getEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }
    render() {
        return (
            <>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                               <form className='form'>
                                <div className='form-group'>
                                    <input onChange={this.getEmployeeName} 
                                    type="text" className='form-control' 
                                    placeholder='Input Employee Name'
                                    value={this.state.employeeName ?? ""}/>
                                    <br/>
                                    <input onChange={this.getEmployeeSalary} 
                                    type="text" className='form-control' 
                                    placeholder='Input Employee Salary'
                                    value={this.state.employeeSalary ?? ""}/>
                                </div>
                               </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" 
                                className="btn btn-primary"
                                onClick={this.createEmployeeData}>Create Employee</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
