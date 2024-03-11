// initialize
let bp = BiggerPicture({
	target: document.body,
})

// grab image links
let imageLinks = document.querySelectorAll('#images a')

// add click listener to open BiggerPicture
for (let link of imageLinks) {
  link.addEventListener("click", openGallery);
}

// function to open BiggerPicture
function openGallery(e) {
	e.preventDefault()
	bp.open({
		items: imageLinks,
		el: e.currentTarget,
	})
}