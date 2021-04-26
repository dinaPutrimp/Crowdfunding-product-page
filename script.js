const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const contentBookmark = document.querySelector('.content-bookmark');
const textMark = document.querySelector('.mark');
const modal = document.getElementById('modal-container');
const openModalBtn = document.querySelectorAll('#open-modal');
const closeBtnModal = document.querySelector('.closeBtn');
const radioBtn = document.querySelectorAll('.radioBtn');
const payBox = document.querySelectorAll('.payment');
let backed = 89914;
let backers = 5007;
let bambooInput = document.getElementById('bambooInpt');
let formBamboo = document.querySelector('.bambooCont');
let bambooLeft = document.querySelectorAll('.bamboo-left');
let bamboo = 101;
const rewardInput = document.getElementById('rewardInpt');
const formReward = document.querySelector('.rewardCont');
const blackInput = document.getElementById('blackInpt');
const formBlack = document.querySelector('.blackCont');
let blackEdLeft = document.querySelectorAll('.black-ed-left');
let black = 64;
const totalAmount = document.querySelector('.total-amount');
const totalBackers = document.querySelector('.total-backers');
const completedBox = document.querySelector('.completed-container');
const gotIt = document.querySelector('.btnOk');
let subBar = document.querySelector('.sub-bar');

//toggle-nav event 
hamburger.addEventListener('click', () => {
    if (nav.classList.toggle('nav-active')) {
        hamburger.src = 'images/icon-close-menu.svg'
    } else {
        hamburger.src = 'images/icon-hamburger.svg'
    }
});

// bookmark event 
contentBookmark.addEventListener('click', () => {
    if (contentBookmark.classList.toggle('mark-active')) {
        textMark.innerText = 'Bookmarked';
    } else {
        textMark.innerText = 'Bookmark';
    }

});

// modal event 
openModalBtn.forEach(openModal => {
    openModal.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeBtnModal.addEventListener('click', () => {
    closeModal();
    removeChecked();
    removeDisplay();
});

function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        removeChecked();
        removeDisplay();
    }
});

// radio-button event
for (let a = 0; a < radioBtn.length; a++) {
    radioBtn[a].addEventListener('click', () => {
        removeDisplay();
        payBox[a].style.display = 'block';
        payBox[a].style.borderTop = '1px solid lightgray'
    });
}
function removeDisplay() {
    for (let a = 0; a < payBox.length; a++) {
        payBox[a].style.display = 'none';
    }
}
function removeChecked() {
    for (let a = 0; a < radioBtn.length; a++) {
        radioBtn[a].checked = false;
    }
}

// input

formReward.addEventListener('submit', () => {
    addToAmountReward(rewardInput);

    totalAmount.innerText = backed;
    totalBackers.innerText = backers;
});

formBamboo.addEventListener('submit', () => {
    if (bambooInput.value !== '') {
        backed += parseInt(bambooInput.value);
        backers++;
        bamboo--;
        bambooInput.value = '';
        progresBar();
        closeModalWhenSubmit();
        openCompletedBox();
    } else {
        modal.style.display = 'block';
    }

    totalAmount.innerText = backed;
    totalBackers.innerText = backers;
    bambooLeft.forEach(bool => {
        bool.innerText = bamboo;
    });
});

formBlack.addEventListener('submit', () => {
    if (blackInput.value !== '') {
        backed += parseInt(blackInput.value);
        backers++;
        black--;
        blackEdLeft.value = '';
        progresBar();
        closeModalWhenSubmit();
        openCompletedBox();
    } else {
        modal.style.display = 'block';
    }

    totalAmount.innerText = backed;
    totalBackers.innerText = backers;
    blackEdLeft.forEach(blackl => {
        blackl.innerText = black;
    });
});

function addToAmountReward(input) {
    if (input.value !== '') {
        backed += parseInt(input.value);
        backers++;
        input.value = '';
        progresBar();
        closeModalWhenSubmit();
        openCompletedBox();
    } else {
        modal.style.display = 'block';
    }
}

function progresBar() {
    subBar.style.width = `${(backed / 100000) * 100}%`;
}

function closeModalWhenSubmit() {
    modal.style.display = 'none';
    removeChecked();
    removeDisplay();
}

function openCompletedBox() {
    completedBox.classList.add('active');
}

gotIt.addEventListener('click', () => {
    completedBox.classList.remove('active');
});

progresBar();




