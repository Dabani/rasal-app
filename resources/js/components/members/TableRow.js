import React, { Component } from "react";
import TableActionButtons from "./TableActionButtons";

export default class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr key={this.props.data.id}>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.firstname}</td>
                <td>{this.props.data.lastname}</td>
                <td>{this.props.data.totem}</td>
                <td>{this.props.data.telephone}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.gender}</td>
                <td>{this.props.data.profession}</td>
                <td>{this.props.data.location}</td>
                <td>
                    <TableActionButtons eachRowId={this.props.data.id} />
                </td>
            </tr>
        );
    }
}
