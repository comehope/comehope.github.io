---
title: 深入浅出学 Git 之一，Githug第1至第10关详解
permalink: /:year/:month/:day/learning-git-through-githug-part-1-level-1-to-10.html
imagePath: /assets/images/2016-11-19-learning-git-through-githug-part-1-level-1-to-10
---

git 有大量命令，不同的 git 命令用于解决特定场景下的问题，只靠看文档是学不会这些命令的，必须要实践，但搭建实验场景既麻烦又不便于和其他人分享。Githug 应运而生，它以游戏的形式，设计了55个应用场景，每过一关自动搭建好下一关的实验场景，若你能打通这55关，相信无论再遇到多么复杂的问题，你都能应付自如了。

### 安装和使用方法
先安装好 [git](https://git-scm.com/) 和 [ruby](https://www.ruby-lang.org/) 的运行环境，略。

Githug 运行在 ruby 环境下，通过 gem 安装：

```
$ gem install githug
```

安装好之后，输入命令 `githug`，屏幕会提示“No githug directory found, do you wish to create one? ”，输入 `y` 后回车，提示已经创建了一个名为 git_hug 的新目录，并显示第1关任务。切换到 git_hug 目录，准备开始闯关。

![githug 初始化]({{page.imagePath}}/githug-initialization.png)

在闯关之间先学习 githug 的4个内部命令：

* `githug play`：闯关，即验证你是否已经完成了关卡要求的任务，如果完成了，就会自动跳到下一关。因为这个命令最常用，所以可以缩写成 githug，省略后面的 play。

* `githug hint`：提示，如果你对某个任务没有头绪，可以从这个提示信息得到一些启发。

* `githug reset`：重置，执行任务的过程是用 git 命令操作文件，但是如果改来改去地把文件弄乱了想重新过这关，就要用这个命令恢复到初始状态。

* `githug levels`：查看55关的各自名称。

下图是执行 `githug play` 和 `githug hint` 命令的效果：

![githug play 和 githug hint]({{page.imagePath}}/githug-play-and-githug-hint.png)

因为第1关还没过，所以用红字提示 "Sorry, this solution is not quite right!"（任务还没有完全解决呢），然后显示这关的名称、是第几关、难度和任务。给出的提示是 "You can type 'git' in your shell to get a list of available git commands."（先用 'git' 命令列出 git 的常用命令看看）。

### 第1关 hint

> A new directory, ‘git_hug’, has been created; initialize an empty repository in it.
> 
> 把 'git_hug' 这个新建的目录变为一个可以被 Git 管理的仓库。

Git 仓库的初始化命令是：

```
$ git init
```

该命令将创建一个名为 .git 的子目录，这个子目录含有 Git 管理仓库时要用的文件，.git 是一个隐藏目录，可以用 `ls -a` 查看。

![第1关 init]({{page.imagePath}}/level-1-init.png)

### 第2关 config

> Set up your git name and email, this is important so that your commits can be identified.
> 
> 设置你的用户名和电子邮件地址。

仓库初始化之后要做的第一件事就是设置你的用户名称与邮件地址，以后每一次 Git 提交都会使用这些信息，用于记录代码是谁提交的。

配置信息分为全局配置和本地配置（即当前仓库的配置），使用 `git config` 命令维护，读写全局配置用 --global 参数，读写本地配置用 --local 参数。（注：配置信息还有一个系统配置，但用得少，此文不议。）

查看指定的配置信息用 --get 参数，如：

```
$ git config --get --local user.name
$ git config --get --global user.name
$ git config --get user.name
```

第1条命令是查看本地配置的用户名，第2条命令是查看全局配置的用户名，第3条命令是查看优先级最高的用户名，如果有本地配置项，就优先用本地配置项，如果没有本地配置项，就延用全局配置项。

增加配置信息用 --add 参数，如：

```
$ git config --add --local user.name
$ git config --add --global user.name
$ git conifg --add user.name
```

第1条命令是在本地配置中增加用户名，第2条命令是在全局配置中增加用户名，第3条命令和第1条命令相同，也是在本地配置中增加用户名。

掌握了以上读写配置信息的方法，再知道了用户名和电子邮件地址的键值分别是 user.name 和 user.email，完成这关的任务就很简单了：

![第2关 config]({{page.imagePath}}/level-2-config.png)

### 第3关 add

> There is a file in your folder called 'README', you should add it to your staging area.
> 
> 目录中有一个名为 'README' 的文件，把它添加到暂存区。

Git 文件的生命周期如下图所示：

![Git 文件的生命周期]({{page.imagePath}}/git-file-lifecycle.png)

新建的文件不会自动被 Git 管理，要用 `git add` 命令把它从工作目录添加到暂存区，暂存区可以存多个文件，举例来说，假设开发一个页面，要先写一个 html 文件，再写一个 css 文件，再写一个 js 文件，那就把它们逐个添加到缓存区，这时缓存区里有3个文件了，再用 `git commit` 命令把它们一起提交到本地仓库（图中的提交区）。以上流程就是第3关和第4关的考核内容。

把文件添加到暂存区的命令是这样的：

```
$ git add README
$ git add *.md
$ git add .
```

第1条命令表示把 README 这个文件添加到暂存区，第2条命令表示把以 md 作扩展名的文件添加到暂存区，第3条命令表示把所有没加到暂存区的文件都添加到暂存区。

第3关过关画面如下：

![第3关 add]({{page.imagePath}}/level-3-add.png)

### 第4关 commit

> The 'README' file has been added to your staging area, now commit it.
>
> 'README' 文件已经添加到暂存区了，现在提交它吧。

提交命令是 `git commit`，像下面这样写：

```
$ git commit -m "your message"
```

加一个 -m 参数，表示要写备注，备注写在最后。

第4关过关画面如下：

![第4关 commit]({{page.imagePath}}/level-4-commit.png)

### 第5关 clone

> Clone the repository at https://github.com/Gazler/cloneme.
>
> 克隆远程仓库 https://github.com/Gazler/cloneme 到本地。

克隆仓库的命令格式是：

```
git clone http://remote.repo.url
```

此命令执行之后，就在本地创建一个与远程仓库同名的目录，同时把远程仓库的所有文件复制到这个新建的目录中。

第5关过关画面如下：

![第5关 clone]({{page.imagePath}}/level-5-clone.png)

### 第6关 clone_to_folder
git clone your-folder

### 第7关 ignore
.gitignore 文件
规则

### 第8关 include
!lib.a

### 第9关 status
是否有简洁的方式只查 untracked 文件？

### 第10关 number_of_files_committed
简单

