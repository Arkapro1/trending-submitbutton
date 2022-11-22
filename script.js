let usernameref=document.getElementById("username");
let passwordref=document.getElementById("password");
let submitref=document.getElementById("submit");
let msgref=document.getElementById("msg");

let isUsernameValid=()=>{
    /* Username should be contain more than 3
characters. Should begin with alphabetic
character Can contain numbers */
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
return usernameRegex.test(usernameref.value);
};

let ispasswordValid=()=>{
/* Password should be atleast 8 characters long.
Should contain atleast 1 number, 1 special
symbol, 1 lower case and 1 upper case */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordref.value);
}


//conditions are creating ⬇⬇⬇
usernameref.addEventListener("input",()=>{
    if(!isUsernameValid()){
        msgref.style.visibility="hidden";
        usernameref.style.cssText="border-color: #fe2e2e; background-color:#ffc2c2";
    }
    else{
        usernameref.style.cssText="border-color: #34db34; background-color:#c2ffc2";
    }
});

passwordref.addEventListener("input",()=>{
    if(!ispasswordValid()){
        msgref.style.visibility="hidden";
        passwordref.style.cssText="border-color: #fe2e2e; background-color:#ffc2c2";
    }
    else{
        passwordref.style.cssText="border-color: #34db34; background-color:#c2ffc2";
    }
});


//mainn logic ====>>>>>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
submitref.addEventListener("mouseover",()=>{
    if(!isUsernameValid() || !ispasswordValid()){
        // making position of container
    let containerRect = document.querySelector(".container").getBoundingClientRect();
        // making position of submit button
    let submitRect = submitref.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log("sumbit poistion => "+submitRect.left);
    console.log("container poistion => "+containerRect.left);
      console.log("offset => "+offset);
    //If the button is on the left hand side.. move it to the the right hand side
    if (offset <= 100) {
        submitref.style.transform = "translateX(14.65em)";
      }
    //Vice versa
      else {
        submitref.style.transform = "translateX(0)";
      }
    }
})
submitref.addEventListener("click", () => {
    msgref.style.visibility = "visible";
    console.log('oi');
  });
