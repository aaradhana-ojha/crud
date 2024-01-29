// Retrieve items from localStorage or initialize an empty array
let items = JSON.parse(localStorage.getItem('items')) || [];

const renderItems = () => {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        const deleteButton = createDeleteButton(item.id);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
};

const createDeleteButton = (itemId) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteItem(itemId));
    return deleteButton;
};

const addItem = () => {
    const itemNameInput = document.getElementById('itemName');
    const itemName = itemNameInput.value.trim();

    if (itemName) {
        const newItem = { id: items.length + 1, name: itemName };
        items.push(newItem);
        saveToLocalStorage();
        renderItems();
        itemNameInput.value = '';
        hideAddForm();
    }
};

const deleteItem = (itemId) => {
    items = items.filter(item => item.id !== itemId);
    saveToLocalStorage();
    renderItems();
};

const showAddForm = () => {
    document.getElementById('addItemForm').style.display = 'block';
};

const hideAddForm = () => {
    document.getElementById('addItemForm').style.display = 'none';
};

const saveToLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(items));
};

renderItems();
