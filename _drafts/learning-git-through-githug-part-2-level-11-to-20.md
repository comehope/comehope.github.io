---
title: 深入浅出学 Git 之二，Githug 第11至第20关详解
imagePath: /assets/images/2016-11-23-learning-git-through-githug-part-2-level-11-to-20
---

### 第11关 rm

> A file has been removed from the working tree, however the file was not removed from the repository.  Find out what this file was and remove it.
> 
> 有一个文件被从工作目录中直接删除了，而没有通知到仓库，找到这个文件，把它从仓库中删除。

如果一个文件无用了，准备删除它，切记不要直接用 `rm` 命令，你应该用经过 Git 包装的 `git rm` 命令，否则 Git 仓库不知道你对这个文件进行了删除操作，就追踪不到这个文件的变化了。

第11关过关界面：

![第11关 rm]({{page.imagePath}}/level-11-rm.png)

### 第12关 rm_cached

> A file has accidentally been added to your staging area, find out which file and remove it from the staging area.  \*NOTE\* Do not remove the file from the file system, only from git.
> 
> 有一个文件被不小心添加到了暂存区，找到它，然后把它从暂存区中删除。\*注意\* 不是要把它从文件系统里删除，只是要从 git 暂存区删除。

有时候，我们用 `git add` 命令添加到暂存区的文件要撤销添加，这时就要做 `git add` 的逆操作，能进能退，Git 方为真正法器。

撤销添加到暂存区的命令仍是 `git rm`，但要加一个 `--cached` 参数，如下面所示：

```
$ git rm --cached your-file
```

第12关过关界面：

![第12关 rm_cached]({{page.imagePath}}/level-12-rm-cached.png)

### 第13关 stash

> You've made some changes and want to work on them later. You should save them, but don't commit them.
>
> 你修改了一个文件，但还没改完，这时你要保存它，而不是提交它。

设想这样的场景：你正为一个类文件写一个新方法，写到一半了但还没写完，这时来了一个紧急任务，需要修改这个类的另一个方法，然后提交。这时你面临的问题是，手头的活儿还没干完，就又来新活儿了，而且是同一个类文件！好吧，让我们思考一下计算机是怎么处理中断的，它会把当前的进程挂起，然后处理中断，处理完以后再恢复之前挂起的进程。`git stash` 命令就是类似这样的一种处理方式，它会把你当前正在处理的文件都暂存到一个临时区域，然后把文件状态恢复为你最后一次提交的状态，这时你可以从刚才的工作状态跳出来在一个干净的工作环境处理紧急任务，之后再用 `git stash pop` 命令恢复此前暂存的文件。

第13关过关界面：

![第13关 stash]({{page.imagePath}}/level-13-stash.png)

### 第14关 rename

> We have a file called 'oldfile.txt'. We want to rename it to 'newfile.txt' and stage this change.
> 
> 有一个名为 'oldfile.txt' 的文件，要把它改名为 'newfile.txt'，并且把这个改动记录到暂存区。

在第11关时我们曾用 `git rm` 来删除仓库里的文件，同样地，如果要对仓库里的文件改名，也不要直接用 `mv` 命令，而要用 `git mv` 命令，该命令会自动把改动记录到暂存区。

第14关过关界面：

![第14关 rename]({{page.imagePath}}/level-14-rename.png)

### 第15关 restructure

> You added some files to your repository, but now realize that your project needs to be restructured.  Make a new folder named 'src' and using Git move all of the .html files into this folder.
> 
> 仓库中逐渐积累了一些文件，现在你意识到应该重新组织一下目录结构，请创建一个名为 'src' 的新文件名，用 Git 能追踪到方式把 .html 文件移到此文件夹中。

这其实就是文件改名的综合运用嘛！实际工作中，随着文件的增多，就需要重新组织目录结构，把文件分类存放。操作方法就是先用 `mkdir` 命令建一个新目录，然后把需要移动的文件用 `git mv` 命令移过来就行了。

第15关过关界面：

![第15关 restructure]({{page.imagePath}}/level-15-restructure.png)

### 第16关 log

> You will be asked for the hash of most recent commit.  You will need to investigate the logs of the repository for this.
> 
> 你将被询问最近提交的 hash 值，你可以通过仓库的日志找到它。

每一次 `git commit` 命令都会在仓库中留下一个日志，

默认不用任何参数的话，git log 会按提交时间列出所有的更新，最近的更新排在最上面。 正如你所看到的，这个命令会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。


### 第17关 tag

### 第18关 push_tags

### 第19关 commit_amend

### 第20关 commit_in_future