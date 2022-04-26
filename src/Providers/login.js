import { users } from "../data";

const login = (email, password) => {
  const allUsers = [...users];
  const emails = allUsers.filter((user) => user.email !== email);
  const passwords = allUsers.filter((user) => user.password !== password);
  if (emails.length === allUsers.length) {
    return { error: true, info: "هیچ حساب کاربری با این ایمیل وجود ندارد" };
  } else if (
    emails.length < allUsers.length &&
    passwords.length === allUsers.length
  ) {
    alert("password incorect");
    return { error: true, info: "رمز عبور اشتباه است" };
  } else {
    const user = allUsers.find((user) => user.email === email);
    console.log("user is:", user);
    return { error: false, info: user };
  }
};

export default login;
