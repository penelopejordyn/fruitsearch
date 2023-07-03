const input = document.querySelector('#fruit');
let div = document.querySelector('#suggestions');
let ul = document.querySelector('#ul')




const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


	





	// Get references to the input form and the list
let inputForm = document.getElementById("fruit")
let list = document.getElementById("myList")

// Add a click event listener to the input form
inputForm.addEventListener("click", function() {
  // Show the list
  div.style.display = "block"
});
document.addEventListener("click", function(event) {
	console.log(event.target)
	// Check if the clicked element is the input form or within the list
	if (event.target !== inputForm) {
	  // Hide the list
	  div.style.display = "none"
	}
})



userinput = input.value






function searchHandler() { //filters results
	ul.innerHTML = ""
	var filteredArray = []
	

	
	var filteredArray = fruits.filter(function(value) {
		return value.toLowerCase().includes(input.value.toLowerCase());
})
console.log(filteredArray)
console.log(input.value)

filteredArray.forEach(function(item) { //for each item in the array

	
	

	
	let li = document.createElement("li") //create an li
	li.innerHTML = item //create a textnode containing the item and append it to the li
	
	
	ul.appendChild(li) //append the li to the ul
	
	
})

}










function useSuggestion(e) { //populate search bar
	input.value = e.target.innerHTML
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);