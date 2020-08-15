const { createQueue } = require('./index')

function createPriorityQueue() {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        //add or enqueue
        enqueue(item, isHighPriority = false) {
            isHighPriority ?
                highPriorityQueue.enqueue(item) :
                lowPriorityQueue.enqueue(item)
        },
        //dequeue
        dequeue() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }
            return lowPriorityQueue.dequeue()
        },
        peek() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }
            return lowPriorityQueue.peek()
        },
        get length() {
            return lowPriorityQueue.length + highPriorityQueue.length
        },
        isEmpty() {
            return lowPriorityQueue.isEmpty() && highPriorityQueue.isEmpty()
        }
    }
}

const q = createPriorityQueue()

q.enqueue('A fix here')
q.enqueue('A bug there')
q.enqueue('New feature')

console.log(q.dequeue())
q.enqueue('Emergency Task', true)
console.log(q.peek())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
