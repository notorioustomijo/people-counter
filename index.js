let count = 0;

let countedElements = document.getElementById('counted');

let entries = document.getElementById('entries')

function increment() {
    count += 1;
    countedElements.textContent = count;
}

function decrement() {
    count -= 1;
    countedElements.textContent = count;
}

function save() {
    entries.textContent += count + " - "
    countedElements.textContent = 0;
    count = 0;
    
}

function clearAll() {
    entries.textContent = 'Entries:'
    countedElements.textContent = 0;
    count = 0;
}