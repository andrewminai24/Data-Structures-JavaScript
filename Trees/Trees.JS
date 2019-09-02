const a = {val:1}
const b = {val:2}
const c = {val:3}
const d = {val:4}
const e = {val:5}

a.left = b
a.right = c

b.left = d
b.right = e

console.log(a)

/*        (a)
         /    \ 
       (b)       (c)
      / \        / \
     (d)  (e)  null null
    / \   / \ 
 null null  null
*/

// Depth First Search

// preorder (left, right, root)
// 4, 5, 2, 3, 1 

const preorder = (node) => {
  if (!node) return
  preorder(node.left) // left
  preorder(node.right) // right
  console.log(node.val) // root
}

console.log('preorder')
console.log(preorder(a),[4, 5, 2, 3, 1] )



// Inorder (left, root, right)
//b,
const InOrder = (node) => {
	if(!node) return
	InOrder(node.left) //left
	console.log(node.val)// root
	InOrder(node.right) //right
}
	console.log('Inorder');
	console.log(InOrder(a));



// Postorder (root, left, right)
// 1, 2, 4, 5, 3 

const postorder = (node) => {
  if (!node) return
  console.log(node.val) // root
  postorder(node.left) // left
  postorder(node.right) // right  
}

console.log('postorder')
console.log(postorder(a), [1, 2, 4, 5, 3])

// Breath First Search
// Print the nodes closet to the root


const BFS = (node) => {
}
