document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || phone === "" || password === "") {

        document.getElementById("message").innerHTML =
            "Vui lòng nhập đầy đủ thông tin!";

        return;
    }

    // Lưu thông tin (nếu cần)
    localStorage.setItem("username", username);
    localStorage.setItem("phone", phone);

    window.location.href = "html/gioi-thieu.html";
});