{

const queue: string[] = []
queue.push('Mark') // enqueue
queue.push('Mary') // enqueue
console.log(queue) // Mark, Mary
queue.shift() === 'Mark' // dequeue
console.log(queue) // Mary

type Node<T> = { val: T, next: Node<T> }

class Queue<T> {
  private top: Node<T>
  private end: Node<T>
  size = 0
  enqueue(val: T) {
    const node = { val, next: null }
    if(!this.end) { this.top = node }
    else { this.end.next = node }
    this.end = node
    this.size++
  }
  dequeue(): T {
    const node = this.top
    this.top = node?.next
    if(!this.top) this.end = null
    this.size--
    return node?.val
  }
}
const lqueue = new Queue<string>()
lqueue.enqueue('Mark')
lqueue.enqueue('Mary')
console.log( lqueue.dequeue() ) // Mark
console.log( lqueue.size ) // 1

}