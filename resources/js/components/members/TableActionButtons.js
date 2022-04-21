import React, { Component } from "react";
import ViewModal from "./modals/ViewModal";

export default class TableActionButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentFirstname: null,
            currentLastname: null,
            currentTotem: null,
            currentGender: null,
            currentNationality: null,
            currentIdPassport: null,
            currentDateOfBirth: null,
            currentPlaceOfBirth: null,
            currentPromiseYear: null,
            currentTotemYear: null,
            currentUnitAffiliation: null,
            currentResidence: null,
            currentLocation: null,
            currentEmail: null,
            currentTelephone: null,
            currentEducation: null,
            currentProfession: null,
            currentPhoto: null,
            currentBio: null,
            currentJoinedAt: null,
            currentStatus: null,
        };
    }

    // Getting Individual Member data
    getMemberDetails = (id) => {
        axios
            .post("/get/member/details", {
                memberId: id,
            })
            .then((response) => {
                this.setState({
                    currentFirstname: response.data.firstname,
                    currentLastname: response.data.lastname,
                    currentTotem: response.data.totem,
                    currentGender: response.data.gender,
                    currentNationality: response.data.nationality,
                    currentIdPassport: response.data.id_pp,
                    currentDateOfBirth: response.data.date_of_birth,
                    currentPlaceOfBirth: response.data.place_of_birth,
                    currentPromiseYear: response.data.promise_year,
                    currentTotemYear: response.data.totem_year,
                    currentUnitAffiliation: response.data.unit_affiliation,
                    currentResidence: response.data.residence,
                    currentLocation: response.data.location,
                    currentEmail: response.data.email,
                    currentTelephone: response.data.telephone,
                    currentEducation: response.data.education,
                    currentProfession: response.data.profession,
                    currentPhoto: response.data.photo,
                    currentBio: response.data.bio,
                    currentJoinedAt: response.data.joined_at,
                    currentStatus: response.data.status,
                });
            });
    };

    render() {
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewModal"+this.props.eachRowId}
                    onClick={() => {
                        this.getMemberDetails(this.props.eachRowId);
                    }}
                >
                    View
                </button>
                <ViewModal modalId={this.props.eachRowId} memberData={this.state} />


                <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Update
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Delete
                </button>
            </div>
        );
    }
}
