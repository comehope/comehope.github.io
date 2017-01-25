---
title: 深入浅出学 Git
imagePath: /assets/images/2017-01-24-learning-git-through-githug-part-6-level-51-to-55
---

### 第51关 revert
> You have committed several times but want to undo the middle commit. All commits have been pushed, so you can't change existing history.
> 
> 你提交了多次，但想取消中间的某次提交。所有提交的内容都已经推送到服务端了，所以你不能改变已有的历史。

我们曾用过修改提交历史的 `git rebase -i` 命令，用此方法可以取消多次提交中的某次提交，不过，这只是针对还没有推送到服务端的情况，如果已经提交到服务端，你就不能改变已有的历史了，只能想别的办法解决了。

Git 提供了 `revert` 工具来解决这种问题，它相当于是对某次提交的逆操作，比如你提交时新建了一个文件，那么 Git 就会创建一个删除此文件的提交。语法如下：

```
$ git revert hash-code
$ git revert hash-code --no-edit
```

其中的 hash-code 就是你要取消的提交的哈希值。第2条命令中的 `no-edit` 参数表示由系统自动生成一句提交说明，如果没有这个参数，Git 会自动调用文本编辑器请你编写提交说明。

第51关过关画面如下：

![第51关 revert]({{page.imagePath}}/level-51-revert.png)

### 第52关 restore

> You decided to delete your latest commit by running `git reset --hard HEAD^`.  (Not a smart thing to do.)  You then change your mind, and want that commit back.  Restore the deleted commit.
> 
> 你决定用 `git reset --hard HEAD^` 删除最后一次提交（一个不太明智的决定），然后你又反悔了，想回退到这条命令之前。请恢复被删除的提交。

我们先查一下提交日志，发现有过2次提交：

```
$ git log --pretty=oneline
1dc1ecdd071fd2a5baa664dce42a48b13d40cdae First commit
e586f55fde799d2b390d8a74d771db75279841f3 Initial commit
```

再看看操作日志：

```
$ git reflog
1dc1ecd HEAD@{0}: reset: moving to HEAD^
f766953 HEAD@{1}: commit: Restore this commit
1dc1ecd HEAD@{2}: commit: First commit
e586f55 HEAD@{3}: commit (initial): Initial commit
```

哦，原来还曾有过第3次提交，不过被 `git reset --hard HEAD^` 删除掉了。`git reset --hard HEAD^` 用于删除最后一次提交，使工作区恢复到上一次提交时的状态，仔细观察上面的操作日志也能发现，其中 "HEAD@{2}" 和 "HEAD@{0}" 的哈希值是一样的。

如果要撤销这条命令本身，也就是恢复到执行这条命令之前的状态，我们可以用下面的命令形式：

```
$ git reset --hard hash-code
```

上面命令中的 hash-code 就是你要恢复到的那次提交的哈希值。在执行此命令之后，提交日志中会增加一条提交日志，操作日志会自动增加一条 "reset: moving to hash-code" 的日志。

第52关过关画面如下：

![第52关 restore]({{page.imagePath}}/level-52-restore.png)

### 第53关 conflict

### 第54关 submodule

### 第55关 contribute

