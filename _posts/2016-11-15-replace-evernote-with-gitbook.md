---
title: 用 Gitbook 替代 Evernote 搭建私人记事本
imagePath: /assets/images/2016-11-15-replace-evernote-with-gitbook
---

### 恼人的 Evernote

用 Evernote 有2年多了，但是有几个问题让我一直很头疼：

* 没有只读功能：导致偶尔会误改笔记，但其实有一些笔记真的是永远都不用改了，比如日记。而且误改了再改回来之后，笔记的编辑日期就变了，再按日期排序时顺序也跟着乱了。

* 排版麻烦：在别的系统中看起来挺规整的版式，粘贴过来就跑版了，反过来也一样，在 Evernote 里看着整齐的版式，粘贴到别处也会跑版。

* 没有历史记录：一篇长期编辑的笔记，看不出它的演化历史，而且一旦不小心误改误删了，是没有后悔药可吃的。

虽然最后一项可以花钱买高级帐户服务解决，但前二项花钱也解决不了。直到前段时间遇到 Gitbook，试用了一段时间感觉不错，于是决定舍弃 Evernote，拥抱 Gitbook。

### 简洁的 Gitbook

Gitbook 运行在 Node.js 环境，是使用 markdown 排版的笔记工具。

在 Node.js 环境下通过 NPM 安装：

> $ npm install gitbook-cli -g

安装完成后，建一个新目录，运行初始化命令：

> $ gitbook init

此命令执行完毕后，自动生成2个文件，其中 README.md 是笔记的介绍页，SUMMARY.md 是笔记的目录页，由它链接至各篇笔记。

接下来，你可以启动一个运行在 4000端口下的 web 服务来浏览笔记：
> $ gitbook serve

![gitbook的init和serve命令]({{page.imagePath}}/gitbook-init-and-serve.png)

至此，你已经可以编辑和查看自己的笔记了。

### 可扩展的 Gitbook

* 为了提高编辑和预览的效率，你可以使用第三方 markdown 编辑器，也可以使用官方提供的 Gitbook Editor。

* 如果你需要管理笔记的历史记录，就把它们保存到版本库中，如果你的笔记是开源的，就保存到 Github 上，如果是闭源的，就保存到自己的服务器上或者 Bitbucket 上。

* 如果你想把笔记发布到网站上，可以把笔记转换为网页格式，生成的文件保存在 _book 目录下：

> $ gitbook build

![gitbook的build命令]({{page.imagePath}}/gitbook-build.png)

### Gitbook 的优点

作为一名程序员，你会发现用 Gitbook 记笔记和平时写代码是很相似的：

* 你只需要一个通用的 markdown 编辑器就能写笔记，而不是必须要用一个的臃肿的客户端笔记软件。有些程序员也喜欢用简洁的文本编辑器写代码，而不是庞大的 IDE。

* 你用 markdown 格式写笔记，然后用转换工具把它输出为 HTML、PDF 或者其他格式。就像先写源代码，然后用构建工具 build 出可执行文件一样；

* 通过 git 进行笔记版本管理，和管理代码的方法一样。

* 它是开源的，你是自由的。你不用担心被绑架到一款特定的软件上，也不用担心它的兼容性。

### 参考资料

[Gitbook 开源项目](https://github.com/GitbookIO/gitbook)<br>
[Gitbook 安装指南](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md)<br>
[Gitbook Editor](https://www.gitbook.com/editor)
