//adding listener for click on 'back this project' button to display the modal and overlay
document.getElementById('back-project-btn').addEventListener('click',function(){   
    showModal('back-project-open')
})

//button to close the modal
document.getElementById('exit-modal-btn').addEventListener('click',function(){
    // document.body.classList.remove('back-project-open')
    hideModal('back-project-open')
})

//adding event listeners for all the submit buttons in the pledge modal
document.querySelectorAll('.pledge-submit-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        let inputToSubmit = btn.parentElement.querySelector('.input-container input')
        
        if(inputToSubmit !== null){
            console.log('Submission with payment. Value:', inputToSubmit.value);
        } else {
            console.log('Submission without payment');
        }

        hideModal('back-project-open')
        showModal('thankyou-open')
    })
})


document.getElementById('close-thankyou-modal').addEventListener('click',function(){
    hideModal('thankyou-open')
})


addPledgeOptionListeners()



var listenersSet = false;

function addPledgeOptionListeners(){
    let radios = document.querySelectorAll('.pledge-modal input[type=\'radio\']')
    
    console.log(radios);
    
    //unset these listeners when you exit the modal
    radios.forEach(function(radio){
        let pledgeOptionCard = radio.parentNode.parentNode
        
        //If the option is out of stock, disable the ability to select it (and affect the its css upon click) and do not add a click listener to the component
        if(pledgeOptionCard.classList.contains('out-of-stock')){
            radio.setAttribute('disabled','true')
            
            //if pledge option is in stock, add the listener for when the radio button is changed
        } else {
            pledgeOptionCard.addEventListener('click',function(){
                
                //only select the element upon click once
                if(pledgeOptionCard.classList.contains('selected') === false){
                    radio.checked = true;
                    console.log('adding selected');
                    selectNewPaymentContainer(radio)
                }
            })
            
        }
    })
}





function selectNewPaymentContainer(element){
    let prevSelected = document.querySelector('.pledge-option.selected')
    
    //update css from previously selected item if there is one
    if(prevSelected){
        prevSelected.classList.remove('selected');
        
        prevPaymentContainer = prevSelected.querySelector('.payment-container')
        if(prevPaymentContainer) prevPaymentContainer.style=''
    }
    
    //adding the selected to the component of the selected input
    element.parentNode.parentNode.classList.add('selected')
    paymentContainer = element.parentNode.parentNode.querySelector('.payment-container')
    
    if(paymentContainer) paymentContainer.style.maxHeight = paymentContainer.scrollHeight + 'px'
}


function showModal(className){
    document.body.classList.add(className)
}

function hideModal(className){
    document.body.classList.remove(className)
}