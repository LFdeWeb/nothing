function test() {
  console.log(1)
  setTimeout(() =>{
    console.log(2)
  }, 0)
  console.log(3)

  function b(x, y, a) {
    arguments[2] = 10
    console.log(a)
  }
  b(1,2,3)
  function f(x,y) {
    x=10
    console.log(
      arguments[0],
    arguments[1]
  )
  }
  f()

}
test()