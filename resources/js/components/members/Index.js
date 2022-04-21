import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRow from "./TableRow";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: [],
        };
    }

    // Lifecycle method
    componentDidMount() {
        this.getMembersList();
    }

    // Get Member List
    getMembersList = () => {
        let self = this;
        axios.get("/get/member/list").then((response) => {
            self.setState({
                members: response.data,
            });
        });
    };

    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                        <th scope="col">Totem</th>
                                        <th scope="col">Telephone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Sex</th>
                                        <th scope="col">Profession</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.members.map((x, i) => {
                                        return <TableRow key={i} data={x} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
