// ------------- init -------------


//adding listener for click on 'back this project' button to display the modal and overlay
document.getElementById('back-project-btn').addEventListener('click',function(){   
    showModal('back-project-open')
})


//button to close the modal
document.getElementById('exit-modal-btn').addEventListener('click',function(){
    hideModal('back-project-open')
})


document.querySelector('ul.menu').addEventListener('click',function(){
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
        
        console.log('Data to submit', data);
        
        hideModal('back-project-open')
        showModal('thankyou-open')
    })
})



// Once user clicks this, it will unselect the selected option on the pledging modal
document.getElementById('close-thankyou-modal').addEventListener('click',function(){
    deselectOtherOption()
    hideModal('thankyou-open')
})




// ------------ Methods ------------

// selecting all options in the pledge modal to add (or not add) a click event listener

document.querySelectorAll('.pledge-modal .pledge-option').forEach(function(optionCard){
    
    //Only add the click event listener for options that are in stock (do not contain the 'out-of-stock' class)
    if(optionCard.classList.contains('out-of-stock') === false){   

        optionCard.addEventListener('click',function(){    
            // If it is already selected, we will not re-select it
            if(optionCard.classList.contains('selected') === false){
                selectNewPaymentContainer(optionCard)
            }
        })

    }
})











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