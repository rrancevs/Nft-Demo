document.addEventListener("DOMConetentLoaded", () => {

    const overlay = document.getElementById("nft-modal-overlay");
    const modalText = document.getElementById("nft-modal-text");
    const closeBtn = document.getElementById("nft-modal-close");

    function showModal(message){
        modalText.textContent = message;
        overlay.classList.remove("show")

    }

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("show")
    });

    window.buyNFT = function(id) {
        showModal('you Bought NFT #${id}! ');
    };

});
