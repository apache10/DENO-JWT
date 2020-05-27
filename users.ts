// temproary user data can use database instead 

export interface User {
    id: string;
    username: string;
    password: string;
  }
  
  const users: Array<User> = [
    {
      id: "1",
      username: "user1",
      password: "user1",
    },
    {
      id: "2",
      username: "user2",
      password: "user2",
    },
  ]
  
  export default users;