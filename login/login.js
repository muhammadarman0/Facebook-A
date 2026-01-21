

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

    let users = JSON.parse(localStorage.getItem("users"))

    let account = false
    for (let i = 0; i < users.length; i++) {

        let user = users[i]

        if (user?.email == email.value) {

            account = true

            if (user.password == pass.value) {

                sweety(
                    "success",
                    "Login Successfully",
                    "You've successfully login to your account!",
                );

            } else {

                sweety("error", "Login Error", "Please enter correct password!");

            }
        }
    }

    // email.value = ""
    // pass.value = ""
}

btn.addEventListener("click", loginForm)
