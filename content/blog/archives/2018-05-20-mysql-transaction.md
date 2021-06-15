---
title: MySQL 事务
date: 2018-05-20
description: ""
tags:
- MySQL
---

## 控制事务的语句

- `START TRANSACTION` 或者 `BEGIN` 开启一个新的事务
- `COMMIT` 提交当前事物，使变更持久化
- `ROLLBACK` 回滚当前事物，取消所做出的变动
- `SET autocommit` 设置当前会话禁用或者启用自动提交

默认情况下，MySQL 的 autocommit 设置为启用，也就是说所有语句产生的变动都会自动地提交到数据库中，无法回滚。

## 如何启用事务？

### 使用 `START TRANSACTION` 或 `BEGIN` 语句

```SQL
START TRANSACTION;
SELECT @A:=SUM(salary) FROM table1 WHERE type=1;
UPDATE table2 SET summary=@A WHERE type=1;
COMMIT;
```

### 将 autocommit 设置关闭

```SQL
SET autocommit=0;
UPDATE test set a=1;
```

### DDL 语句不能回滚

所有的数据定义语言(DDL) 语句是不可以回滚的。

### 隐式提交事务的语句

- 数据定义语言(DDL) 语句。
例如：ALTER DATABASE, ALTER TABLE, CREATE INDEX, DROP INDEX 等。InnoDB 将 CREATE TABLE语句作为单个事务处理，这意味着来自用户的ROLLBACK不会撤销用户在该事务期间所做的 CREATE TABLE 语句。

- 隐含地使用或者更改 `mysql` 中数据表的语句。
例如：ALTER USER, CREATE USER, REVOKE, SET PASSWORD

- 事务控制及锁表语句。
例：BEGIN, LOCK TABLES, SET autocommit=1, START TRANSACTION, UNLOCK TABLES

- 管理语句。
例： ANALYZE TABLE, CACHE INDEX, CHECK TABLE, FLUSH, LOAD INDEX INTO CACHE, OPTIMIZE TABLE, REPAIR TABLE, RESET

- 副本控制语句。
例：START SLAVE, STOP SLAVE, RESET SLAVE, CHANGE MASTER TO

## 引用

1. [START TRANSACTION, COMMIT, and ROLLBACK Syntax](https://dev.mysql.com/doc/refman/5.7/en/sql-syntax-transactions.html)
