

let btn = document.getElementById("loginBtn")

const sweety = (error, title, message) => {
    Swal.fire({
        icon: error,
        title: title,
        text: message,
    });
};

function loginForm() {

    let email = document.getElementById("email")
    let pass = document.getElementById("password")
    if (email.value.trim() == "" || pass.value.trim() == "") {
        return sweety("error", "Something went wrong", "Please Enter all fields!");
    }

    let userFormDB = JSON.parse(localStorage.getItem("users")) || []
    
    console.log(userFormDB);

    let account = false
    for (let i = 0; i < userFormDB.length; i++) {

        let user = userFormDB[i]

        if (user?.email == email.value) {

            account = true

            if (user?.password == pass.value) {
                sweety(
                    "success",
                    "Login Successfully",
                    "You've successfully login to your account!",
                );
                localStorage.setItem("currentUser", JSON.stringify(user))

                window.location.href = "../Dashboard/dashboard.html"

            } else {

                sweety("error", "Login Error", "Please enter correct password!");

            }
            break;
        }
    }

    // email.value = ""
    // pass.value = ""
    if (account === false) {
        sweety(
            "error",
            "Account not Exists",
            "You don't have an account, Please create your account!",
        );
    }
}

btn.addEventListener("click", loginForm)
