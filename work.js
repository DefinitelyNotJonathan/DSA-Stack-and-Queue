class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data
    }
    peek() {
        if(this.top === null) {
            console.log('Stack is empty');
            return false;
        }
        return this.top
    }
    isEmpty() {
        if(this.top === null) {
            return true;
        }
        return false;
    }
    display() {
        const node = this.top;
        const stackArr = [];
        if(node === null) {
            console.log('Stack is empty');
            return;
        }
        while(node.next !== null) {
            node = node.next
            stackArr.push(node)
        }
        stackArr.push(node);
        return stackArr;
    }
}


//do these need to be strings? They didn't actually provide any real examples with real data
let starTrek = new Stack('Kirk', null);

starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here

  let comp = s.length-1
    if (s.length == 1) {
        return true
    }

    for (i=0; i<s.length; i++) {
        let front = s[i]
        let back = s[comp]
        if(i === comp) {
            return true
        }
        else if (s.length % 2 == 0 && i == comp-1) {
            if (front == back) {
                return true
            }
        }
        else if (front !== back) {
            return false
        }
        else {
            comp--
        }
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));