function Node(value, left = null, right = null) {
    return {
        value: value,
        left: left,
        right: right,
    }
}

function Tree (array) {
    return {
        root: buildTree(sortArray(array)),

        
        insert: function (value, current = this.root) {
            if (!current) {
                current = Node(value);
                return current;
            }

            if (value < current.value) {
                current.left = this.insert(value, current.left);
            } else if (value > current.value) {
                current.right = this.insert(value, current.right);
            }
            return current;
        },
        
        delete: function (value, current = this.root) {
            if (!current) {
                return current;
            }
            
            if (current.value > value) {
                current.left = this.delete(value, current.left);
                return current;
            }
            if (current.value < value) {
                current.right = this.delete(value, current.right);
                return current;
            }
            
            if (!current.left) {
                return current.right;
            } else if (!current.right) {
                return current.left;
            }

            else {
                let succParent = current;

                let succ = current.right;
                while (succ.left !== null) {
                  succParent = succ;
                  succ = succ.left;
                }
             
                if (succParent !== current) {
                  succParent.left = succ.right;
                } else {
                  succParent.right = succ.right;
                }
             
                current.value = succ.value;
                return current;
            }
        },

        find: function (value, current = this.root) {
            if (!current) {
                return current;
            }
            
            if (value < current.value) {
                current = this.find(value, current.left);
            } else if (value > current.value) {
                current = this.find(value, current.right);
            }
            return current;
        },

        levelOrder: function(current = this.root, array = [], queue = [], callback = null) {
            if (!current) return current;
            array.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (callback) callback(current);
            if (queue.length > 0) {
                this.levelOrder(queue.shift(), array, queue);
            }

            return array;

        },

        inOrder: function(current = this.root, array = [], callback = null) {
            if (!current) return current;

            
            this.inOrder(current.left, array);
            array.push(current.value);
            if (callback) callback(current);
            this.inOrder(current.right, array);

            return array;
        },

        preOrder: function(current = this.root, array = [], queue = [], callback = null) {
            if (!current) return current;
            array.push(current.value);
            if (current.left) queue.push(current.left);
            if (queue.length > 0) {
                this.preOrder(queue.shift(), array, queue);
            }
            if (current.right) queue.push(current.right);
            if (queue.length > 0) {
                this.preOrder(queue.shift(), array, queue);
            }
            if (callback) callback(current);

            return array;
        },

        postOrder: function(current = this.root, array = [], queue = [], callback = null) {

            if (!current) return current;
            array.unshift(current.value);
            if (current.right) queue.push(current.right);
            if (current.left) queue.push(current.left);
            if (callback) callback(current);
            if (queue.length > 0) {
                this.postOrder(queue.shift(), array, queue);
            }

            return array;

        },

        minValue: function (current = this.root){
            if (!current.left) return current;
            current = current.left;
            return this.minValue(current);
        },

        height: function (node, current = this.find(node.value), height = 0, array = []) {
            if (!current) {
                return current;
            }
            array.push(height);
            if (current.left || current.right) height++
            if (current.left) {
                this.height(node, current.left, height, array);
            }
            if (current.right) {
                this.height(node, current.right, height, array);
            }
            return Math.max(...array);
        },

        depth: function (node, current = this.root, depth = 0) {
            if (!current) {
                return depth;
            }

            if (node.value < current.value) {
                return this.depth(node, current.left, depth + 1);
            } else if (node.value > current.value) {
                return this.depth(node, current.right, depth + 1);
            }
            return depth;
        },

        isBalanced: function(current = this.root, isBalanced = []) {
            if (!current) return true;
            let leftHeight = current.left ? this.height(current.left) + 1: 0;
            let rightHeight = current.right ? this.height(current.right) + 1: 0;
            let difference = leftHeight - rightHeight;
            
            
            if (-1 <= difference && 1 >= difference) {
                this.isBalanced(current.left, isBalanced);
                this.isBalanced(current.right, isBalanced);
                // isBalanced.push(true);
            } else {
                isBalanced.push(false);
            }
            return isBalanced.length === 0;
        }
    }
}

function buildTree(array) {

    if (array.length === 1) {
        return Node(array[0]);
    }
    
    let mid = Math.floor(array.length / 2);
    const value = array.splice(mid, 1)[0];
    if (array.length > 0) {
        const left = buildTree(array.slice(0, Math.floor((array.length+1) / 2)))
        const right = buildTree(array.slice(Math.floor((array.length+1) / 2)));
        return Node(value, left, right);
    }
}

function sortArray(array) {
    const sortedArray = mergeSort(array);
    for (let i = 0; i < sortedArray.length - 2; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            sortedArray.splice(i, 1);
        }
    }
    return sortedArray;
}


function mergeSort(array) {
    
    if (array.length === 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);

    const firstHalf = mergeSort(array.slice(0, mid))
    const secondHalf = mergeSort(array.slice(mid));

    return merge(firstHalf, secondHalf);
}
const array = [...sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 10, 7, 9, 67, 6345, 324])];


// console.log(Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]).root);

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
  }

const prettyPrint = (node, prefix = "", isLeft = true) => {
if (node === null) {
    return;
}
if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
}
console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
}
};


const tree = Tree(array);
// tree.insert(11);
console.log(tree.isBalanced());

prettyPrint(tree.root)
