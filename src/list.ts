{

  type Node<T> = { val: T, next: Node<T> }
  class LinkedList<T> {
    size = 0
    first: Node<T>
    add(val: T) {
      const node = { val, next: null }
      if(!this.first) this.first = node
      else {
        let x = this.first
        while(x.next != null) x = x.next
        x.next = node
      }
      this.size++
    }
    get(n: number): T {
      let node = this.first
      for(let i = 0; i < n; i++) {
        node = node?.next
      }
      return node?.val
    }
  }
  
  const list = new LinkedList<string>()
  list.add('Mark')
  list.add('Mary')
  list.add('Sally')
  console.log( list.get(1) ) // Mary

}