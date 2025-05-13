type Square = {
  width: number
  height: number
}

type Circle = {
  radius: number
}

type Border<T> = {
  weight: 'light' | 'normal' | 'bold'
  color: string
  shape: T
}

let b: Border<Square> = {
  weight: 'bold',
  color: '#000000',
  shape: {
    width: 24,
    height: 36
  }
}
