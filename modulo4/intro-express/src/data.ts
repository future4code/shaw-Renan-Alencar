
type Users = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

type Posts = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const Users = [
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1234-5678",
    email: "Sincere@april.biz",
    website: "www.leanne.com.br",
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "9876-5432",
    email: "Ervin@melissa.tv",
    website: "www.Ervin.com.br",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    phone: "4563-3333",
    email: "Nathan@yesenia.net",
    website: "www.Clementine.com.br",
  },
];

export const Posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 2,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 3,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 3,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
]
