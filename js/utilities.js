//donate button toggle.

const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');


function activeFunction(event){
    btnDonation.classList.remove('bg-[#B4F461]');
    btnHistory.classList.remove('bg-[#B4F461]');

    event.classList.add('bg-[#B4F461]');

    
}