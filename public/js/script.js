//adding listener for click on 'back this project' button to display the modal and overlay
document.getElementById('back-project-btn').addEventListener('click',function(){   
    document.body.classList.add('back-project-open') 
    handleRadioInputs()
    
})

function handleRadioInputs(){
    let radios = document.querySelectorAll('.pledge-modal input[type=\'radio\']')
    console.log(radios);
    
    //unset these listeners when you exit the modal
    radios.forEach(function(radio){
        let option = radio.parentNode.parentNode

        //If the option is out of stock, disable the ability to select it (and affect the its css upon click) and do not add a click listener to the component
        if(option.classList.contains('out-of-stock')){
            radio.setAttribute('disabled','true')
            
        //if pledge option is in stock, add the listener for when the radio button is changed
        } else {
            option.addEventListener('click',function(){

                radio.checked = true;
                console.log('e');

                let prevSelected = document.querySelector('.pledge-option.selected')

                //update css from previously selected item if there is one
                if(prevSelected){
                    prevSelected.classList.remove('selected');
                    
                    prevPaymentContainer = prevSelected.querySelector('.payment-container')
                    if(prevPaymentContainer) prevPaymentContainer.style=''
                }
                
                //adding the selected to the component of the selected input
                radio.parentNode.parentNode.classList.add('selected')
                paymentContainer = radio.parentNode.parentNode.querySelector('.payment-container')
                
                if(paymentContainer) paymentContainer.style.maxHeight = paymentContainer.scrollHeight + 'px'
            })

        }


    })
}




handleRadioInputs()