{

const stack: string[] = []
stack.push('Mark')
stack.push('Mary')
console.log( stack[stack.length-1] ) // Mary (peek)
console.log( stack ) // Mark, Mary
stack.pop() === 'Mary'

type Node<T> = { val: T, next: Node<T> }
class Stack<T> {
  top: Node<T>
  push(val: T) { this.top = { val, next: this.top } }
  pop(): T {
    const node = this.top
    this.top = node?.next
    return node?.val
  }
  peek(): T { return this.top?.val }
}
const lstack = new Stack<string>()
lstack.push('Mark')
lstack.push('Mary')
console.log( lstack.peek() ) // Mary
lstack.pop() === 'Mary'
console.log( lstack.peek() ) // Mark

}
