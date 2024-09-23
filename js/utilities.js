/// INPUT CALCULATION common UTILITY FUNCTION

function gettingInputCalcByFunction(btn,inp,btn2){
    document.getElementById(btn)
    .addEventListener('click', function(){
    const donInpValue = getInputValueById(inp);
    const currentTimeDate = new Date();
    console.log(currentTimeDate);

    const donBtnTextValue = getInputTextById(btn2);
    if(isNaN(donInpValue) || donInpValue < 0){
        alert('Invalid Input');
        document.getElementById(inp).value = "";
        return;
    }
    const mainBalance = getInputTextById('main-balance');

    const newDonBtnTextValue = donBtnTextValue + donInpValue;
    const newMainBalance = mainBalance - donInpValue;

    document.getElementById(btn2).innerText = newDonBtnTextValue;
    document.getElementById('main-balance').innerText = newMainBalance;


    ////Transaction History
    if(btn === 'btn-noakhali-donation'){
        transactionHistory(donInpValue, 'famine in Noakhali');
    }else if(btn === 'btn-feni-donation'){
        transactionHistory(donInpValue, 'massive flood in Feni');
    }else{
        transactionHistory(donInpValue, 'Quota reform injured');
    }
    document.getElementById(inp).value = "";
    my_modal_4.showModal();
    
})
}

//donate button toggle.

const btnDonation = document.getElementById('show-btn-donation');
const btnHistory = document.getElementById('show-btn-history');


function activeFunction(event){
    btnDonation.classList.remove('bg-[#B4F461]');
    btnHistory.classList.remove('bg-[#B4F461]');
    event.classList.add('bg-[#B4F461]');
    
    
};

function showASectionById(id){
    document.getElementById('donation-main-container').classList.add('hidden');
    document.getElementById('donation-history-container').classList.add('hidden');
    ///show clicked button related form by removing hidden class

    document.getElementById(id).classList.remove('hidden');
};

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};


function getInputTextById(id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}

function transactionHistory(donInpValue,area){
    const dateNow = new Date();
    const div = document.createElement('div');
    div.classList.add('p-10');
    div.classList.add('border-2');
    div.classList.add('border-gray-300');
    div.classList.add('rounded-md');
    div.classList.add('shadow-sm');
    div.classList.add('mb-2');
    div.innerHTML = `
        <h1 class="font-bold text-xl">${donInpValue} Taka is Donated for ${area}, Bangladesh</h1>
        <p>Date : ${dateNow}</p>
    `
    document.getElementById('donation-history-container').appendChild(div);
}


