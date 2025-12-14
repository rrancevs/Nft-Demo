document.addEventListener("DOMContentLoaded", async () => {
  const sessionData = JSON.parse(localStorage.getItem("supabaseSession"));
  localStorage.removeItem("supabaseSession");
  
  if (!sessionData) {
    window.location.href = "login.html";
    return;
  }
  
  // 1 hour session
  const session = new Date(sessionData.createdAt).getTime();
  const now = Date.now();
  const oneHour = 60 * 60 * 1000
  if ( now - sessionStart > oneHour) {
    localStorage.removeItem("supabaseSession");
    window.location.href = "login.html";
    return;
  }
  
  document.getElementById("wallet").textContent = sessionData.walletHash;
 
  // Fetch NFTs owned by user
  const { data: owned, error } = await supabase
    .from("nft_owned")
    .select("nft_id")
    .eq("user_id", sessionData.user.id);
 
  if (!error && owned.length > 0) {
    // Disable the buttons on page load
    owned.forEach(row => {
      const id = row.nft_id;
      const btn = document.querySelector(`button[data-nft="${id}"]`);
      if (btn) {
        btn.textContent = "Owned";
        btn.style.backgroundColor = "#222";
        btn.style.color = "#00bfff";
        btn.style.cursor = "not-allowed";
        btn.disabled = true;
      }
    });
  }

  const timerEL = document.getElementById("timer")
  if (timerEl) {
    const sessionDuration = 60 * 60 * 1000;
    const start = Date.now();
    const sessionEnd = start + sessionDuration;

    function updateTimer(){
      const now = Date.now();
      const diff = sessionEnd - now;

      if(diff <= 0) {
        timerEL.textContent = "00:00";
        localStorage.removeItem("supaBase");
        window.location.href = "login.html";
        return;
      }

      const minutes = Math.floor(diff / 1000 / 60).toString().padStart(2, "0");
      const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, "0");
      timerEl.textContent = `${minutes}:${seconds}`;
    }

    updateTimer();
    setInterval(updateTimer,  1000);
  }

 
        
    
  
});
