# 下载代码并运行
```
git clone https://github.com/lishengguo/mk-demo-helloservice.git
cd mk-demo-helloservice/helloService
npm install
npm start
```

# 命令行创建hello service服务
## 1、安装mk-tools命令行工具

```
$ npm i -g mk-tools
```

## 2、创建server

```
$ mk server helloService
$ cd helloService
```

## 3、在server创建一个service

```
$ mk service apps/firstService
```

## 4、编译
- 编译会生成index.js文件
```
$ mk compile website
```

## 5、启动server
```
$ npm start
```

## 6、访问webapi
```
http://127.0.0.1:8000/v1
```

