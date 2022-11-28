const products = document.querySelectorAll('.product')
const ctaLists = document.querySelectorAll('.cta-lists')

function ShowClassList(i) {
          ctaLists[i].classList.add('show-cta')
}

products.forEach(product => {
          product.addEventListener('mouseover', function() {
                    ctaLists.forEach((ctaList, i) => {
                              ShowClassList(i)
                    })
          })

})


// ctaLists.classList.add('show-cta')

//   ctaLists.classList.remove('show-cta')