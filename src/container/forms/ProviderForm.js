import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import TextFieldGroup from '../../components/common/formFields';
import { connect } from 'react-redux';
import { createProvider, updateProvider } from '../../redux/modules/provider/actions'
import { providerError } from "../../redux/modules/error/selectors";

class ProvidersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone: "",
            first_visit: "",
            notes: "",
        }
    }

    componentDidMount() {
        this.setState({
            ...this.props.provider
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.provider
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.id === undefined) {
            this.props.createProvider(this.state)
        } else {
            this.props.updateProvider(this.state.id, this.state)
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
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="Address:"
                    id="formControlsAddress"
                    type="text"
                    name="address"
                    placeholder="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="Phone:"
                    id="formControlsPhone"
                    type="tel"
                    name="phone"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <TextFieldGroup
                    label="First Visit:"
                    id="formControlsFirstVisit"
                    type="date"
                    name="first_visit"
                    placeholder="first_visit"
                    value={this.state.first_visit}
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
                    error={this.props.providerError}
                />

                <br />
                <Button bsStyle="success" type="submit" value="Add Provider">{this.props.action || "Add"} Provider</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        providerError: providerError(state)
    });
}

export default connect(mapStateToProps, {
    updateProvider,
    createProvider
})(ProvidersForm);

