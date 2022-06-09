import React, { Component } from 'react'

export default class ViewModal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <div className="modal fade" id={"modalView"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Employee Name: <strong>{this.props.employeeData.currentEmployeeName}</strong> 
                                <br/>
                                Employee Salary: <strong>{this.props.employeeData.currentEmployeeSalary}</strong>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
