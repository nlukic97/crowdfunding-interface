// Bookmark button events
document.querySelector('.bookmark-button').addEventListener('click',function(){
    this.classList.toggle('bookmarked')
})


// hamburger icon events
document.querySelector('#hamburger-icon').addEventListener('click',function(){
    document.body.classList.toggle('hamburger-open')
})