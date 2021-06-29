// Your code here.
function getFirstName(user){
  return user.firstName;

}
function getLastName(user){
  return user.lastName;
}
function getFullName(user){
  return user.firstName + ' ' + user.lastName;
}
function setFirstName(userName, userNewName){
  userName.firstName = userNewName;
  return userName;
}
function setAge(userAge, userNewAge){
  userAge.age = userNewAge;

}
function giveBirthday(userBirthDay){
  if (userBirthDay.age <= 0 || !('age' in userBirthDay)){
    userBirthDay.age = 1;
  }else{
    userBirthDay.age++
  }
}
function marry(user1,user2){
  user1.married = true;
  user2.married = true;
  user2.spouseName = getFullName(user1);
  user1.spouseName = getFullName(user2);
}
function divorce(user1,user2){
  user1.married = false;
  user2.married = false;
  delete user1.spouseName;
  delete user2.spouseName;
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
