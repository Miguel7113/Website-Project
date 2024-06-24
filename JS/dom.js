// DOM methods yo aid with element selection
// selection via ID of elements
// a variable for reference
let heading = document.getElementById('main-heading')
let input_field = document.getElementById('user input')
// selection via class name
let highlightedParagraph = document.getElementsByClassName('highlight')
// selection via tag/element name
let paragraphs = document.getElementsByTagName('p')

// special method : queryselector
// document.querySelector , document.query.SelectorAll
// if used on a tag name : it will pick the first element
let firstParagraph = document.querySelector('p')
// for example if used to reference a class simply indicate with .
let highlighted = document.querySelector('.highlight')
// for example if used to reference an id simply indicate with a #
let inputField = document.querySelector('#user-input')
// querySelectorAll is normally used to reference tags
let allparagraphs = document.querySelectorAll('p')

// Manipulating Elements usinf the DOM
// 1. changing the content
// 2. changing HTML content
// 3. changing styling
// 4. changing attributes (add, remove classes, ID's )
// 5. listen for events : click, submit, reload, copy : we use the method .addEventListener

// 1
heading.textContent = "Welcome to JAVASCRIPT DOM"
// 2
// let contentDiv.innerHTML = '<p> Changed div into paragraph element </p>'

// 3
highlighted.style.color = 'blue'
highlighted.style.font = '24px'

// 4
// 5
let button = document.getElementById('change-heading')
buttonChange.addEventListener('click', function(){
    // change color of the heading based on the class
    heading.classList.add('styledcontent')
})

// to listen for a page load
document.addEventListener('DOMContentLoaded', function(){


})