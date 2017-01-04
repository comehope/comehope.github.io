---
title: 深入浅出学 Git 之四，Githug 第31至第40关详解
imagePath: /assets/images/githug-part-4
---

### 第31关 branch

> You want to work on a piece of code that has the potential to break things, create the branch test_code.
> 
> 你想要修改一处代码，在修改过程中可能会引起一些问题，所以要创建一个分支 test_code 来修改。

接下来的10关都和分支有关。
如果你想在不影响主线的情况下进行安全的开发，就要以主线为基础创建一个分支，然后在分支上修改，最后再把分支合并到主线上。实际上，一般情况下都是在分支上工作的，因为在一个团队中，你和你的伙伴共享主线，在主线下工作人影响其他人，所以每个人都分别在各自的分支上工作。

分支的常用命令如下：

```
$ git branch branch-name
$ git branch
```

第1条语句用于创建分支，中的 branch-name 就是你要创建的分支名称；第2条语句用于列出全部分支。

第31关过关画面如下：

![第31关 branch]({{page.imagePath}}/level-31-branch.png)

### 第32关 checkout

> Create and switch to a new branch called my_branch.  You will need to create a branch like you did in the previous level.
> 
> 创建并切换到新分支 my_branch。你要像上一关那样先创建一个分支。

上一关我们创建了分支，但是还没有切换到新分支上。如果你仔细观察，会发现 ```git branch``` 语句的结果中，在 ```master``` 前面有一个 ```*``` 号，它表示当前你所在的分支。

切换分支的语句是：

```
$ git checkout branch-name
$ git checkout -b branch-name
$ git checkout -
```

第1条语句用于切换到指定的分支；第2条语句加了 ```-b``` 参数，表示创建一个分支并且切换到这个新建的分支，相当于连续执行 ```git branch branch-name``` 和 ``` git checkout branch-name```；第3条语句用于切换到上次所在的分支，当你经常在2个分支间来回切换时，用这个命令会比较方便。

不知你是否还记得，第23关我们用到了这样的命令：

```
$ git checkout your-file
```

它的作用是撤销对一个文件的修改。虽然从形式上看这个命令和本关的命令很相似，但因为参数的含义不一样，一个是文件名，一个是分支名，所以功能是完全不一样的。

第32关过关画面如下：

![第32关 checkout]({{page.imagePath}}/level-32-checkout.png)

### 第33关 checkout_tag

> You need to fix a bug in the version 1.2 of your app. Checkout the tag `v1.2`.
> 
> 你要在 1.2 版本中修复一个 bug，切换到 tag 'v1.2'。

在第17关我们学习了如何创建 tag。tag 是一个有语义的标签，便于记忆，我们可以把版本号或其他有特定含义的词语作为 tag。当我们要切换到指定的 tag 时，采用以下命令：

```
$ git checkout tag-name
```

你一定发现了，这个命令也和切换到分支的命令形式是一样的啊！第17关、第32关、第33关这三关的命令形式都一样，只因参数的含义不同，一个是文件名，一个是分支名，一个是标签名，结局就各不相同。

第33关过关画面如下：

![第33关 checkout_tag]({{page.imagePath}}/level-33-checkout-tag.png)

### 第34关 checkout_tag_over_branch

> You need to fix a bug in the version 1.2 of your app. Checkout the tag `v1.2` (Note: There is also a branch named `v1.2`).
> 
> 你要在 1.2 版本中修复一个 bug，切换到 tag 'v1.2'（注意：现在有一个分支也叫 'v1.2'）。

如果存在一个和分支同名的 tag，比如都叫 'v1.2'，那么当执行 ```git checkout v1.2``` 命令时，是该切换到分支，还是该切换到 tag 呢？答案是切换到分支。

如果要切换到 tag，就需要按下面这样给出明确的说明：

```
$ git checkout tags/tag-name
```

第34关过关画面如下：

![第34关 checkout_tag_over_branch]({{page.imagePath}}/level-34-checkout-tag-over-branch.png)

### 第35关 branch_at

> You forgot to branch at the previous commit and made a commit on top of it. Create branch test_branch at the commit before the last.
> 
> 你忘记了在上一个提交之间先创建一个分支就提交了。创建一个分支 test_branch 在最后一次提交之前。

默认情况下，你使用 ```git branch branch-name``` 语句创建分支时，创建出的分支与当前主线的内容是一样的，但是你也可以指定以主线的某一次提交为基础来创建分支，命令格式如下：

```
$ git branch branch-name hash-code
```

上面命令的最后一个参数表示 ```git commit``` 命令对某次提交生成的 HASH 值。

第35关过关画面如下：

![第35关 branch_at]({{page.imagePath}}/level-35-branch-at.png)

### 第36关 delete_branch

> You have created too many branches for your project. There is an old branch in your repo called 'delete_me', you should delete it.
> 
> 你为这个项目创建了太多的分支。有一个旧分支名为 'delete_me'，删除掉它。

删除分支的命令如下：

```
$ git branch -d branch-name
```

和创建分支的区别在于增加了一个 ```-d``` 参数。

第36关过关画面如下：

![第36关 delete_branch]({{page.imagePath}}/level-36-delete-branch.png)

### 第37关 push_branch

> You've made some changes to a local branch and want to share it, but aren't yet ready to merge it with the 'master' branch.  Push only 'test_branch' to the remote repository.
> 
> 你的一个本地分支有一些修改，你想把它分享出去，但又不想合并到 master 分支上。仅把 'test_branch' 推送到远程仓库。

我们曾在第28关学习过推送命令，语法如下：

```
$ git push remote-name branch-name
```

其中 remote-name 是远程仓库名，branch-name 是分支名。

第37关过关画面如下：

![第37关 push_branch]({{page.imagePath}}/level-37-push-branch.png)

### 第38关 merge

> We have a file in the branch 'feature'; Let's merge it to the master branch.
> 
> 你有一个文件在分支 'feature'，把它合并到 master 分支。

当我们在分支完成修改和测试之后，就可以把分支合并到主线上了，它的命令是：

```
$ git merge branch-name
```

执行这条命令之前，要先切换到主线（一般是 master 分支），然后把待合并的分支名作为参数。

合并之后，在分支上修改过的文件的内容就会体现在主线上，而且日志中也加入了分支的修改日志。

如果遇到主线和分支修改了同一个文件的同一行代码，就会发生冲突，后面的关卡中我们还会学习如何解决冲突。

第38关过关画面如下：

![第38关 merge]({{page.imagePath}}/level-38-merge.png)

### 第39关 fetch

> Looks like a new branch was pushed into our remote repository. Get the changes without merging them with the local repository 
> 
> 看起来好像有新的分支推送到了远程仓库。得到新的修改而不要合并到本地仓库。

在第26关我们曾用 ```git pull``` 把远程仓库的更新拉到本地仓库，这个命令其实隐含了2个连续的动作，即 ```git fetch``` 和 ```git merge```。如果只是抓取数据而不合并，那就不能用 ```git pull``` ，而只用前一个动作 ```git fetch``` 就可以了，语法如下：

```
$ git fetch
$ git branch -r
$ git log remote-name/branch-name
```

第1条语句是把远程仓库的数据抓取到本地，但不合并到本地分支；第2条语句是查看远程分支列表，如果远程仓库有了新分支，在 ```git fetch``` 之后用 ```git branch -r``` 查看时会发现新分支的名称，在本关中新分支名为 'new_branch'；第3条语句用于查看远程分支的日志，比查看本地日志的 ```git log``` 语句多了远程仓库名和远程分支名这2个参数。

第39关过关画面如下：

![第39关 fetch]({{page.imagePath}}/level-39-fetch.png)

### 第40关 rebase

> We are using a git rebase workflow and the feature branch is ready to go into master. Let's rebase the feature branch onto our master branch.
> 
> 我们使用了 git rebase 工作流，feature 分支准备合并到 master。rebase 这个 feature 分支到我们的 master 分支。

git rebase master
参考第28关
