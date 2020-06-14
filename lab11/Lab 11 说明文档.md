# Lab 11 说明文档

## 1 The function of cookie and session

### Cookie

状态维持。客户端再次向服务器请求时，浏览器先看本地有没有服务器放置的信息，若有，则按要求处理文件，因而能提供持续的存储识别功能。

### Session

通过Cookie机制（默认）或改写URL机制（客户端关闭Cookie）来实现SessionID的传输。目的和主要功能与Cookie相同。

## 2 The advantages & disadvantages of cookie and session

### Advantages

- 保证状态维持，使用户更方便
- 减少大量信息的传输，将大部分信息存储在服务器端，客户端只传递小信息，对带宽要求不高
- 【session的优点】
  - Session可以保证只要登录，就不会冲突
  - 内存性能好，信息不容易丢失

### Disadvantages

- 需要字符串解析
- 有些服务器不支持
- 需要磁盘I/O，速度较慢
- 有最大储存量限制
- 安全性和个人隐私问题