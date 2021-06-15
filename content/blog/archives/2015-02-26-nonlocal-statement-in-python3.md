---
title: "Python 3 中的 nonlocal 语句"
date: 2015-02-26
description:
tags:
- Python
---

最近在看 Python 3，其中变量作用域增加了 `nonlocal` 关键字，用来指定非全局、非本地作用域外的封闭作用域中的变量。

```peg
nonlocal_stmt ::=  "nonlocal" identifier ("," identifier)*
```

> `nonlocal`语句会让所列标示符`identifier`引用之前的最近封闭作用域的绑定变量，除了全局作用域外。
> 但是`nonlocal`必须引用之前封闭作用域存在的变量（global则可以声明不存在的）。
> 而且`nonlocal`语句所声明的标示符不能与已有的本地变量重名。

例子：

```python
def scope_test():
    def do_local():
        spam = "local spam"
    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"
    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)

scope_test()
print("In global scope:", spam)
```

输出结果是：

```text
After local assignment: test spam
After nonlocal assignment: nonlocal spam
After global assignment: nonlocal spam
In global scope: global spam
```

注意局部的赋值 (默认) 并没有改变 `scope_test` 绑定的 `spam`. 而 `nonlocal` 则改变了 `scope_test` 中的 `spam`, 而 `global` 则改变了模块级别的绑定。
可以看到在 `global` 赋值之前并没有绑定 `spam` 的值.

有了 `nonlocal` 语句，Python的闭包就不只能只读访问非本地作用域的变量了。

```python
def foo(num):
    count = 0
    def bar():
        nonlocal count
        nonlocal num
        num += 1
        count += 1
        print("num is %d" % num)
        print("bar invoke %d times" % count)
    return bar

func = foo(10)

func()
func()
```

运行结果：

```text
num is 11
bar invoke 1 times
num is 12
bar invoke 2 times
```

参考文献：

[The nonlocal statement](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement)

[Python 的作用域和命名空间](https://docspy3zh.readthedocs.io/en/latest/tutorial/classes.html#tut-scopes)
