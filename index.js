const products = document.querySelectorAll('.product')
const ctaLists = document.querySelector('.cta-lists')


products.forEach(product => {
          product.addEventListener('mouseover', function() {
                    alert('Hello')
          })
})