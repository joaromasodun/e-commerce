const hamburger = document.querySelector('.hamburger')
const navLists = document.querySelector('.nav-lists')

hamburger.addEventListener('click', function() {
	navLists.classList.toggle('swipe')
})
