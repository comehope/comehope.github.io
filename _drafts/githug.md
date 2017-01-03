---
title: 深入浅出学 Git
---

### 第41关 repack

> Optimise how your repository is packaged ensuring that redundant packs are removed.

git repack -d

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

### 第51关 revert

### 第52关 restore

### 第53关 conflict

### 第54关 submodule

### 第55关 contribute

### 总结
用表格形式列出每一关的考核点、命令（含、Pro Git网址）、前置知识
