function Node(value = null) {
    return {value: value, nextNode: null};
}

const blah = Node('blah');
const list = LinkedList();

list.append('blah');
list.prepend('blah2');
list.append('blah3');

console.log(list.contains('blah3'));

function LinkedList() {

    return {
        listHead: null,

        append: function (value){
            const newNode = Node(value);

            if (this.listHead) {
                let current = this.listHead;
                while (current.nextNode !== null) {
                    current = current.nextNode;
                }
                current.nextNode = newNode;
            } else {
                this.listHead = newNode;
            }
        },
    
        prepend: function (value){
            const newNode = Node(value);

            newNode.nextNode = this.listHead;
            this.listHead = newNode;
        },
    
        size: function () {
            let count = 0;
            let current = this.listHead;
            while(current !== null) {
                current = current.nextNode;
                count++;
            }

            return count;
        },
    
        head: function () {
            return this.listHead;
        },

        tail: function () {
            if (this.listHead) {
                let current = this.listHead;
                while (current.nextNode !== null) {
                    current = current.nextNode;
                }
                return current;
            } else {
                return this.listHead;
            }
        },
    
        at: function (index) {
            let current = this.listHead;
            for (let i = 0; i < index; i++) {
                if(!current.nextNode) {
                    return null;
                }
                current = current.nextNode;
            }
            return current;
        },
    
        pop: function () {
            this.at(this.size()-2).nextNode = null;
        },
    
        contains: function (value) {
            let current = this.listHead;
            for(let i = 0; i < this.size(); i++) {
                if(current.value === value) {
                    return true;
                }
                current = current.nextNode;
            }
            return false;
        },
    
        find: function (value) {},
    
        toString: function () {},

    }

 }