import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteProvider } from '../../actions/providerActions';

class Providers extends Component{

  render() {
    const emptyMessage = (
      <tr>
        <td colSpan="8">There are no providers in your list</td>
      </tr>
    )

    const providerList = this.props.providers.map(provider =>
      <tr className='AttrInfo' key={provider.id}>
        <td>{provider.name}</td>
        <td>{provider.address}</td>
        <td>{provider.phone}</td>
        {provider.departments.map(department =>
          <td key={department.id}>{department.name}</td>
        )}
        <td>{provider.first_visit}</td>
        <td>{provider.notes}</td>
        <td><Button bsStyle="link" onClick={() => this.props.editProv(provider)}>Edit</Button></td>
        <td><Button bsStyle="link" onClick={() => this.props.deletePro(provider)}>Delete</Button></td>
      </tr>
    )

    return (
      <tbody>
        {providerList.length === 0 ? emptyMessage : providerList}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    provider: state.provider
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deleteProvider: deleteProvider
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Providers);
