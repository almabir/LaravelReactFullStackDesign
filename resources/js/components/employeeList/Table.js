import React, { useState } from 'react'
import { ReactDOM } from 'react'

function Table() {
    const [employee, getEmployee] = useState();
    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    Employee List From RFC
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table