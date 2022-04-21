import React, { Component } from "react";

export default class ViewModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className="modal fade"
                id={"viewModal" + this.props.modalId}
                tabIndex="-1"
                aria-labelledby="viewModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="viewModalLabel">
                                RASAL Member Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Firstname</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentFirstname
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Lastname</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentLastname
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Totem</td>
                                        <th scope="row">
                                            {this.props.memberData.currentTotem}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentGender
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Nationality</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentNationality
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>ID/Passport</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentIdPassport
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentDateOfBirth
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Place of Birth</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentPlaceOfBirth
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Scout Promise Year</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentPromiseYear
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Scout Totem Year</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentTotemYear
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Scout Unit Affiliation</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentUnitAffiliation
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Country of Residence</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentResidence
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentLocation
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <th scope="row">
                                            {this.props.memberData.currentEmail}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Telephone</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentTelephone
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Education</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentEducation
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Profession</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentProfession
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Photo</td>
                                        <th scope="row">
                                            {this.props.memberData.currentPhoto}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Biography</td>
                                        <th scope="row">
                                            {this.props.memberData.currentBio}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Date of Joining</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentJoinedAt
                                            }
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <th scope="row">
                                            {
                                                this.props.memberData
                                                    .currentStatus
                                            }
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
