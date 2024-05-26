const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const closeModals = document.querySelectorAll('.js-close')
const ticketsModal = document.querySelector('.js-ticket-modal')
function showModal() {
    modal.classList.add('open')

}
function hideModal() {
    modal.classList.remove('open')
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal )
}

for (const closeModal of closeModals) {
    closeModal.addEventListener('click', hideModal)
}

ticketsModal.addEventListener('click', function(event){
    event.stopPropagation()
})

    