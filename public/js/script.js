//adding listener for click on 'back this project' button to display the modal and overlay
document.getElementById('back-project-btn').addEventListener('click',function(){
    console.log('bookmark buttom clicked');
    
    handleRadioInputs()
    
})

function handleRadioInputs(){
    let radios = document.querySelectorAll('.pledge-modal input[type=\'radio\']')
    console.log(radios);
    
    radios.forEach(function(radio){
        let option = radio.parentNode.parentNode

        //If the option is out of stock, disable the ability to select it (and affect the its css upon click) and do not add a click listener to the component
        if(option.classList.contains('out-of-stock')){
            radio.setAttribute('disabled','true')
            
        //if pledge option is in stock, add the listener for when the radio button is changed
        } else {
            option.addEventListener('click',function(){
                radio.checked = true;

                let prevSelected = document.querySelector('.pledge-option.selected')
                if(prevSelected) prevSelected.classList.remove('selected')
                
                //adding the selected to the component of the selected input
                radio.parentNode.parentNode.classList.add('selected')
            })

        }


    })
}




handleRadioInputs()