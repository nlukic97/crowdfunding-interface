export function update(){
    //this will add the progress percentage to the progress
    let gathered = parseInt(document.querySelector('#gathered').innerText.replaceAll(',',''))
    let goal = parseInt(document.querySelector('#goal').innerText.replaceAll(',',''))
    
    
    let percentage;

    if(gathered >= goal){
        percentage = 100
    } else {
        percentage = Math.floor(gathered/ goal * 100)
    }
    
    document.querySelector('.progress-bar').style='width:' + percentage + '%';

}