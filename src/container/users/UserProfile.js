import React, { Component } from 'react';
import {Image, Grid, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMedications, deleteMedication } from '../../redux/modules/medication/actions';
import { getInsurances, deleteInsurance } from '../../redux/modules/insurance/actions';
import { getProviders, deleteProvider } from '../../redux/modules/provider/actions';
import { addMed, editMed, addIns, editIns, addProv, editProv } from "../../redux/modules/form/actions";
import { addingMed, editingMed, addingIns, editingIns, addingProv, editingProv } from "../../redux/modules/form/selectors";

import UserMeds from './UserMeds'
import UserInsurance from './UserInsurance'
import UserProviders from './UserProviders'

import { providersSelector, medicationsSelector, insurancesSelector } from '../../redux/selectors';

class UserProfile extends Component {
    constructor(props){
        super(props);
    }

    toggleCreateMeds = () => {
        this.props.addMed(!this.props.addingMed)
    }
    toggleCreateIns = () => {
        this.props.addIns(!this.props.addingIns)
    }
    toggleCreateProv = () => {
        this.props.addProv(!this.props.addingProv)
    }

    toggleEditMeds = (medication) => {
        this.props.editMed(medication.id)
        this.props.addMed(false)
    }

    toggleEditIns = (insurance) => {
        this.props.editIns(insurance.id)
        this.props.addIns(false)
    }

    toggleEditProv = (provider) => {
        this.props.editProv(provider.id)
        this.props.addProv(false)
    }

    handleDeleteMed = (medication) => {
        this.props.deleteMedication(medication)
    }

    handleDeleteIns = (insurance) => {
        this.props.deleteInsurance(insurance)
    }

    handleDeleteProv = (provider) => {
        this.props.deleteProvider(provider)
    }

    componentDidMount() {
        this.props.getMedications()
        this.props.getInsurances()
        this.props.getProviders()
    }

    render() {
        return(
            <div className="container">
                <Grid>
                    <Col md={4}>
                    </Col>
                    <Col md={8}>
                        <h1>{this.props.user.name}</h1>

                        <UserMeds
                            user={this.props.user}
                            medications={this.props.medications}
                            addMed={this.toggleCreateMeds}
                            editMed={this.toggleEditMeds}

                            isAddMed={this.props.addingMed}
                            selectedMed={this.props.editingMed}
                            deleteMed={this.handleDeleteMed}/>

                        <UserInsurance
                            insurances={this.props.insurances}
                            addIns={this.toggleCreateIns}
                            editIns={this.toggleEditIns}

                            isAddIns={this.props.addingIns}
                            selectedIns={this.props.editingIns}
                            deleteIns={this.handleDeleteIns}/>

                        <UserProviders
                            providers={this.props.providers}
                            addProv={this.toggleCreateProv}
                            editProv={this.toggleEditProv}

                            isAddProv={this.props.addingProv}
                            selectedProv={this.props.editingProv}
                            deleteProv={this.handleDeleteProv}/>
                    </Col>
                </Grid>
            </div>
        );
    }
}


const mapStatesToProps = (state) => {
    return ({
        medications: medicationsSelector(state),
        insurances: insurancesSelector(state),
        providers: providersSelector(state),
        addingMed: addingMed(state),
        editingMed: editingMed(state),
        addingIns: addingIns(state),
        editingIns: editingIns(state),
        addingProv: addingProv(state),
        editingProv: editingProv(state),
    });
};

export default connect(mapStatesToProps, { addMed, editMed, addIns, editIns, addProv, editProv, getMedications, getInsurances, getProviders, deleteMedication, deleteInsurance, deleteProvider })(UserProfile);
