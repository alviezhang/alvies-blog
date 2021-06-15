---
title: 用VIM给文件添加行号
date: 2015-07-27
description:
tags:
- Vim
---

面试时被问到如何用 Vim 给文件增加行号，没答出来。其中需要用到 Vim 的函数 `line`：

```vim
%s/^/\=line('.')/
```

用每行的行号去替换行首的空字符串，即可获得结果。解决问题的关键在于使用 `\=` 可以获得之后函数的结果进行替换。

上面的命令会在每行添加对应行号数字，但是行号一般还包含至少一个空格，改进如下：

```vim
%s/^/\=line('.').' '/
```

添加前：

```python
def foo():
    print 'hello world'

if __name__ == '__main__':
    foo()
```

添加后：

```python
1 def foo():
2     print 'hello world'
3 
4 if __name__ == '__main__':
5     foo()
```

-----------------------

Ref:

<http://vim.wikia.com/wiki/Insert_line_numbers>
