const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },

    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; //List of users
    return {
        register: function(user) {
             users[user.name] = user;
             user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single User Message
                to.receive(message, from);
            } else {
                //Mass Message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const dhinesh = new User('Dhinesh');
const kanu = new User('Kanu');
const bru = new User('Bruntha');

const chatroom = new Chatroom();
chatroom.register(dhinesh);
chatroom.register(kanu);
chatroom.register(bru);

dhinesh.send('Motleen', kanu);
kanu.send('Mummy finger', bru);
bru.send('Helloo');