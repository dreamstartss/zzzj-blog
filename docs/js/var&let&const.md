---
title: var、let、cosnt的区别
date: 2022-08-08 22:01
---

### var、let、const 的区别

---

1. `var`存在变量提升，`let`和`const`不存在变量提升
2. `var`在全局声明的变量会挂载到 window 对象上，`let`和`cosnt`不会
3. `var`和`let`可以先声明，后使用，`const`必须声明立即使用
4. `let`和`const`存在暂时性死区，在块级作用域中在使用之前不能使用未声明的变量，`var`则可以先使用后赋值
