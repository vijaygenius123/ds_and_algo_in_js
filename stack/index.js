

function createStack() {
    const array = []

    return {
        //push
        push(item) {
            array.push(item)
        },
        //pop
        pop() {
            return array.pop()
        },
        //peek
        peek() {
            return array[array.length - 1]
        },
        //length
        get length() {
            return array.length
        },
        //isEmpty
        isEmpty() {
            return array.length === 0
        }
    }
}

const lowerBodyStack = createStack()

lowerBodyStack.push('inners')
lowerBodyStack.push('pants')
lowerBodyStack.push('socks')
lowerBodyStack.push('shoes')

console.log(lowerBodyStack.pop())
console.log(lowerBodyStack.peek())
console.log(lowerBodyStack.length)