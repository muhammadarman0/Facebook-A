const userDetail = JSON.parse(localStorage.getItem("currentUser"))

if (!userData) {
    window.location.href = "../login/login.html"
}