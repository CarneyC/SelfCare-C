import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createInsurance, updateInsurance } from '../../redux/modules/insurance/actions'
import { insuranceError } from "../../redux/modules/error/selectors";

class InsuranceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            notes: ""
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props.insurance
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.insurance
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.id === undefined) {
            this.props.createInsurance(this.state);
        } else {
            this.props.updateInsurance(this.state.id, this.state)
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} data-id={this.state.id}>
                <TextFieldGroup
                    label="Name:"
                    id="formControlsName"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="Address:"
                    id="formControlsAddress"
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="Phone:"
                    id="formControlsPhone"
                    type="text"
                    name="phone"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="Notes:"
                    id="formControlsNotes"
                    type="text"
                    name="notes"
                    placeholder="notes"
                    value={this.state.notes}
                    onChange={this.handleChange}
                    error={this.props.insuranceError}
                />
                <br />
                <Button bsStyle="success" type="submit" value="Add Insurance">{this.props.action || "Add"} Insurance</Button>
            </Form>
        )
    }
}


const mapStatesToProps = (state) => {
    return ({
        insuranceError: insuranceError(state),
    });
};

export default connect(mapStatesToProps, {
    createInsurance,
    updateInsurance
})(InsuranceForm);
