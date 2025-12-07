document.addEventListener("DOMContentLoaded", () => {

  const sessionData = JSON.parse(localStorage.getItem("supaBaseSession"));

  if ( !sessionData) {
    window.location.href = "login.html";
  } else {
  document.getElementById("wallet").textContent = sessionData.walletHash;
  document.getElementById("user-email").textContent = sessionData.user.email;
  }
});
