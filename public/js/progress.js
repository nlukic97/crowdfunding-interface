//this will add the progress percentage to the progress
let gathered = parseInt(document.querySelector('#gathered').innerText.replaceAll(',',''))
let goal = parseInt(document.querySelector('#goal').innerText.replaceAll(',',''))

console.log(gathered,goal);

let percentage = Math.floor(gathered/ goal * 100)
console.log(percentage);

document.querySelector('.progress-bar').style='width:' + percentage + '%';