// Initial count
let count = 0;

// Value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

// Loop throught the buttons
btns.forEach((btn) => {
  // Add event listener
  btn.addEventListener('click', function(e) {
    // Create button valiable
    const button = e.currentTarget.classList;
    if(button.contains('decrease')) {
      count--;
    } else if(button.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if(count > 0) {
      value.style.color = 'green';
    } 
    if (count < 0) {
      value.style.color = 'red';
    }
    if(count === 0) {
      value.style.color = "gray"
    }
    value.textContent = count;
  })
})