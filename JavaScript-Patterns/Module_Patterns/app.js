//Basic Structure
/*
(function() {
    //Declare private variables and fnctions

    return {
        //Declare public variables and functions
    }
})();
*/

/*

const UICtrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

*/


//Revealing Module Pattern - will map object literal to private function to reveal. Revealing certain private methods

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Items Added...');
    }
    function get(id) {
        return data.find(item => {
            return item.id === id
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'kanu'});
console.log(ItemCtrl.get(1));