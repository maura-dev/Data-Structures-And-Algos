class SingleLinkedListNode {
	//a list node contains a value and a pointer to the next node
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class SingleLinkedList  {
    //linked list contains a list node
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //methods to be implemented

    //find node at an index
    findNode(index){	
    	//check if the index is valid
    	if(index > this.length - 1){
    		return null;
    	} else{
    		//set the head as the starting point
    		let starterNode = this.head;
	    	for(let i=0 ; i<this.length ; i++){
	    		if(index !== i){
	    			//shift the starting point to the next node
	    			starterNode = starterNode.next;
	    		} else{
	    			break;
	    		}
	    	}
	    	return starterNode;
	    }
    }

    //append a new node(at the tail) 
    append(_value){
    	let newNode = new SingleLinkedListNode(_value);
    	//check if LL has a valid head
    	if(this.head === null){
    		this.head = newNode;
    		this.tail = newNode;
    	} else {
    		//find the tail node 
    		let prevTail = this.findNode(this.length - 1);//check out later
    		//link current tail to new node
    		prevTail.next = newNode;
    		//set the tail to be the new node
    		this.tail = newNode;
    	}
    	this.length++;
    }

    //remove a node from the tail
    pop(){	
    	//check if head is null
    	if(this.head === null || this.tail === null){
    		return null;
    	} else if(this.length === 1){
    		this.head = null;
    		this.tail = null;
    		this.length = 0;
    	}else {
    		//find the node before the tail
    		let nodeBeforeTail = this.findNode(this.length-2);
    		nodeBeforeTail.next = null;
    		this.tail = nodeBeforeTail;
    		this.length--;
    	}	
    }

    //remove node from head
    unshift(){
    	//check if head is null
    	if(this.head === null || this.tail === null){
    		return null;
    	} else if(this.length === 1){
    		this.head = null;
    		this.tail = null;
    		this.length = 0;
    	}else {
    		//find the node after the head
    		let nodeAfterHead = this.head.next;
    		this.head = nodeAfterHead;
    		this.length--;
    	}	
    }

    //prepend a new node(at the head)
    prepend(_value){
    	let newNode = new SingleLinkedListNode(_value);
    	//check if LL has a valid head
    	if(this.head === null){
    		this.head = newNode;
    		this.tail = newNode;
    	} else{
    		//store the current head
    		let prevHead = this.head;
    		//point the new node to the current head
    		newNode.next = prevHead;
    		//set the new node as the new head
    		this.head = newNode;
    	}
    	this.length++;
    }
    // add at an index, 
    addAtIndex(_value, index){
    	//check if the index is valid
    	if(index > this.length){
    		return null;
    	} else{
    		//check if index is the head
    		if(index === 0){
    			this.prepend(_value)
    		}
    		//check if index is the tail
    		else if(index === this.length){
    			this.append(_value)
    		} else{
	    		let newNode = new SingleLinkedListNode(_value);
	    		let nodeBeforeIndex = this.findNode(index - 1);
	    		let currentNodeAtIndex = this.findNode(index);
	    		//point new node to node at the index previously
	    		newNode.next = currentNodeAtIndex
	    		//point node before index to new node
	    		nodeBeforeIndex.next = newNode;
	    		this.length++;
	    	}
    	}
    }
    // remove at an index
    removeAtIndex(index){
    	//check if the index is valid
    	if(index > this.length - 1){
    		return null;
    	} else{
    		//check if index is the head
    		if(index === 0){
    			this.unshift()
    		}
    		//check if index is the tail
    		else if(index === this.length - 1){
    			this.pop()
    		} else{
	    		let nodeBeforeIndex = this.findNode(index - 1);
	    		let nodeAfterIndex = this.findNode(index + 1);
	    		//point node before index to node after index
	    		nodeBeforeIndex.next = nodeAfterIndex;
	    		this.length--;
    		}
    	}
    }
   
    //remove a node
    removeNode(_value){
    	let starterNode = this.head;
    	for(let i=0; i<this.length; i++){
    		if(starterNode.value !== _value){
    			starterNode = starterNode.next;
    		} else{
    			this.removeAtIndex(i);
    		}
    	}
    }
    //return all node values as an array
   	toArray(){
   		let starterNode = this.head;
   		let arr = [];
    	for(let i=0 ; i<this.length ; i++){
    		if(starterNode !== null){
    			arr.push(starterNode.value)
    			starterNode = starterNode.next;
    		} else {
    			break;
    		}
    	}
    	return arr;
   	}

}

let myLinkedList = new SingleLinkedList();
myLinkedList.prepend("Maureen");
 myLinkedList.append("Ezinne");
 myLinkedList.append("Anyanwu");
 myLinkedList.removeNode("Ezinne")
 // myLinkedList.();
 // console.log(myLinkedList.findNode(1))
// myLinkedList.addAtIndex("Sabina", 1)
// myLinkedList.prepend("Sabina");
 // myLinkedList.removeAtIndex(1);
console.log(myLinkedList.toArray());
console.log(myLinkedList)

// console.log(myLinkedList.findNode(1))


