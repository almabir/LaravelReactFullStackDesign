import React from 'react'
import Table from './employeeList/Table'
import TableClass from './employeeList/TableClass'


function App() {
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-header'>
                                Left Menu
                            </div>
                            <div className='card-body'>
                                Card Body
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <TableClass/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App