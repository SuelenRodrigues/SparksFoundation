const Modal = {
    
    /*button.addEventListener("click", open);*/
    open(customerName){
        const modalWrapper = document.querySelector('.modal-overlay');
        
        //functionality to attribute the active class to the modal
        console.log('entrou no open')
        modalWrapper.classList.add("active");

        const sender = document.querySelector('#senderTransfer');
        sender.setAttribute("value", customerName);


    },
    close(){
        //functionality to remove the active class to the modal
        const modalWrapper = document.querySelector('.modal-overlay');
        modalWrapper.classList.remove("active")
    }
}