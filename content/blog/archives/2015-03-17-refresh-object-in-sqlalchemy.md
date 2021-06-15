---
title: SQLAlchemy 获取 AutoField 值
date: 2015-03-17
description:
tags:
  - Python
  - SQLAlchemy
---

```python
f = Foo(bar=x)
session.add(f)
session.flush()
# At this point, the object f has been pushed to the DB, 
# and has been automatically assigned a unique primary key id

f.id
# is None

session.refresh(f)
# refresh updates given object in the session with its state in the DB
# (and can also only refresh certain attributes - search for documentation)

f.id
# is the automatically assigned primary key ID given in the database.
```

From:

[python - sqlalchemy flush() and get inserted id? - Stack Overflow](http://stackoverflow.com/questions/1316952/sqlalchemy-flush-and-get-inserted-id#5083472)
