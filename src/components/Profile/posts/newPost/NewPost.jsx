import { useForm, } from "react-hook-form";
import s from "./NewPost.module.css";

const NewPost = (props) => {
  return <PostForm addPost={props.addPost} />;
};

export default NewPost;

const PostForm = (props) => {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = (data) => {
    props.addPost(data.post);
    resetField("post")
  };


  return (
    <form className={s.newPost} onSubmit={handleSubmit(onSubmit)}>
      <h4>New post</h4>
      <input  {...register("post")} name="post"/>
      <button type="submit">Send</button>
    </form>
  );
};
