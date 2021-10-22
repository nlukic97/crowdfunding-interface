import * as ProgressBar from './progress.js';

// ------------- init + event listeners -------------
ProgressBar.update()
var backed = false; //telling us that this user has not backed yet. if they to back the project, this will be set to true so that the number of backers cannot be increased with more donations.

//open 'pledge modal'
document.getElementById('back-project-btn').addEventListener('click',function(){   
    showModal('back-project-open')
})


//close the 'pledge modal'
document.getElementById('exit-modal-btn').addEventListener('click',function(){
    hideModal('back-project-open')
})




//Submit event listeners for all "pledge-submit" buttons
document.querySelectorAll('.pledge-submit-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        let inputToSubmit = btn.parentElement.querySelector('.input-container input')
        
        let data = {
            reward: inputToSubmit.getAttribute('data-reward'),
            amount: inputToSubmit.value
        }

        if(data.amount >= 1){
            console.log('Data to submit', data);
    
            updateNumbers(data.amount, data.reward)
            
            hideModal('back-project-open')
            showModal('thankyou-open')
        } else {
            console.warn('No.');
        }
        
    })
})



// Once user clicks this, it will unselect the selected option on the pledging modal
document.getElementById('close-thankyou-modal').addEventListener('click',function(){
    deselectOtherOption()
    hideModal('thankyou-open')
})



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



// ------------ Methods ------------
function selectNewPaymentContainer(element){
    deselectOtherOption()
    
    //adding the selected to the pledge option that the user clicked
    element.classList.add('selected')
    let paymentContainer = element.querySelector('.payment-container')
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
    
    //update css from previously selected item if there is one
    if(prevSelected){
        prevSelected.classList.remove('selected');
        
        let prevPaymentContainer = prevSelected.querySelector('.payment-container')
        if(prevPaymentContainer) prevPaymentContainer.style=''
    }
}


// update the numbers upon making a donation
function updateNumbers(amountToAdd, reward){
    updateGatheredAmount(amountToAdd)
    
    ProgressBar.update()
    updateAvailableRewards(reward)
    updateBackersNumber()
}


function updateAvailableRewards(reward){
    let elementsClass = reward.toLowerCase().replaceAll(' ','-')
    console.log(elementsClass);
    let amountContainers = document.querySelectorAll(`.amount.${elementsClass}`)

    if(amountContainers != null){
        amountContainers.forEach(label=>{
            label.innerText = parseInt(label.innerText) - 1;
        })
    }
}

function updateBackersNumber(){
    if(backed === false){
        let currBakcers = document.getElementById('backers').innerText.replaceAll(',','')
        document.getElementById('backers').innerText = (parseInt(currBakcers) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        backed = true
    } 
}

function updateGatheredAmount(value){
    let curr = document.getElementById('gathered').innerText.replaceAll(',','')
    let newAmount = parseInt(curr) + parseInt(value)
    document.getElementById('gathered').innerText = newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}