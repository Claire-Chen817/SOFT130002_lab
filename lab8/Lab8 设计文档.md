# Lab8 设计文档

### 任务一

通过count计数，并改变wrap的marginLeft来实现图片的翻页展示。

通过改变span的类名来实现背景颜色的变化。

特别要注意count的大小在边界处的变化，否则spans[count]会出错导致翻页展示不能完整实现，在边界会出错。

### 任务二

通过设定setInterval函数来设置轮播间隔时间。

鼠标的位移问题由onmouseenter和onmouseleave来控制。前者去除时间间隔函数，后者重新开启轮播。

### 任务三

在每个span上都加上由onmouseenter控制的函数，使图片的展示由鼠标的位置控制。

### 任务四

若td不是input类，则在td中加入新的input，使其值等于原值。