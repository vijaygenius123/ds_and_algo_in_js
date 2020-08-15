

function createQueue() {
    const queue = []

    return {

        //add or enqueue
        enqueue(item) {
            return queue.unshift(item)
        },
        //remove or dequeue
        dequeue() {

            return queue.length > 0 ? queue.pop() : 'No Items Left'
        },
        //peek
        peek() {
            return queue.length > 0 ? queue[queue.length - 1] : 'No Item In Queue'
        },
        //length
        get length() {
            return queue.length
        },
        //isEmpty
        isEmpty() {
            return queue.length === 0
        }
    }
}

const todos = createQueue()
console.log(todos.isEmpty())
todos.enqueue("Task 1")
todos.enqueue("Task 2")
todos.enqueue("Task 3")

console.log(todos.peek())
console.log(todos.dequeue())
console.log(todos.dequeue())
console.log(todos.dequeue())
console.log(todos.dequeue())
console.log(todos.peek())