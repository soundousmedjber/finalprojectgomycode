
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    //  signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
 //animation//
 const counters = document.querySelectorAll('.counter');
 const speed = 200; 
 
 counters.forEach(counter => {
     const updateCount = () => {
         const target = +counter.getAttribute('data-target');
         const count = +counter.innerText;
 
         const inc = target / speed;
         if (count < target) {
             counter.innerText = count + inc;
             setTimeout(updateCount, 1);
         } else {
             counter.innerText = target;
         }
     };
 
     updateCount();
 });
 
