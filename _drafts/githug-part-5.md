---
title: 深入浅出学 Git 之五，Githug 第41至第50关详解
imagePath: /assets/images/githug-part-5
---

### 第41关 repack

> Optimise how your repository is packaged ensuring that redundant packs are removed.
> 
> 优化你的仓库，重新打包，并清除多余的包。

在第1关里我们提到，当 Git 项目初始化时，会创建一个隐藏的名为 .git 的子目录，用于存放 Git 管理仓库要用到的文件。在 Git 的世界里，一个文件是一个 Git 对象，一次提交也是一个 Git 对象，它们被存储在 .git/objects/ 目录下：

```
$ ls .git/objects/
4d    a0    e6    info    pack
```

其中前3个目录的目录名长为2个数字字母，分别各存放1个对象。在 Git 的操作越多，产生的对象就越多，为了优化仓库的效率，你可以手工把对象打包：

```
$ git repack
$ git repack -d
```

第1条命令是把对象打包到一起，第2条命令是在打包后删除已作废的对象。执行完打包命令之后，.git/objects/pack/ 目录下会生成2个文件：

```
$ ls .git/objects/pack/
pack-b7b37f445a40715c249bf8c0df9631e9fd6c8f4b.idx
pack-b7b37f445a40715c249bf8c0df9631e9fd6c8f4b.pack
```

.pack 是包文件，.idx 是包的索引文件。

第41关过关画面如下：

![第41关 branch]({{page.imagePath}}/level-41-repack.png)

### 第42关 cherry-pick

> Your new feature isn't worth the time and you're going to delete it. But it has one commit that fills in `README` file, and you want this commit to be on the master as well.
> 
> 你在新功能上的努力白废了，准备删除掉它，但是往 'README' 文件里填充内容的那次提交还有用，你要把这次提交合并到主线上。

如果你创建了一个分支，在其中进行了多次提交，而在合并时不想把分支上所有的提交都合并到主线，只想选取其中的1个提交合并到主线，那么你可以用下面的命令：

```
$ git cherry-pick hash-code
```

其中 hash-code 是某次提交生成的 HASH 值。cherry-pick 直译就是摘樱桃，把一个分支想象成一棵树，多次提交就让树上结满了果实，那么 cherry-pick 命令就是摘下其中的一个果实。

第42关过关画面如下：

![第42关 cherry-pick]({{page.imagePath}}/level-42-cherry-pick.png)

### 第43关 grep

> Your project's deadline approaches, you should evaluate how many TODOs are left in your code.
> 
> 项目的交付时间快到了，你要评估一下代码里还遗留了多少待办事项。

和 Linux 的 grep 命令类似，Git 也提供了一个用于搜索文本的 grep 命令：

```
$ git grep keyword
$ git grep keyword file-name
```

第1条命令在当前项目下查找指定的关键词；第2条命令在指定的文件中查找关键词。

第43关过关画面如下：

![第43关 grep]({{page.imagePath}}/level-43-grep.png)

### 第44关 rename_commit

> Correct the typo in the message of your first (non-root) commit.
> 
> 在第一次提交时有一个拼写错误，修正它。

在使用 Git 的过程中，难免会出现要改写提交内容的情况，Git 提供了非常强大的修改历史的工具，我们就以本关为例，详细说明如何修改历史，并在接下来的第45关和第47关再做另外2个练习。

先看一下提交日志：

```
$ git log --pretty=oneline
771b71dca888e80d2bf716672b1475e85a27d695 Second commit
06973a37415e520eff0bace38181f131698cd888 First coommit
37d84aed48418346c4567bb863a0eba4617ba5b1 Initial commit
```

一共有过3次提交，注意其中哈希值为 "06973a37415e520eff" 的这次提交，提交说明 "First coommit" 中的第2个单词拼错了。

修改提交历史的命令格式是：

```
$ git rebase -i hash-code
```

我们已经在第40关接触过 ```git rebase``` 命令，当时是用它来合并分支。但是加了 ```-i``` 参数之后，用途就变为修改提交历史了。其后再跟一个某一条提交日志的哈希值，表示要修改这条日志之前的提交历史。

现在，找到 "First coommit" 下面一条日志的哈希值 "37d84aed48418346c4"，然后输入下面的命令：

```
$ git rebase -i 37d84aed48418346c4
```

这时，会启动文本编辑器，显示如下内容：

```
pick 06973a3 First coommit
pick 771b71d Second commit
```

这2行是历史日志，但和 ```git log``` 的区别在于 ```git log``` 是按更新时间从后到前显示日志，而这里是按从前到后显示。每一行的前面有一个命令词，表示对此次更新执行什么操作，有以下几种命令：

* "pick"，表示执行此次提交；
* "reword"，表示执行此次提交，但要修改备注内容；
* "edit"，表示可以修改此次提交，比如再追加文件或修改文件；
* "squash"，表示把此次提交的内容合并到上次提交中，备注内容也合并到上次提交中；
* "fixup"，和 "squash" 类似，但会丢弃掉此次备注内容；
* "exec"，执行命令行下的命令；
* "drop"，删除此次提交。

本关就使用 "reword" 命令来完成任务。把第1行前面的 "pick" 改为 "reword"（注意，不用改哈希值后面的备注内容），如下：

```
reword 06973a3 First coommit
pick 771b71d Second commit
```

接下来保存并退出，马上系统会再次打开编辑器，显示以下内容：

```
First coommit

# Please enter the commit message for your changes.
```

这时，你把 "coommit" 改为 "commit"，保存并退出，再查看日志，就会发现历史日志的备注内容已经改变了。

第44关过关画面如下：

![第44关 rename_commit]({{page.imagePath}}/level-44-rename-commit.png)

### 第45关 squash

> You have committed several times but would like all those changes to be one commit.
> 
> 你提交过几次，但是现在想把这些提交合并成一次提交。

承上关，如果要把多次合并合并成一次提交，可以用 ```git rebase -i``` 的 ```squash``` 命令。

先查一下提交日志：

```
$ git log --pretty=oneline
55d9ec9d216767dd1e080c32f5bcff1b3c62ab5b Updating README (squash this commit into Adding README)
749b65067db05a02515c580ad8e791306ff02305 Updating README (squash this commit into Adding README)
1ac3ed61a0ae302cf76dc6f3a37e56e2b5f750f9 Updating README (squash this commit into Adding README)
606be40cc9e5c684cab87c22c37a9d0225308761 Adding README
994f2b3a2df48ef4a406a5c62b4b6f6c8c1fac03 Initial Commit
```

从查询结果看出，添加了 README 之后来又对它做了3次修改。

找到 "Adding README" 下面一条日志的哈希值 "994f2b3a2df48ef4a4"，执行 ```reabse``` 命令：

```
$ git rebase -i 994f2b3a2df48ef4a4
```

系统自动打开文本编辑器，显示历史日志：

```
pick 606be40 Adding README
pick 1ac3ed6 Updating README (squash this commit into Adding README)
pick 749b650 Updating README (squash this commit into Adding README)
pick 55d9ec9 Updating README (squash this commit into Adding README)
```

把后3条日志前面的 "pick" 命令都改成 "squash"：

```
pick 606be40 Adding README
squash 1ac3ed6 Updating README (squash this commit into Adding README)
squash 749b650 Updating README (squash this commit into Adding README)
squash 55d9ec9 Updating README (squash this commit into Adding README)
```

保存退出，系统再次自动打开编辑器，内容是合并过的更新说明：

```
# This is a combination of 4 commits.
# The first commit's message is:
Adding README

# This is the 2nd commit message:

Updating README (squash this commit into Adding README)

# This is the 3rd commit message:

Updating README (squash this commit into Adding README)

# This is the 4th commit message:

Updating README (squash this commit into Adding README)
```

你可以在此编辑合并之后的更新说明，然后保存退出。再查日志，就会发现3次 "Updating README" 的提交都合并到 "Adding README" 中了。

```
$ git log --pretty=oneline
3e8c0e3a729a9d5f959214a2267c481ff0197722 Adding README
994f2b3a2df48ef4a406a5c62b4b6f6c8c1fac03 Initial Commit
```

第45关过关画面如下：

![第45关 squash]({{page.imagePath}}/level-45-squash.png)

### 第46关 merge_squash

> Merge all commits from the long-feature-branch as a single commit.
> 
> 把名为 long-feature-branch 的分支合并到主干，把分支中的多次提交合并为主干上的一次提交。

在第38关我们曾学习过 ```merge``` 合并，它的语法是：

```
$ git merge branch-name
```

如果分支曾经提交过多次，那么用上面的语句合并之后，主干的日志也会出现多次提交记录。为了符合本关题意，把分支的多次提交合并为主干上的一次提交，要加一个 ```squash``` 参数，如下：

```
$ git merge branch-name --squash
```

如果不加 ```squash``` 参数，在合并之后系统会默默地做一个 ```commit``` 操作，而加了 ```squash``` 参数之后，不会自动 ```commit```，这时你还需要手动执行 ```commit``` 命令，并且写上提交说明。

第46关过关画面如下：

![第46关 merge_squash]({{page.imagePath}}/level-46-merge-squash.png)

### 第47关 reorder

> You have committed several times but in the wrong order. Please reorder your commits.
> 
> 你提交过几次，但是提交的顺序错了，请调整提交顺序。

在第44关和第45关我们使用 ```git rebase -i``` 命令修改了历史日志的提交说明、把多次提交合并成了一次，在本关，我们要用这个命令来调整提交顺序。

先查一下提交日志：

```
$ git log --pretty=oneline
3baec3ba260f841e097675e4ae6661a86e3dba50 Second commit
a5f696b57d524c83b9fbb094b013590e4ff3d43d Third commit
19f3b096c2765ab79d9b07a5bed3a4ebb83ebf6a First commit
f0c159847ae93dabc8fd23766b40cf0cc21b315d Initial Setup
```

从上面的查询结果看出，"Second commit" 和 "Third commit" 的次序颠倒了。我们找到最后一条日志的哈希值 "f0c159847ae93"，然后输入下面的命令：

```
$ git rebase -i f0c159847ae93
```

系统自动打开文本编辑器，显示出了历史日志：

```
pick 19f3b09 First commit
pick a5f696b Third commit
pick 3baec3b Second commit
```

把第2行和第3行的内容调整一下顺序，即这样：

```
pick 19f3b09 First commit
pick 3baec3b Second commit
pick a5f696b Third commit
```

然后保存退出，系统就会按照调整过的顺序重新执行一遍提交操作。再查看日志，发现顺序已经调整好了。

```
$ git log --pretty=oneline
58fe3005755a19d18c017973517dfaca1b1ae648 Third commit
e0e8d4428578fb7b1284b1c7902e435e9bd571c4 Second commit
19f3b096c2765ab79d9b07a5bed3a4ebb83ebf6a First commit
f0c159847ae93dabc8fd23766b40cf0cc21b315d Initial Setup
```

第47关过关画面如下：

![第47关 reorder]({{page.imagePath}}/level-47-reorder.png)

### 第48关 bisect

> A bug was introduced somewhere along the way.  You know that running `ruby prog.rb 5` should output 15.  You can also run `make test`.  What are the first 7 chars of the hash of the commit that introduced the bug.
> 

### 第49关 stage_lines

### 第50关 find_old_branch