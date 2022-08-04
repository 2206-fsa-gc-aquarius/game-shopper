import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleUser } from '../../store/singleUser';

class SingeUser extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchSingleUser(this.props.match.params.id);
    }

    render() {
        const {admin} = this.props.singleUser;
        return (
            <div>
                <h1>User Name: <br/>{this.props.singleUser.username}</h1>
                <h2>User Type: <br />{this.props.singleUser.userType}</h2>
                <h2>Email: <br />{this.props.singleUser.email}</h2>
                {console.log(this.props.singleUser)}
            </div>
        )
    }
}

const mapState = (state) => ({ singleUser: state.singleUserReducer });

const mapDispatch = (dispatch) => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapState, mapDispatch)(SingeUser);
