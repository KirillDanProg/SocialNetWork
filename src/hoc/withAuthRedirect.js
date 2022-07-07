import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectContrainer extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />; 
      return <Component {...this.props} />;
    }
  }
  const ConnectedRedirectContrainer = connect(mapStateToPropsRedirect)(RedirectContrainer);

  return ConnectedRedirectContrainer;
};
