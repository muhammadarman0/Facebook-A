let first = document.getElementById("firstName")
let last = document.getElementById("lastName");
let days = document.getElementById("day")
let months = document.getElementById("month")
let years = document.getElementById("year")
let emailUser = document.getElementById("email")
let pass = document.getElementById("password")
let gend = document.getElementsByName("Gender")

let users = []


// console.log(months);


function errorAlert(m) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${m}`,

    });
}

function saveLocalStorage(e) {
    e.preventDefault();
    if (first.value.trim() == "" || last.value.trim() == "" || emailUser.value.trim() == "" || pass.value.trim() == "") {
        errorAlert("fill the fild")
        return;
    }
    if (pass.value.length <= 8) {
        errorAlert("Password at least 8 character!")
        return;
    }

    let objArr = {
        name: first.value,
        lastNaam: last.value,
        day: days.value,
        month: months.value,
        year: years.value,
        email: emailUser.value,
        password: pass.value,
        // gender: gend.value
    }
    for (let i = 0; i < gend.length; i++) {
        // console.log(gend[i]);
        if (gend[i].checked) {
            objArr.gender = gend[i].value;
            // return;
        }
    }

    // let userFormDB = JSON.parse(localStorage.getItem("users"))

    users.push(objArr)

    localStorage.setItem("users", JSON.stringify(users))

    first.value = ""
    last.value = ""
    emailUser.value = ""
    pass.value = ""
    // sweety("success", "Signup Done", "Congratulations! signup successfully!")
    Swal.fire({
        title: "Congratulations! signup successfully!",
        icon: "success",
        draggable: true
    });
}