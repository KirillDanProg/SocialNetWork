import React from "react";
import { connect } from "react-redux";
import { getUserAuth, logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userName: state.auth.login,
  };
};
export default connect(mapStateToProps, { getUserAuth, logout })(
  HeaderContainer
);
