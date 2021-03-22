\# 婚礼邀请函



\#### 介绍

基于微信小程序，前端用的是网上资源，后端自己学的用的云开发，使用了云存储视频和图片，云数据库使用。创建了4个表，视频信息表，存放的视频文件fileid和标题，图片信息表存放fileid，婚礼信息表，存放婚礼信息。宾客表存放宾客信息。都是通过小程序端上传到云存储成功后回调再添加到云数据库。使用了腾讯视频插件，腾讯位置服务，地图可进行选点和路线规划



\#### 软件架构

软件架构说明





\#### 安装教程



下载，开通云开发



\#### 截图

首页：



<img src="img\1.png" alt="image" style="zoom:80%;" />

相册页面：数据从云数据库获取

<img src="img\2.png" alt="image-20210322095438545" style="zoom:80%;" />

视频页面：数据从云存储获取fileid

<img src="img\3.png" alt="image-20210322095513450" style="zoom: 80%;" />

地图页面：

​	地图选点：

<img src="img\4.png" alt="image-20210322095554447" style="zoom: 80%;" />

​	地图导航：

<img src="img\5.png" alt="image-20210322095731100" style="zoom:80%;" />

我的页面：

​											<img src="img\6.png" alt="image-20210322095806773" style="zoom:80%;" />

上传页面：

  	视频上传： 可进行预览

​												<img src="img\7.png" alt="image-20210322095946316" style="zoom:80%;" />

​	宾客信息展示列表： 展示名字，手机号和人数 ，以及祝福语

​												<img src="img\8.png" alt="image-20210322100138223" style="zoom:80%;" />

云数据库：

​		<img src="img\9.png" alt="image-20210322100239572" style="zoom:80%;" />

云存储：

​		<img src="F:\aTypora笔记\婚礼邀请函小程序\img\10.png" alt="image-20210322100314799" style="zoom:80%;" />