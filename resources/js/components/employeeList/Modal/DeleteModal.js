import axios from 'axios';
import React, { Component } from 'react'
import { toast } from 'react-toastify';

export default class DeleteModal extends Component {
    constructor(props){
        super(props);
    }

    deleteEmployeeData = (id)=>{
        axios.delete('delete/employee/data/' + this.props.modalId).then( ()=> {
            toast.warn("Employee Deleted Successfully");
            setTimeout(() => {
                location.reload();
            }, 1500);
        });
    }
  render() {
    return (
      <>
      <div className="modal fade" id={"modalDelete" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h3>Are You Sure to Delete this Employee? </h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit"
                                    onClick={()=>{this.deleteEmployeeData(this.props.modalId)}}
                                    className="btn btn-danger">
                                    Confirm Delete 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
      </>
    )
  }
}
