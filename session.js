document.addEventListener("DOMContentLoaded", () => {

  const sessionData = JSON.parse(localStorage.getItem("supabaseSession"));
 
  if (!sessionData) {

    window.location.href = "login.html";
    return;
  }

    document.getElementById("wallet").textContent = sessionData.walletHash;

    //document.getElementById("user-email").textContent = sessionData.user.email;

  const{data : owned, error } = await supabase
  .from("nft_owned")
  .select("nft_id")
  .eq("user_id"), sessionData.user.id);

  if (!error && owned.lenght > 0 ) {
    owner.forEach(row => {
      const id = row.nft_id;
      const btn = document.querySelector('button[data-nft="${id}"]');
      if (btn) {
        btn.textContent = "Owned";
        btn.style.backgroundColor = '#222';
        btn.style.color = '#00bfff';
        btn.style.cursor =   "not-allowed";
        btn.disabled = true;
  }
    });
  }

});
 
