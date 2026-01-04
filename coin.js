const input = document.getElementById("talesInput");
 
// ===============================
// Taleslang Parser + Execution
// ===============================
 
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("parseCoinBtn");
 
  if (!btn || !input) return;
 
  btn.addEventListener("click", async () => {
    const raw = input.value.trim();   // textarea uses .value
    if (!raw) {
      alert("Taleslang input is empty");
      return;
    }
 
    try {
      const command = parseTaleslang(raw);
 
      // Get session and user ID (Supabase Auth UUID)
      const sessionData = JSON.parse(localStorage.getItem("supabaseSession"));
      const userId = sessionData?.user?.id;

    await executeCommand(command, userId);
 
      alert("✅ Coin created successfully");
      input.value = "";               // clear textarea
    } catch (err) {
      alert("❌ " + err.message);
    }
  });
});




function parseTaleslang(text) {
if (Itext.startsWith("create new")) {
}
throw new Error("Only 'create new' are supported as keywords");

await executeCommand(command, userId);
 
      alert("✅ Coin created successfully");
      input.value = "";               // clear textarea
    } catch (err) {
      alert("❌ " + err.message);
    }
  });
});


const bodyMatch = text.match(/\{([\s\S]*)\}/);
  if (!bodyMatch) {
    throw new Error("Missing object body {}");
  }
 
  const body = bodyMatch[1];
 
  const regex = /(\w+)\s*:\s*"([^"]*)"/g;
  const data = {};
  let match;
 
  while ((match = regex.exec(body)) !== null) {
    data[match[1]] = match[2];
  }
if (data.type !== "coin") {
    throw new Error('Only type:"coin" is supported');
  }
 
  const amount = parseInt(data.ammount, 10);
  if (isNaN(amount) || amount <= 0) {
    throw new Error("ammount must be a positive number");
  }
 
  return {
    name: data.name,
    amount,
    mintable: data.mintable === "true",
    owner: data.owner || "auto"
  };
}
