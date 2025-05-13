// depends on incoming types
class A {
  join(a, b) {
    return a + b
  }
}

// concatenation
class B {
  join(a: string, b: string): string {
    return a + b
  }
}

// addition
class C {
  join(a: number, b: number): number {
    return a + b
  }
}

const c = new C()

c.join('x' as any, 3)