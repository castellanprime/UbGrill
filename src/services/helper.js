function hasNoNumbers(str) {
  let re = /^[A-Za-z]+$/;
  if (re.test(String(str).toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function hasNoSlash(str) {
  let re = /[a - zA - Z]\/[a-zA-Z]/;
  if (re.test(String(str).toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

export function printArrOfObjects(arr) {
  let strarray = arr.map(item => {
    return JSON.stringify(item);
  });
  let str = "[" + strarray.join(",") + "]";
  console.log(str);
}

export function isObjectEmpty(objet) {
  for (var i in objet) {
    return false;
  }
  return true;
}

export function emptyObject(objet) {
  let prs = Object.getOwnPropertyNames(objet);
  for (var i = 0; i < prs.length; i++) {
    delete objet[prs[i]];
  }
}

export function findSubIndexes(arr, item) {
  for (let row in arr) {
    for (let col in arr[row]) {
      if (arr[row][col].toLowerCase() === item.toLowerCase()) {
        return { row: row, col: col };
      }
    }
  }
}

export function validateFormInput(form) {
  var inputerrors = { ...form.formerrors };
  Object.keys(form).forEach(function(key) {
    console.log("Key:" + key + ", value=" + form[key]);
    switch (key) {
      case "username":
        if (form[key].length < 5)
          inputerrors[key] = `${key} must be as least 5 characters!`;
        break;
      case "password":
        if (form[key].length < 8)
          inputerrors[key] = `${key} must be as least 8 characters!`;
        if (hasNoNumbers(form[key]) === true)
          inputerrors[
            key
          ] = `${key} must contain uppercase, lowercase and numbers!`;
        break;
      case "email":
        // bad idea to test email
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (re.test(String(form[key]).toLowerCase()) === false) {
          inputerrors[key] = "Email is not valid!!";
        }
        break;
      case "fullname":
        if (hasNoSlash(form[key]) === false) {
          inputerrors[key] = `${key} must have lastname/firstname`;
        }
        let arr = form[key].split("/");
        arr.map(function(val) {
          if (val.length < 5)
            inputerrors[key] = `${key} must be as least 5 characters!`;
          if (hasNoNumbers(val) === false)
            inputerrors[key] = `${key} should not have a number in it`;
        });
        break;
      default:
        break;
    }
  });
  return inputerrors;
}

export function doesFormHaveErrors(errors) {
  return Object.keys(errors).some(x => errors[x]);
}
