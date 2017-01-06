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

git cherry-pick ca32a6dac7

### 第43关 grep

> Your project's deadline approaches, you should evaluate how many TODOs are left in your code

git grep TODO

### 第44关 rename_commit

> Correct the typo in the message of your first (non-root) commit.

git rebase -i HEAD~2
reword

### 第45关 squash

> You have committed several times but would like all those changes to be one commit.

git rebase -i commit-id
squash

### 第46关 merge_squash

> Merge all commits from the long-feature-branch as a single commit.

git merge --squash long-feature-branch
git commit -m "ok"

### 第47关 reorder

> You have committed several times but in the wrong order. Please reorder your commits.

git rebase -i commit-id
直接编辑顺序

### 第48关 bisect

### 第49关 stage_lines

### 第50关 find_old_branch