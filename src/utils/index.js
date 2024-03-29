export * from './constant';

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    console.error('Can not store in localStorage');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  return localStorage.setItem(key, valueToStore);
};
export const getItemFromLocalStorage = (key) => {
  if (!key) {
    console.error('Can not get value from localStorage');
  }
  return localStorage.getItem(key);
};
export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    console.error('Can not get value from localStorage');
  }
  return localStorage.removeItem(key);
};

export const getFormBuddy = (params) => {
  // let formbuddy = [];
  // for (let property in params) {
  //   let encodedKey = encodeURIComponent(property); //user name => 'user%20name'
  //   let encodedValue = encodeURIComponent(params[property]); // ayushman 123 => ayushman%202304
  //   formbuddy.push(encodedKey + '=' + encodedValue);
  // }
  // console.log(formbuddy);
  // return formbuddy.join('&'); // 'username=ayushman&password=123213

  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};
