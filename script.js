function validateform() {
  var validatename = false;
  var validatenum = false;
  var validateemail = false;
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var number = document.myform.number.value;
  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  // name is a required input
  if (name == null || name == "") {
      validatename = false;
      } else if (!isNaN(name)) {
    validatename = false;
      } else if (name.match(format)) {
    validatename = false;
      } else {
    validatename = true;
  }

  // number is of 10 digit
  if ((number.length) == 10) {
    validatenum = true;
     } else {
    validatenum = false;
  }

  // email is a required input
  /*
   There are criteria that are required to validate the email id:
   1)email id must contain the @ and . character
   2)There must be at least one character before and after the @.
   3)There must be at least two characters after . (dot).
   */
  var at_pos = email.indexOf("@");
  var dot_pos = email.lastIndexOf(".");
  if (at_pos < 1 || dot_pos < at_pos + 2 || dot_pos + 2 >= email.length) {
        validateemail = false;
  } else {
    validateemail = true;
  }
  if (validateemail && validatename && validatenum) {
    set_item();
    get_item();
    document.myform.name.value = " ";
    document.myform.email.value = " ";
    document.myform.number.value = " ";
  } 
  
 
  else if(validateemail && validatename){
    alert(" enter valid number");
    document.myform.number.value = " ";
  } 
  else if(validatenum && validatename){
    alert(" enter valid email");
    document.myform.email.value = " ";
  }
  else if(validateemail && validatenum){
    alert(" enter valid name");
    document.myform.name.value = " ";
  }

  else if(validatenum){
    alert("enter email and name correct");
        document.myform.name.value = " ";
       document.myform.email.value = " ";
  }
  else if (validatename){
    alert("enter number and email correct");
        document.myform.email.value = " ";
    document.myform.number.value = " ";
  }
  else if (validateemail){
    alert("enter number and name correct");
    document.myform.name.value = " ";
    document.myform.number.value = " ";
  }
  else{
    alert("enter all values correct");
    document.myform.name.value = " ";
    document.myform.email.value = " ";
    document.myform.number.value = " ";
  }
}
function set_item() {
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var number = document.myform.number.value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("number", number);
}

function get_item() {
  let tableBody = document.getElementById("Body");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let nameNode = document.createTextNode(localStorage.getItem("name"));
  td1.appendChild(nameNode);
  let td2 = document.createElement("td");
    let emailNode = document.createTextNode(localStorage.getItem("email"));
  td2.appendChild(emailNode);
  let td3 = document.createElement("td");
  let contactNode = document.createTextNode(localStorage.getItem("number"));
  td3.appendChild(contactNode);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tableBody.append(tr);
}
