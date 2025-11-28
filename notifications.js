document.addEventListener("DOMConetentLoaded", () => {

    const overlay = document.getElementById("nft-modal-overlay");
    const modalText = document.getElementById("nft-modal-text");
    const closeBtn = document.getElementById("nft-modal-close");

    function showModal(message){
        modalText.textContent = message;
        overlay.classList.remove("show");

    }

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("show");
    });

    window.buyNFT = function(id) {
        showModal('you Bought NFT #${id}! ');

        const nftFiles = {
            1: "1tzLZZnniuv4GN5oykH88pm3Qs8ArsAuD",
             // 2: "GOOGLE_DRIVE_FILE_ID_2",
             // 3: "GOOGLE_DRIVE_FILE_ID_3"
        };
        
        if (nftFiles[id]) {
            const a = document.createElement("a");
             a.href = `https://drive.google.com/uc?export=download&id=${nftFiles[id]}`;
             a.download = 'nft_${id}.jpg';
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
        

        }




        const buttons = document.querySelectorAll("button")
        buttons.forEach(btn =>{
            if (btn.textContent.includes('buy nft #${id}')){

                setTimeout(() => {
                btn.textContent = "owned";
                btn.style.backgroundColor = "#222";
                btn.style.color = "#00bfff"
                btn.style.cursor = "not-allowed";
                btn.disabled = true
            }, 1000);
            }
        });
    };

});
