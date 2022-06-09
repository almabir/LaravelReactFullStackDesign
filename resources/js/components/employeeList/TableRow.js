import React, { Component } from 'react'
import TableActionButton from './TableActionButton';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
                <tr>
                    <td>{ this.props.data.id }</td>
                    <td>{ this.props.data.name }</td>
                    <td>{ this.props.data.salary }</td>
                    <td>
                        <TableActionButton eachRowId={ this.props.data.id }/>
                    </td>
                </tr>
            
        )
    }
}
