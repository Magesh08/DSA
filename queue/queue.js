class Queue {
    constructor(maxSize = 16) {
        this.arr = new Array(maxSize);
        this.start = -1;
        this.end = -1;
        this.currSize = 0;
        this.maxSize = maxSize;
    }

    push(newElement) {
        if (this.currSize === this.maxSize) {
            console.error("Queue is full\nExiting...");
            return;
        }
        if (this.end === -1) {
            this.start = 0;
            this.end = 0;
        } else {
            this.end = (this.end + 1) % this.maxSize;
        }
        this.arr[this.end] = newElement;
        console.log(`The element pushed is ${newElement}`);
        this.currSize++;
    }

    pop() {
        if (this.start === -1) {
            console.error("Queue is empty\nExiting...");
            return null;
        }
        const popped = this.arr[this.start];
        if (this.currSize === 1) {
            this.start = -1;
            this.end = -1;
        } else {
            this.start = (this.start + 1) % this.maxSize;
        }
        this.currSize--;
        return popped;
    }

    top() {
        if (this.start === -1) {
            console.error("Queue is empty");
            return null;
        }
        return this.arr[this.start];
    }

    size() {
        return this.currSize;
    }
}

// Test the Queue implementation
const q = new Queue(6);
q.push(4);
q.push(14);
q.push(24);
q.push(34);

console.log(`The peek of the queue before deleting any element: ${q.top()}`);
console.log(`The size of the queue before deletion: ${q.size()}`);
console.log(`The first element to be deleted: ${q.pop()}`);
console.log(`The peek of the queue after deleting an element: ${q.top()}`);
console.log(`The size of the queue after deleting an element: ${q.size()}`);
