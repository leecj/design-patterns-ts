# 装饰器模式

​主要解决集成过于复杂的问题,通过组合替代继承,给原始类添加增强功能

两个特点:

装饰器类和原始类继承同样的父类，这样我们可以对原始类“嵌套”多个装饰器类

装饰器类是对功能的增强，这也是装饰器模式应用场景的一个重要特点

**装饰**和**代理**有着相似的结构， 但是其意图却非常不同。 这两个模式的构建都基于组合原则， 也就是说一个对象应该将部分工作委派给另一个对象。 两者之间的不同之处在于代理通常自行管理其服务对象的生命周期， 而装饰的生成则总是由客户端进行控制。
