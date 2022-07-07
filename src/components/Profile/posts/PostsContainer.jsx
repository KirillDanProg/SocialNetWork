import { connect } from "react-redux";
import Posts from "./Posts"


const mapStateToProps = (state) => {
return {
  profilePage: state.profilePage
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
