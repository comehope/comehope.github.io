---
title: 如何移交 Bitbucket 项目
permalink: /:year/:month/:day/how-to-transfer-a-bitbucket-repository.html
imagePath: /assets/images/2016-11-10-bitbucket-transfer
---

Bitbucket 允许你把项目移交给朋友或同事，移交的意思是指转移所有权，移交之后这个项目就在对方名下了。当你的项目不再亲自维护，要交给一个信得过的人帮你继续维护时，就会用到这个功能。

### 移交流程

移交流程如下：

![移交流程图]({{page.imagePath}}/flow-diagram.png)

打开你要移交的项目，进入 settings 页，点击页面下方的“Transfer repository”按钮。

![setting页]({{page.imagePath}}/setting-page.png)

在弹出的对话框中输入要接收此项目的帐户名，点击“Transfter”按钮。

![transfer 对话框]({{page.imagePath}}/transfer-dialog-box.png)

以上操作完成后，页面上方会增加一个警告条，内容为“This repository ownership is pending trasfter to xxx. Visite the repository transfer page for more details“，意思是说现在这个项目正处于移交过程中。

![警告条]({{page.imagePath}}/pending-transfer-banner.png)

同时，Bitbucket 服务器会给接收方发送一封电子邮件，请对方确认。

![确认邮件]({{page.imagePath}}/request-email.png)

邮件中包含一个链接，打开这个链接进入一个接受移交页面，点击"Accept"按钮即可。

![Accept 页面]({{page.imagePath}}/accept-page.png)

### 移交之后

移交被接受之后，Bitbucket 会自动更新项目的 URL，新的 URL 中将包含新所有者的帐户名。举例来说，你的的帐户名是 copperfield，有一个名为 The Coin Through the Hand 的项目，它的地址是：

> https://bitbucket.org/copperfield/the-coin-through-the-hand

在移交给 liu 之后的，它的地址变为：

> https://bitbucket.org/liu/the-coin-through-the-hand

与项目相关的访问权限都会被移交，包括commit history, issue tracker 和 wiki。移交之后，项目原先的访问权限设置都会被清除，只有新所有者有权访问，所以移交后需要重新为项目参与者开通访问权限。

### 取消移交

在对方确认之前，你可以取消移交。如果在确认前取消移交，Bitbucket 也会发一封邮件给接收人提示他这次移交被取消了。

### 参考资料

[Change or transfer repository ownership](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)