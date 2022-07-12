const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
      userName: "Kirill",
    },
    {
      id: 2,
      img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
      userName: "Alex",
    },
    {
      id: 3,
      img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
      userName: "John",
    },
    {
      id: 4,
      img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      userName: "Cris",
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hello, World!",
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
    },
    {
      id: 2,
      message: "I am busy now",
      img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
    },
    {
      id: 3,
      message: "What have you been up to?",
      img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
    },
    {
      id: 4,
      message: "No thanks",
      img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
  ],
};
type ActionType = {
  type: typeof ADD_MESSAGE
  message: string
}
const dialogsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 1,
        message: action.message,
        img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessage = (message: string) => ({ type: ADD_MESSAGE, message });


export default dialogsReducer;
