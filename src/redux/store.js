// import mainReducer from "./main-reducer";
// import dialogsReducer from "./dialogs-reducer";

// export const store = {
//   _state: {
//     mainPage: {
//       posts: [
//         {
//           id: 1,
//           img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
//           text: "some text number one",
//           likes: 271,
//         },
//         {
//           id: 2,
//           img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
//           text: "some text number two",
//           likes: 13,
//         },
//         {
//           id: 3,
//           img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
//           text: "some text number three",
//           likes: 1377,
//         },
//         {
//           id: 4,
//           img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//           text: "some text number four",
//           likes: 197,
//         },
//       ],
//       postText: "",
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
//           userName: "Kirill",
//         },
//         {
//           id: 2,
//           img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
//           userName: "Alex",
//         },
//         {
//           id: 3,
//           img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
//           userName: "John",
//         },
//         {
//           id: 4,
//           img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//           userName: "Cris",
//         },
//       ],
//       messages: [
//         {
//           id: 1,
//           message: "Hello, World!",
//           img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
//         },
//         {
//           id: 2,
//           message: "I am busy now",
//           img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
//         },
//         {
//           id: 3,
//           message: "What have you been up to?",
//           img: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
//         },
//         {
//           id: 4,
//           message: "No thanks",
//           img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//         },
//       ],
//       newMessageText: "",
//     },
//     sidebar: {
//       mates: [
//         {
//           id: 1,
//           name: "Kirill",
//           img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
//         },
//         {
//           id: 2,
//           name: "Alex",
//           img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
//         },
//         {
//           id: 3,
//           name: "John",
//           img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//         },
//       ],
//     },
//   },
//   _callSubscriber() {
//     console.log("rerender");
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.mainPage = mainReducer(this._state.mainPage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
//     this._callSubscriber();
//   },
// };

