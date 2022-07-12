import React from "react";
import {connect} from "react-redux";
import {
    setProfile,
    profileLoad,
    getUserStatus,
    getUpdateStatus,
    getUserPhoto,
} from "../../redux/profile-reducer";
import {useParams, useNavigate, useLocation} from "react-router-dom";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>;
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileLoad(this.props.router.params.userId);
        this.props.getUserStatus(this.props.router.params.userId);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default compose(
    connect(mapStateToProps, {
        setProfile,
        profileLoad,
        getUserStatus,
        getUpdateStatus,
        getUserPhoto,
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
