import axios from 'axios';
import React, { Component } from 'react';
import Table from './Table';
import TableRow from './TableRow'
import { ToastContainer, toast } from 'react-toastify';

export default class TableClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }

    }

    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        let self = this;
        axios.get('get/employee/list').then(function (response) {
            self.setState({
                employees: response.data,
            })
        })
    }


    render() {
        return (
            <div>
                <ToastContainer/>
                <div className='card'>
                    <div className='card-header'>
                        Employee List RCC
                    </div>
                    <div className='card-body'>
                        <table border="1" className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(function(data, index){
                                        return <TableRow key={index} data={data} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
