import { users } from "../data";

const signup = (name,email,phoneNumber,password) => {
    const allUsers = [...users];
    const phoneNumbers = allUsers.filter(user=> user.phoneNumber === phoneNumber);
    const emails = allUsers.filter(user=> user.email === email);
    const names = allUsers.filter(user=> user.name === name);
    if(names.length > 0){
        return {error:true,info:"نام کاربری قبلا انتخاب شده است"};
    }
    else if(emails.length > 0){
        return {error:true,info:"ایمیل قبلا استفاده شده است"};
    }
    else if(phoneNumbers.length > 0){
        return {error:true,info:"شماره قبلا ثبت شده است"}
    }
    else{
        const newUser = {name:name,email:email,phoneNumber:phoneNumber,password:password};
        users.push(newUser);
        return {error:false,info:newUser};
    }
};

export default signup;
