{

  const s1 = new Set([1, 2, 2, 3])
  const a = [...s1]
  console.log( JSON.stringify(a) ) // 1, 2, 3
  
  let s2 = new Set()
  s2.add(1)
  s2.add(3)  

}