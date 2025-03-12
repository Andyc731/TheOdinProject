// import {LinkedList, Node} from './linkedList';

function HashMap () {
    return {
        bucket: new Array(16).fill(null),

        loadFactor: 0.75,

        storedKeys: 0,

        hash: function (value) {
            if (typeof value !== 'string') {
                return null;
            }
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
                this.storedKeys++;
                this.bucket[index] = newList;
            } else if(list.containsKey(key)) {
                list.at(list.findKey(key)).value = value;
            } else {
                list.append(key, value);
                this.storedKeys++;
            }
            if (this.storedKeys > this.bucket.length * this.loadFactor) {
                this.resize();
            }
        },

        resize: function () {

            const newBucketSize = this.bucket.length * 2;
            const newBucket = Array.from({length: newBucketSize}, () => null);
    
            for (let i = 0; i < this.bucket.length; i++) {
                const currentBucket = this.bucket[i];
                if (currentBucket) {
                    for (let j = 0; j < currentBucket.size(); j++) {
                        const newIndex = this.hash(currentBucket.at(j).key) % newBucketSize;
                        const newList = LinkedList();
                        newList.append(currentBucket.at(j).key, currentBucket.at(j).value);
                        newBucket[newIndex] = newList;
                    }
                }
            }
            this.bucket = newBucket;
        },

        get: function (key) {
            const index = this.hash(key) % this.bucket.length;
            if (this.bucket[index] === null || !this.bucket[index].listHead) {
                return null;
            } else {
                return this.bucket[index].at(this.bucket[index].findKey(key)).value;
            }
        },

        has: function (key) {
            return (this.get(key)) ? true : false;
        },

        remove: function(key) {
            const index = this.hash(key) % this.bucket.length;
            if (this.bucket[index]) {
                this.bucket[index].removeAt(this.bucket[index].findKey(key))
                this.storedKeys--;
            }
        },

        length: function() {
            return this.storedKeys;
        },

        clear: function() {
            this.bucket = new Array(16).fill(null)
            this.storedKeys = 0;
        },

        keys: function() {
            const array = [];
            for (let list of this.bucket) {
                if (list) {
                    for (let i = 0; i < list.size(); i++) {
                        array.push(list.at(i).key);
                    }
                }
            }
            return array;
        },

        values: function() {
            const array = [];
            for (let list of this.bucket) {
                if (list) {
                    for (let i = 0; i < list.size(); i++) {
                        array.push(list.at(i).value);
                    }
                }
            }
            return array;
        },

        entries: function() {
            const array = [];
            for (let list of this.bucket) {
                if (list) {
                    for (let i = 0; i < list.size(); i++) {
                        const pair = [list.at(i).key, list.at(i).value];
                        array.push(pair);
                    }
                }
            }
            return array;
        }
    }
}

const test = HashMap();


test.set('erkj', '1');
test.set('3', 'erkj');
test.set('erkj', '4');
test.set('2', 'erkj');
test.set('4', 'erkj');
test.set('5', 'erkj');
test.set('6', 'erkj');
test.set('7', 'erkj');
test.set('8', 'erkj');
test.set('9', 'erkj');
test.set('10', 'erkj');
test.set('11', 'erkj');
test.set('12', 'erkj');
test.set('13', 'erkj');
test.set('14', 'erkj');
test.set('15', 'erkj');
test.set('16', 'erkj');

console.log(test.bucket.length);

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