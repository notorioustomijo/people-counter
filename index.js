let count = 0;

let countedElements = document.getElementById('counted');

function increment() {
    count += 1;
    countedElements.textContent = count;
}

function decrement() {
    count -= 1;
    countedElements.textContent = count;
}

function cleared() {
    countedElements.textContent = 0;
    count = 0;
    
}