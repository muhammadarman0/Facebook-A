const userDetail = JSON.parse(localStorage.getItem("currentUser"))

if (!userDetail) {
    window.location.href = "../login/login.html"
}