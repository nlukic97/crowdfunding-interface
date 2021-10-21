// Bookmark button events
document.querySelector('.bookmark-button').addEventListener('click',function(){
    this.classList.toggle('bookmarked')
})

document.querySelector('ul.menu').addEventListener('click',function(){
    if(document.body.classList.contains('hamburger-open')){
        document.body.classList.remove('hamburger-open')
    }
})


// hamburger icon events
document.querySelector('#hamburger-icon').addEventListener('click',function(){
    document.body.classList.toggle('hamburger-open')
})