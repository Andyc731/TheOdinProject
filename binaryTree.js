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
                console.log(succ);
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

        levelOrder: function(current = this.root, array = [], queue = []) {
            if (!current) return current;
            array.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (queue.length > 0) {
                this.levelOrder(queue.shift(), array, queue);
            }

            return array;

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
const array = [...sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])];


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


const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.levelOrder());

prettyPrint(tree.root)
