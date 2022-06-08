import React from 'react';
// import ReactDOM from 'react-dom';

const API = 'https://randomuser.me/api/?results=5&nat=us&inc=gender,name,email'

function useUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      /*
      第一引数：実行させたい副作用 
      await ：非同期通信が終わった後にferch()を実行
      fetch()：メソッドを実行(引数はAPIのURL(ここでは、APIに置いている))
      then()：メソッドで次の処理をつなぐ(res：無名関数)

       */
      const response = await fetch(API).then(res => res.json());
      setUsers(response.results);
    })();
  },[]);

  return users;
}


function Users(){
  const users = useUsers();

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Gender</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.email}>
            <td>{user.name.title}. {user.name.first}{user.name.last}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>    
    </table>
  );
}

export default Users;
