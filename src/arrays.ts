{

let array: string[] = ['a', 'b', 'c']
let complexArray: Array<String | Number> = ['a', 2, 'x', 2.3]
let array2d = [['x','o','x'],['x','x','o'],['o','o','x']]

let list: number[] = []
list.push(3.14)

// Map & Filter

const a = [1, 32, 7, 16, 9, 11]
a.every(elem => elem > 0) // true
a.some(elem => elem > 30) // true
a.filter(elem => elem % 2 == 0) // [32, 16]
a.map((n, i) => ({ i, n, even: n % 2 == 0 })) // [{ i:0, n:1, even:false}, …]

// Iteration

for (let i = 0; i < a.length; i++) { console.log(a[i]) }
for (const elem in a) { console.log(elem) }
for (const elem of a) { console.log(elem) }
a.forEach(elem => { console.log(elem) })

// Reduce

const employees = [{id:23, name:'Frank'}, {id:73, name:'Sally'}]
const byId = employees.reduce((acc, emp) => {
  acc[emp.id] = emp
  return acc
}, {})
byId[23].name === 'Frank' // VS
employees.find(emp => emp.id == 23)?.name === 'Frank'

}
