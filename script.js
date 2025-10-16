function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "flex";
    document.getElementById("user-name").innerText = username;
  } else {
    alert("Invalid credentials! Try username: admin & password: 1234");
  }
}

function logout() {
  document.getElementById("dashboard-page").style.display = "none";
  document.getElementById("login-page").style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function deleteAll() {
  document.getElementById("records-box").value = "";
  document.getElementById("total-records").innerText = "0";
  alert("All data deleted!");
}

function copyAll() {
  const text = document.getElementById("records-box").value;
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}
