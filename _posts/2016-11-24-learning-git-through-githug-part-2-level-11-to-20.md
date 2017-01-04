---
title: 深入浅出学 Git 之二，Githug 第11至第20关详解
imagePath: /assets/images/2016-11-24-learning-git-through-githug-part-2-level-11-to-20
---

### 第11关 rm

> A file has been removed from the working tree, however the file was not removed from the repository.  Find out what this file was and remove it.
> 
> 有一个文件被从工作目录中直接删除了，而没有通知到仓库，找到这个文件，把它从仓库中删除。

如果一个文件无用了，准备删除它，切记不要直接用 `rm` 命令，你应该用 Git 包装过的 `git rm` 命令，否则 Git 仓库不知道你对这个文件进行了删除操作，就追踪不到这个文件的变化了。

第11关过关画面如下：

![第11关 rm]({{page.imagePath}}/level-11-rm.png)

### 第12关 rm_cached

> A file has accidentally been added to your staging area, find out which file and remove it from the staging area.  \*NOTE\* Do not remove the file from the file system, only from git.
> 
> 有一个文件不小心被添加到了暂存区，找到它，然后把它从暂存区中删除。\*注意\* 不是要把它从文件系统里删除，只是要从 Git 暂存区删除。

有时候，我们用 `git add` 命令添加到暂存区的文件中无意中包含了不应该添加的文件，这时如果要撤销添加，就要做 `git add` 的逆操作。能进能退，Git 方为真正法器。

撤销添加到暂存区的命令仍是 `git rm`，但要加一个 `--cached` 参数，如下面所示：

```
$ git rm --cached your-file
```

第12关过关画面如下：

![第12关 rm_cached]({{page.imagePath}}/level-12-rm-cached.png)

### 第13关 stash

> You've made some changes and want to work on them later. You should save them, but don't commit them.
>
> 你修改了一个文件，但还没改完，这时你要保存它，而不是提交它。

设想这样的场景：你正为一个类文件写一个新方法，写到一半了但还没写完，这时来了一个紧急任务，需要修改这个类的另一个方法，然后提交。现在你面临的问题是，手头的活儿还没干完，就又来新活儿了，而且是处理同一个文件！好吧，让我们思考一下操作系统是怎么处理这种情况的：外部中断到来时，系统会挂起当前进程，然后处理中断事件，处理完中断事件以后再恢复之前挂起的进程。`git stash` 命令就是类似这样的一种处理方式，它会把当前环境“藏”到一个临时区域，然后把工作环境恢复为最后一次提交的状态，这时你可以从刚才的工作状态跳出来在一个干净的工作环境处理紧急任务，之后再用 `git stash pop` 命令恢复此前“藏”的工作环境。

相关命令如下：

```
$ git stash
$ git stash list
$ git stash pop
```

第1条命令把当前环境“藏”起来；第2条命令列出被“藏”的环境；第3条命令恢复被“藏”的环境。

第13关过关画面如下：

![第13关 stash]({{page.imagePath}}/level-13-stash.png)

### 第14关 rename

> We have a file called 'oldfile.txt'. We want to rename it to 'newfile.txt' and stage this change.
> 
> 有一个名为 'oldfile.txt' 的文件，要把它改名为 'newfile.txt'，并且把这个改动记录到暂存区。

在第11关时我们曾用 `git rm` 来删除仓库里的文件，同样地，如果要对仓库里的文件改名，也不要直接用 `mv` 命令，而要用 `git mv` 命令，该命令会自动把改动记录到暂存区。

第14关过关画面如下：

![第14关 rename]({{page.imagePath}}/level-14-rename.png)

### 第15关 restructure

> You added some files to your repository, but now realize that your project needs to be restructured.  Make a new folder named 'src' and using Git move all of the .html files into this folder.
> 
> 仓库中逐渐积累了一些文件，现在你意识到应该重新组织一下目录结构，请创建一个名为 'src' 的新目录名，用 Git 能追踪到方式把 .html 文件移到此文件夹中。

这其实就是文件改名的综合运用嘛！实际工作中，随着文件的增多，就要重新组织目录结构，把文件分类存放。操作方法是先建一个新目录，然后把需要移动的文件用 `git mv` 命令移过来就行了。

第15关过关画面如下：

![第15关 restructure]({{page.imagePath}}/level-15-restructure.png)

### 第16关 log

> You will be asked for the hash of most recent commit.  You will need to investigate the logs of the repository for this.
> 
> 你将被询问最近一次提交的 hash 值，可以通过仓库日志找到它。

本关考察的是对日志查询结果的阅读能力。

每执行一次 `git commit` 命令都会在仓库里留下一个更新日志，可以通过 `git log` 命令查看历史日志，查询结果按提交时间倒序列出所有更新，每条日志包含一个40位的 hash 值、作者名字、电子邮件地址和提交日期及说明，示例如下：

```
$ git log
commit 30fef820b410142d3ded8c0908cd1dcb4c0cade0
Author: comehope <comehope@163.com>
Date:   Tue Nov 22 17:30:24 2016 +0800

    THIS IS THE COMMIT YOU ARE LOOKING FOR!
    
$ git log --pretty=oneline
411bf644d492f6106acda662612dbc627f951769 THIS IS THE COMMIT YOU ARE LOOKING FOR!
```

第2条语句增加了 ```---pretty=oneline``` 参数，表示把日志以紧凑的格式显示，每行显示一次提交，只列出提交的 hash 值和说明，便于快速查看多条日志。

第16关过关画面如下：

![第16关 log]({{page.imagePath}}/level-16-log.png)

### 第17关 tag

> We have a git repo and we want to tag the current commit with 'new_tag'.
> 
> 为仓库当前的提交增加一个名为 'new_tag' 的标签。

把开发一个项目当作一次旅行，如果每个 commit（提交） 都是从窗外晃过的一根电线杆，那么 tag（标签） 就是可以停靠的车站，你可以选择一刻不停地开到终点，也可以歇下脚看看风景再继续前行。镜头拉回到第17关，上面的比喻就是 commit 和 tag 的区别，commit 是细粒度的、面向程序员的，每写一个函数、每修正一个 bug，都可以提交一个 commit，而 tag 是粗粒度的、面向用户的，一般只有在增加或优化了一个用户可感知的功能时，才打一个 tag，软件的版本号就是最常见的 tag 形式，一个新的版本号意味着要对外发布一个新的 release 包。

打标签的命令如下：

```
$ git tag your-tag
$ git tag your-tag a38862a5a860
$ git tag
$ git tag -d your-tag
```

第1条命令是给最近一次提交打标签；第2条命令是给指定的某次提交打标签，后面要写上提交的 hash 值或者 hash 值的前几位；第3条命令是列出所有的标签；第4条是删除标签。

第17关过关画面如下：

![第17关 tag]({{page.imagePath}}/level-17-tag.png)

### 第18关 push_tags

> There are tags in the repository that aren't pushed into remote repository. Push them now.
>
> 本地仓库里有一些标签没有提交到远程仓库中，把它们提交到远程仓库。

在默认情况下标签是不会被 `git push` 命令提交到远程服务器的，也就是说，你在本地打的标签，如果没有刻意指定把它推送到服务器，别人是看不到的。

把标签推送到服务器的命令如下：

```
$ git push --tags
```

此命令执行之后，当别人用 `git clone` 或者 `git pull` 从远程仓库读取时，就会看到你打过的标签了。

第18关过关画面如下：

![第18关 push_tags]({{page.imagePath}}/level-18-push-tags.png)

### 第19关 commit_amend

> The 'README' file has been committed, but it looks like the file 'forgotten_file.rb' was missing from the commit.  Add the file and amend your previous commit to include it.
> 
> 已经提交了文件 'README'，但忘记提交文件 'forgotten_file.rb' 了。修改前一次提交，把这个文件加进去。

文件没提交全是很常见的小失误，解决办法就是先用 `git add` 把忘记提交的文件添加到暂存区，再用 `git commit` 命令加 `--amend` 参数把文件追加到最近一次提交中去，语法如下：

```
$ git commit --amend
$ git commit --amend -m "new message"
$ git commit --amend -C HEAD
```

第1条命令会弹出一个编辑器，供你编辑提交说明；第2条命令会用 "new message" 代替原有的提交说明；第3条命令会直接使用原有的提交说明，其中 `-C` 表示使用已提交过的说明，`HEAD` 表示最近一次提交，加在一起就是使用最近一次的提交说明。

第19关过关画面如下：

![第19关 commit_amend]({{page.imagePath}}/level-19-commit-amend.png)

### 第20关 commit_in_future

> Commit your changes with the future date (e.g. tomorrow).
> 
> 把提交日期设定在未来的某一天（比如明天）。

这关的任务很奇怪，要求把提交时间设定在未来，可是 Git 这台时光机只能开往过去不能开往未来，它只负责把发生过的事管理好，所以把提交时间设定在未来某个时间点实在没有道理啊！如果本关是想考核对 `git commit` 命令的 `--date` 参数的运用，应该要求把提交日期设定在过去，比如昨天或者上周，才是合理的应用场景。

设定提交时间的命令如下：

```
$ git commit
$ git commit --date=“2016-10-10T12:01:01”
$ git commit --date="10 minutes ago"
$ git commit --date="noon yesterday"
$ git commit --date="last friday"
```

第1条命令没有 `--date` 参数，所以默认使用当前时间作为提交时间；第2条命令的提交时间设置为“2016年10月10日的12点01分01秒”；第3条命令的提交时间设置为“10分钟之前”；第4条命令的提交时间设置为“昨天中午12点”；第5点命令的提交时间设置为“上周五的现在时刻”。第2条设置的是绝对时间，后3条设置的都是相对时间。

第20关过关画面如下：

![第19关 commit_in_future]({{page.imagePath}}/level-20-commit-in-future.png)