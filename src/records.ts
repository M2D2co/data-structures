type Product = {
  sku: string
  upc: string
  name: string
  price: number
  description: string
  weight: number
  dimensions: {
    depth: number
    height: number
    width: number
  }
}

const product: Product = {
  sku: '',
  upc: '',
  name: '',
  price: 13.99,
  description: '',
  weight: 12.3,
  dimensions: {
    depth: 12.0,
    height: 6.25,
    width: 4.55
  }
}
