function telephoneCheck(str) {
  var phoneNum = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if(phoneNum.test(str)){
    return true
  }else{
    return false;
  }

}

console.log(telephoneCheck("555-555-5555"));
