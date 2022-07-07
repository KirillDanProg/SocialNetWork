import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Team from "./Team";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const WithRedirect = withAuthRedirect(Team);

export default connect(mapStateToProps)(WithRedirect);
