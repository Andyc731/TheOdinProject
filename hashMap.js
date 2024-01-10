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
            if (this.bucket[index] === null) {
                const newList = LinkedList();
                newList.append(value);
                this.bucket[index] = newList;
            } else {
                this.bucket[index].append(value);
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
        }
    }
}

const test = HashMap();


test.set('erkj', '1');
test.set('erkj', '2');
test.set('erkj', '3');
test.set('erkj', '4');

console.log(test.bucket[test.hash('erkj') % test.bucket.length].at(2));

function Node(value = null) {
    return {value: value, nextNode: null};
}

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
                if(current.value === value) {
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
                if(current.value === value) {
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
            const newNode = Node(value);
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