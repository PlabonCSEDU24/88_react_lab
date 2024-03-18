export const addUser = (user: {
  name: string;
  password: string;
  email: string;
}) => {
  let users = localStorage.getItem('users');
  if (!users) {
    users = '[]';
  }
  let arr = JSON.parse(users);
  arr.push(user);
  console.log(arr);
  localStorage.setItem('users', JSON.stringify(arr));
};

export const login = (user: { email: string; password: string }) => {
  let users = localStorage.getItem('users');
  if (!users) {
    users = '[]';
  }
  let arr = JSON.parse(users);

  arr.map((item: any) => {
    console.log(item);
    if (item.email === user.email && item.password === user.password) {
      return 'ok';
    }
    if (item.email === user.email && item.password !== user.password) {
      return 'pass';
    }
  });
  return '404';
};
