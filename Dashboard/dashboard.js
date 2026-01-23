document.addEventListener("DOMContentLoaded", function () {
    let currentUserDetails = JSON.parse(localStorage.getItem("currentUser"))

    if (!currentUserDetails) {
        window.location.href = "../login/login.html"
        return
    }

    let text = document.getElementById("userInfo")
    text.innerHTML = `The Name is ${currentUserDetails.name} ${currentUserDetails.lastNaam}`

    let btnRmover = document.getElementById("logoutBtn")
    function userDetailRemove() {
        
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
        localStorage.removeItem("currentUser")
        window.location.href = "../login/login.html"
    }

    btnRmover.addEventListener("click", userDetailRemove)
})