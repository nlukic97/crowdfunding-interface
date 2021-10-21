//adding listener for click on 'back this project' button to display the modal and overlay
document.getElementById('back-project-btn').addEventListener('click',function(){   
    showModal('back-project-open')
})

//button to close the modal
document.getElementById('exit-modal-btn').addEventListener('click',function(){
    hideModal('back-project-open')
})

//adding event listeners for all the submit buttons in the pledge modal
document.querySelectorAll('.pledge-submit-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        let inputToSubmit = btn.parentElement.querySelector('.input-container input')
        console.log(inputToSubmit);
        let data = {
            reward: inputToSubmit.getAttribute('data-reward'),
            amount: inputToSubmit.value
        }
        if(inputToSubmit !== null){
            console.log('Submission with payment. Value:', data);
        } else {
            console.log('Submission without payment');
        }

        hideModal('back-project-open')
        showModal('thankyou-open')
    })
})


document.getElementById('close-thankyou-modal').addEventListener('click',function(){
    deselectOtherOption() //Once user clicks this, it will deselect the selected option on the hidden html element
    hideModal('thankyou-open')
})


addPledgeOptionListeners()



var listenersSet = false;

function addPledgeOptionListeners(){
    let radios = document.querySelectorAll('.pledge-modal input[type=\'radio\']')
    let optionCards = document.querySelectorAll('.pledge-modal .pledge-option')
    console.log(optionCards);
    
    console.log(radios);
    
    //unset these listeners when you exit the modal
    optionCards.forEach(function(optionCard){

        
        //If the option is out of stock, disable the ability to select it (and affect the its css upon click) and do not add a click listener to the component
        if(optionCard.classList.contains('out-of-stock')){            
            //if pledge option is in stock, add the listener for when the radio button is changed
        } else {
            optionCard.addEventListener('click',function(){
                
                //only select the element upon click once
                if(optionCard.classList.contains('selected') === false){
                    console.log('adding selected');
                    selectNewPaymentContainer(optionCard)
                }
            })
            
        }
    })
}





function selectNewPaymentContainer(element){

    deselectOtherOption()
    
    //adding the selected to the pledge option that the user clicked
    element.classList.add('selected')
    paymentContainer = element.querySelector('.payment-container')
    paymentContainer.style.maxHeight = paymentContainer.scrollHeight + 'px'
}


function showModal(className){
    document.body.classList.add(className)
}

function hideModal(className){
    document.body.classList.remove(className)
}


function deselectOtherOption(){
    let prevSelected = document.querySelector('.pledge-option.selected')
    console.log('deselecting option', prevSelected);
    //update css from previously selected item if there is one
    if(prevSelected){
        prevSelected.classList.remove('selected');
        
        prevPaymentContainer = prevSelected.querySelector('.payment-container')
        if(prevPaymentContainer) prevPaymentContainer.style=''
    }
}