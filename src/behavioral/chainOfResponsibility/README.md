# 职责链模式

​多个处理器依次处理同一个请求

​一个请求先经过A处理器处理,然后再把请求传递给B处理器,B处理器处理完后再传递给C处理器,以此类推,形成一条链条

​链条上的每个处理器各自承担各自的处理职责,所以叫做职责链模式

两种模式:

1. ​一旦某个处理器能处理这个请求,就不会继续传递到后续(更经典)
2. ​请求不会中途终止传递,而是被所有的处理器都处理一遍

## 使用场景

​常用在框架开发中,用来实现过滤器、拦截器功能，让框架的使用者在不需要修改框架源码的情况下，添加新的过滤、拦截功能

​对扩展开放,对修改关闭的设计原则
