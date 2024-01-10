// import {LinkedList, Node} from './linkedList';

function HashMap () {
    return {
        bucket: new Array(16).fill(null),

        loadFactor: 0.75,

        hash: function (value) {
            let hash = 4921;
            const primenumber = 37;
            
            for (let i = 0; i < value.length; i++) {
                hash += primenumber * hash + value.charCodeAt(i);
            }

            return hash;
        },

        set: function (key, value) {
            const index = this.hash(key) % this.bucket.length;
            const list = this.bucket[index];
            if (list === null) {
                const newList = LinkedList();
                newList.append(key, value);

                this.bucket[index] = newList;
            } else if(list.containsKey(key)) {
                list.at(list.findKey(key)).value = value;
            } else {
                list.append(key, value);
            }
        },

        resize: function () {

            // const newBucketSize = this.bucket.length * 2;
            // const newBucket = Array.from({length: newBucketSize}, () => null);
    
            // for (let i = 0; i < this.bucket.length; i++) {
            //     if (this.bucket[i] !== undefined) {
            //         const newIndex = this.hash(this.bucket[i].key) % newBucketSize;
            //         newBucket[newIndex] = this.bucket[i];
            //     }
            // }
        },

        get: function (key) {
            const index = this.hash(key) % this.bucket.length;
            if (this.bucket[index] === null) {
                return null;
            } else {
                return this.bucket[index].at(this.bucket[index].find(key)).value;
            }
        },

        has: function (key) {
            return (this.get(key)) ? true : false;
        },

        remove: function(key) {
            this.get(key)
        }
    }
}

const test = HashMap();


test.set('erkj', '1');
test.set('3', 'erkj');
test.set('erkj', '4');
test.set('2', 'erkj');

console.log(test.get('erkj'));

function Node(key = null, value = null) {
    return {key: key, value: value, nextNode: null};
}

function LinkedList() {

    return {
        listHead: null,

        append: function (key, value){
            const newNode = Node(key, value);

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
    
        prepend: function (key, value){
            const newNode = Node(key, value);

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
            if (index < 0) {
                return null;
            }
            return current;
        },
    
        pop: function () {
            this.at(this.size()-2).nextNode = null;
        },
    
        contains: function (value) {
            let current = this.listHead;
            for(let i = 0; i < this.size(); i++) {
                if(current.value === value || current.key === value) {
                    return true;
                }
                current = current.nextNode;
            }
            return false;
        },

        containsKey: function(key) {
            let current = this.listHead;
            for(let i = 0; i < this.size(); i++) {
                if(current.key === key) {
                    return true;
                }
                current = current.nextNode;
            }
            return false;

        },
    
        find: function (value) {
            let current = this.listHead;
            let count = 0;
            for(let i = 0; i < this.size(); i++) {
                if(current.value === value || current.key === value) {
                    return count;
                }
                current = current.nextNode;
                count++;
            }
            return null;
        },

        findKey: function(key) {
            let current = this.listHead;
            let count = 0;
            for(let i = 0; i < this.size(); i++) {
                if(current.key === key) {
                    return count;
                }
                current = current.nextNode;
                count++;
            }
            return null;
        },
    
        toString: function () {
            let str = '';
            let current = this.listHead;
            for(let i = 0; i < this.size(); i++) {

                str += `( ${current.value} ) -> `;
                current = current.nextNode;
            }

            str += 'null';
            return str;
        },
        
        insertAt: function (value, index) {
            const newNode = Node(null, value);
            newNode.nextNode = this.at(index);
            if (index < 0 || index >= this.size()) {
                return null;
            }
            if (index === 0) {
                this.prepend(value);
            } else {
                this.at(index-1).nextNode = newNode;
            }
        },

        removeAt: function (index) {

            if (index < 0 || index >= this.size()) {
                return null;
            }
            if (index === 0) {
                this.listHead = this.at(index + 1);
            } else {
                this.at(index - 1).nextNode = this.at(index + 1);
            }
        }
    }
 }