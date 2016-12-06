---
title: 深入浅出学 Git 之三，Githug 第21至第30关详解
imagePath: /assets/images/2016-11-xx-learning-git-through-githug-part-2-level-21-to-30
---

### 第21关 reset

> There are two files to be committed.  The goal was to add each file as a separate commit, however both were added by accident.  Unstage the file 'to_commit_second.rb' using the reset command (don't commit anything).
> 
> 已经有2个文件即将被提交（即是已加入到暂存区），但为了把每个文件分别提交，需要把 'to_commit_second.rb' 这个文件用 reset 命令从暂存区中移出（不要提交任何文件）。

呵呵，本关和第12关很像啊，都是要从暂存区移出文件，甚至你用第12关的 `git rm --cached` 命令就可以完成任务，但是既然用已有的知识就可以解决，为什么还要专门设这么一关？

请再回忆一下第3关的“Git 文件生命周期”那张图（这张图真是很重要啊，我们在第9关也曾经回忆过一次）。处于工作目录的文件，可能会有2种状态，一种是 untracked，表示这是以前仓库没有的文件，它是新来的；一种是 modified，表示这是仓库里已有的文件，它被修改过了。虽然不管处于哪种状态，把它们加入到暂存区的命令都是 `commit add`，但这条命令其实包含了2种可能的含义：给仓库增加一个文件、或者修改仓库已有的文件，而把文件从暂存区移出的操作也就相对应地有了2种场景，一种是把新增的文件从暂存区移出，一种是把修改过的文件从暂存区移出。第12关和本关就是为了考察这2种场景而设计的，第12关的针对第1种场景，本关针对第2种场景。

把一个已修改过的文件从暂存区移出的命令是：

```
$ git reset your-file
```

第21关过关画面如下：

![第21关 reset]({{page.imagePath}}/level-21-reset.png)

### 第22关 reset_soft

> You committed too soon. Now you want to undo the last commit, while keeping the index.
> 
> 你仓促地提交了代码，现在想取消最后一次提交，同时保持暂存区不变。

这又是一个撤销操作，撤销的是最后一次 `git commit` 命令，语法如下：

```
$ git reset --soft HEAD^
```

`git reset` 命令有很多复杂的参数，这里暂不细说，其中 `--soft HEAD^` 表示取消最后一次提交操作，并且暂存区和工作目录的文件均不受影响。

第19关的 `git commit --amend` 命令就相当于是先 `git reset --soft` 再 `git commit`。

在执行此命令之后，查看日志时会发现最后一次提交的日志消失了。

第22关过关画面如下：

![第22关 reset_soft]({{page.imagePath}}/level-22-reset-soft.png)

### 第23关 checkout_file

> A file has been modified, but you don't want to keep the modification.  Checkout the 'config.rb' file from the last commit.
>
> 一个文件已被修改过，但你不想保留修改过的内容。从最后一次提交中 checkout 出 'config.rb' 文件。

这还是一个撤销操作。如果你想放弃工作目录中已经修改过的内容，就用这个命令：

```
$ git checkout your-file
```

Git 会用最后一次提交的文件覆盖掉工作目录中的同名文件。但做这个操作一定要谨慎，因为这个操作是不可以被撤销的，你修改过的内容是找不回来的。

第23关过关画面如下：

![第23关 checkout_file]({{page.imagePath}}/level-23-checkout-file.png)

### 第24关 remote

> This project has a remote repository.  Identify it.
> 
> 这个项目有一个远程仓库，找出它。

因为 Git 是分布式的版本管理系统，所以我们大部分时间都是在操作本地仓库，与远程相关的命令也不多，比如前面的23关中，也只有第5、第6、第18关这3关涉及到了远程仓库。接下来的5关将集中学习有关远程仓库的知识。

你的项目可以连接多个远程仓库，每个远程仓库的 URL 都不相同，但是 URL 很长不好记，所以 Git 允许你为每个远程仓库命名，提高效率。

要查看你的项目连接了哪些远程仓库，用下面的命令：

```
$ git remote
```

第24关过关画面如下：

![第24关 remote]({{page.imagePath}}/level-24-remote.png)

### 第25关 remote_url

> The remote repositories have a url associated to them.  Please enter the url of remote_location.
> 
> 这个远程仓库有一个与它相关的 URL，请输入远程仓库 remote_location 的 URL 地址。

承上关，在 `git remote` 命令后面加一个 `-v` 参数就可以查询远程仓库的 URL 了。

```
$ git remote -v
```

在查询结果中，每个远程仓库分别列出了 fetch 和 push 的地址，这是因为在有些情况下 fetch 和 push 的地址是不一样的。

第25关过关画面如下：

![第25关 remote_url]({{page.imagePath}}/level-25-remote-url.png)

### 第26关 pull

> You need to pull changes from your origin repository.
> 
> 你需要从远程仓库 origin 拉取更新。

当有多人合作一起开发一个项目时，就不止是你一个人向远程仓库提交代码了，你的伙伴也会向远程仓库提交代码。为了得到远程仓库的最新内容，要用下面的命令把内容抓下来：

```
git pull remote-name branch-name
```

其中，remote-name 是远程仓库的名字，branch-name 是远程仓库的分支名字，如果是主干，那就是 master。该命令执行之后，远程仓库的代码会自动合并到本地项目中。

第26关过关画面如下：

![第26关 pull]({{page.imagePath}}/level-26-pull.png)

### 第27关 remote_add

> Add a remote repository called 'origin' with the url https://github.com/githug/githug
> 
> 添加一个远程仓库，名为 'origin'，url 是 https://github.com/githug/githug




git remote add origin https://github.com/githug/githug

### 第28关 push

> Your local master branch has diverged from the remote origin/master branch. Rebase your commit onto origin/master and push it to remote.

### 第29关 diff

### 第30关 blame