import React from "react";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "./ProfileInfo.module.css";



const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode((editMode = true));
    setStatus(status = props.status)
  };
  const deactivateEditMode = () => {
    setEditMode((editMode = false));
    props.getUpdateStatus(status);
  };
  const updStatus = (e) => {
    setStatus((status = e.currentTarget.value));
  };
  return (
    <div className={style.profileStatus}>
      {!editMode && (
        <div className={style.inputStatus}>
          <span onDoubleClick={activateEditMode}>{props.status || "-"}</span>
        </div>
      )}
      {editMode && (
        <div className={style.inputStatus}>
          <input
            autoFocus
            onChange={updStatus}
            value={status}
            onBlur={deactivateEditMode}
            type="text"
          />
        </div>
      )}
      {/* <PhotoForm getUserPhoto={props.getUserPhoto}/> */}
    </div>
  );
};

const PhotoForm = (props) => {
  
  const {register, handleSubmit} = useForm()
  const onSubmit= (data) => {
    props.getUserPhoto(data.file[0])
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" name="file" {...register("file")}/>
      <button type="submit">photo</button>
    </form>
  )
}
// class ProfileStatus extends React.Component {

//   state = {
//     editMode: false,
//     status: this.props.status,
//   };

// activateEditMode = () => {
//   this.setState({
//     editMode: true,
//   });
// };

// deactivateEditMode = () => {
//   this.setState({
//     editMode: false,
//   });
//   this.props.getUpdateStatus(this.state.status);
// };

// updStatus = (e) => {
//   this.setState({
//     status: e.currentTarget.value,
//   });
// };

// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.status !== this.props.status) {
//     this.setState({
//         status: this.props.status,
//       });
//     }
//   }
//   render() {
//     return (
//       <div className={style.profileStatus}>
//         {!this.state.editMode && (
//           <div className={style.inputStatus}>
//             <span onDoubleClick={this.activateEditMode}>
//               {this.state.status || "-"}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && (
//           <div className={style.inputStatus}>
//             <input
//               autoFocus
//               onChange={this.updStatus}
//               value={this.state.status}
//               onBlur={this.deactivateEditMode}
//               type="text"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default ProfileStatus;
