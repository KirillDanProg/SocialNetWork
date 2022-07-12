type User = {
  id: number
  name: string
  img: string
}
type InitialStateType = {
  mates: Array<User>
}
let initialState: InitialStateType = {
  mates: [
    {
      id: 1,
      name: "Kirill",
      img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg",
    },
    {
      id: 2,
      name: "Alex",
      img: "https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg",
    },
    {
      id: 3,
      name: "John",
      img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
  ],
}

const sidebarReducer = (state = initialState, action: any) => {
  return state
}

export default sidebarReducer


