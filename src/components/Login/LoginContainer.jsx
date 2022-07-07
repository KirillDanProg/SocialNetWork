import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import LoginForm from "./Login";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(LoginForm);
