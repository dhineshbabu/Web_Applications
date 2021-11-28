//Storage  controller
const StorageCtrl = (function(){
    //public methods
    return{
        storeItem: function(item){
            let items;
            //Check if any items in local storage
            if(localStorage.getItem('items') === null){
                items = [];
                //push new item
                items.push(item);
                //Set local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //Get what is already in LS
                items =JSON.parse(localStorage.getItem('items'));

                //Push the new item
                items.push(item);
                //Set LS again
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function(){
            let items;
            if(localStorage.getItem('items')===null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                }
            });
            //Re set the local storage
            localStorage.setItem('items', JSON.stringify(items));
        },

        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'));
            
                    items.forEach(function(item, index){
                        if(id === item.id){
                            items.splice(index, 1);
                        }
                    });
                    //Re set the local storage
                    localStorage.setItem('items', JSON.stringify(items));
        },

        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }
    }
})();


//Item Contoller
const ItemCtrl = (function() {
    //Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structures / State
    const data = {
        // items: [
        //     // {id: 0, name: 'Steak Dinner', calories: 1200},
        //     // {id: 1, name: 'Cookie', calories: 400},
        //     // {id: 2, name: 'Eggs', calories: 300}
        // ],
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }

    //Public Methods
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        },
        addItem: function(name, calories) {
            // console.log(name, calories);
            //Create ID
            let ID;

            if(data.items.length > 0) {
                ID = data.items[data.items.length-1].id + 1;
            } else {
                ID = 0;
            }

            //Calories to number
             calories = parseInt(calories);

            //Create new item
            newItem = new Item(ID, name, calories);

            //Add to items Array
            data.items.push(newItem);
            return newItem;
        },

        getItemById: function(id) {
            let found = null;

            //Loop through the items
            data.items.forEach(function(item){
                if(item.id === id) {
                    found = item
                }
            });
            return found;
        },

        updateItem: function(name, calories) {
            //Calories to number 
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item) {
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },

        deleteItem: function(id) {
            //Get the ids
            const ids = data.items.map(function(item) {
                return item.id;
            });
            //Get index
            const index = ids.indexOf(id);
            //Remove item
            data.items.splice(index,1);
        },

        clearAllItems: function(){
            data.items = [];
        },
        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function(item) {
           return data.currentItem;
        },
        getTotalCalories: function() {
            let total = 0;

            //Loop through items and add cals
            data.items.forEach(function(item){
                total += item.calories;
            });

            //Set total cal in data structure
            data.totalCalories = total;

            //Return total
            return data.totalCalories;
        }
    }
})();



//UI Controller
const UICtrl = (function() {
   const UISelectors = {
       itemList: '#item-list',
       listItems: '#item-list li',
       addBtn: '.add-btn',
       updateBtn: '.update-btn',
       deleteBtn: '.delete-btn',
       backBtn: '.back-btn',
       clearBtn: '.clear-btn',
       itemNameInput: '#item-name',
       itemCaloriesInput: '#item-calories',
       totalCalories: '.total-calories'
   }
    //Public Methods
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item){
                html += ` <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            </li>`
            });
            
            //Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },

        addListItem: function(item) {
            //Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            //Create li element
            const li = document.createElement('li');
            //Add class
            li.className = 'collection-item';
            //Add iD
            li.id = `item-${item.id}`;
            //Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
            //Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },

        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Turn Node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem) {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
                }
            });
        },

        deleteListItem: function(id){
            const itemsID = `#item-${id}`;
            const item = document.querySelector(itemsID);
            item.remove();
        },

        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemCaloriesInput).value = "";
        },

        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },

        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Turn nodelist into array
            listItems = Array.from(listItems);
            listItems.forEach(function(item){
                item.remove();
            });
        },


        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },

        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            
        },
        showEditState: function() {
            
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            
        },
        getSelectors: function() {
            return UISelectors;
        }
        
    }
    
})();


//App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {

    //Load Event Listeners
    const loadEventListeners = function()  {
        //Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        //Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on Enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        //Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

         //Delete item event
         document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

         //back btn event
         document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);


         //Clear items event
         
         document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

    //Add Item Submit
    const itemAddSubmit = function(e)  {
        // console.log('Add');
        //Get form input form UI controller
        const input = UICtrl.getItemInput();
        
        //Check for name and Calorie input
        if(input.name !== '' && input.calories !== '') {
            //Add item 
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            //Add item to the UI
            UICtrl.addListItem(newItem);

            //Get the total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            //Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);
            
            //Store in local storage
            StorageCtrl.storeItem(newItem);

            ///Clear Fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }

    //Click eidt item

    const itemEditClick = function(e) {
        if(e.target.classList.contains('edit-item')){
            //Get the list item ID (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;

            //Break into an array
            const listIdArr = listId.split('-');

            //get the actual ID
            const id = parseInt(listIdArr[1]);

            //Get item
            const itemToEdit = ItemCtrl.getItemById(id);

           //set current item
           ItemCtrl.setCurrentItem(itemToEdit);

           //Add item to form
           UICtrl.addItemToForm();
        }
        
        e.preventDefault();
    }

    //Update irem submit
    const itemUpdateSubmit = function(e) {
        //Get item input
        const input = UICtrl.getItemInput();

        //Update item
        const updateItem = ItemCtrl.updateItem(input.name, input.calories);

        //Update the UI
        UICtrl.updateListItem(updateItem);

          //Get the total calories
          const totalCalories = ItemCtrl.getTotalCalories();
          //Add total calories to UI
          UICtrl.showTotalCalories(totalCalories);

          //Update local storage
          StorageCtrl.updateItemStorage(updateItem);

          UICtrl.clearEditState();

        e.preventDefault();
    }

    //Delete button event

    const itemDeleteSubmit = function(e) {
        
        //Get current  item
        const currentItem = ItemCtrl.getCurrentItem();
        
        //Delete from Data structure
        ItemCtrl.deleteItem(currentItem.id);

        //Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        //Get the total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Clear items event
    const clearAllItemsClick = function(){
        //clear all items from data structure
        ItemCtrl.clearAllItems();

        //Get the total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Remove from UI
        UICtrl.removeItems();

        //Clear from Local Storage
        StorageCtrl.clearItemsFromStorage();

        //Hide the UI
        UICtrl.hideList();

        
    }
    
    //Public Methods
    return {
        init: function() {
            
            console.log('Initializing App....');

            //Clear edit state / set initial set
            UICtrl.clearEditState();

            //Fetch items from data structure
            const items = ItemCtrl.getItems();

            //Check if any items

            if(items.length === 0){
                UICtrl.hideList();
            } else {
                UICtrl.populateItemList(items);
            }

             //Get the total calories
             const totalCalories = ItemCtrl.getTotalCalories();
             //Add total calories to UI
             UICtrl.showTotalCalories(totalCalories);

            //Populate list with Items
            UICtrl.populateItemList(items);

            ///Load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, StorageCtrl, UICtrl);

App.init();