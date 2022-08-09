---
title: JS 异步发展历程
---

### JS 异步发展历程

---

```markdown
什么是异步?
当一个函数调用之后，不会立刻得到结果，它有个状态来记录调用之后的状态，异步调用之后不会影响后面代码的执行。
```

<br />

> JS 异步发展历程

<h3>1. callback</h3>

```javascript
// ajax请求
$.ajax('get', 'url1.com', function () {
  $.ajax('get', 'url2.com', function () {
    // do morething
  })
})
```

> 优点：使用简单

> 缺点：形成回调地狱，不利于代码阅读和维护

<h3>2. Promise</h3>

`Promise`一定程度上解决了回调地狱的问题

```javascript
const p = new Promise((resolve,reject)=>{
  resolve(...)
})

p.then(e=>{
  resolve(e)
}).then(e=>{
  console.log(e)
})
```

> 优点：
>
> 1.  一旦状态改变就不会在变，任何时候都可以得到这个结果
> 2.  避免了层层嵌套的回调函数

> 缺点：
>
> 1. 无法取消`Promise`
> 2. 当处于`pending`的时候无法得知是失败还是成功

<h3>3. Generator</h3>

`Generator`函数是`ES6`提供的一种异步编程解决方案整个`Generator`函数就是一个封装的异步任务。

```javascript
function *gen(){
  let a = yiled 111
  console.log(a)
  let b = yiled 222
  console.log(b)
  let c = yiled 333
  console.log(c)
}

cosnt it = gen()
it.next() // 111
it.next() // 222
it.next() // 333
```

<h3>4. async/await</h3>

`ES7`中引入了`async/await`概念。是`Generator`的语法糖。

> 优点：代码清晰，不用想`Promise`写很多的`then`链，就可以处理回调地狱的问题，并且错误也可以被`try/catch`捕获

```javascript
function request() {
  setTimeout(() => {
    conlose.log(num * 2)
  }, 1000)
}

async function fn() {
  await request(1) // 2
  await request(2) // 4
}
```
