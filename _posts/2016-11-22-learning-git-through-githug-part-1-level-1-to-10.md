---
title: 深入浅出学 Git 之一，Githug 第1至第10关详解
imagePath: /assets/images/2016-11-22-learning-git-through-githug-part-1-level-1-to-10
---

git 有大量命令，不同的 git 命令用于解决特定场景下的问题，只靠看文档是学不会这些命令的，必须要实践，但搭建实验场景既麻烦又不便于和其他人分享。Githug 应运而生，它以游戏的形式，设计了55个应用场景，每过一关自动搭建好下一关的实验场景，若你能打通这55关，相信无论再遇到多么复杂的问题，你都能应付自如了。

### 安装和使用方法
先安装好 [git](https://git-scm.com/) 和 [ruby](https://www.ruby-lang.org/) 的运行环境，略。

Githug 运行在 ruby 环境下，通过 gem 安装：

```
$ gem install githug
```

安装好之后，输入命令 `githug`，屏幕会提示“No githug directory found, do you wish to create one? ”，输入 `y` 后回车，提示已经创建了一个名为 git_hug 的新目录，并显示第1关的名称、难度和任务。切换到 git_hug 目录，准备开始闯关。

![githug 初始化]({{page.imagePath}}/githug-initialization.png)

在闯关之间先学习 githug 的4个内部命令：

* `githug play`：闯关，即验证你是否已经完成了关卡要求的任务，如果完成了，就会自动跳到下一关。因为这个命令最常用，所以可以缩写成 githug，省略后面的 play。

* `githug hint`：提示，如果你对某个任务没有头绪，可以从这个提示信息得到一些启发。

* `githug reset`：重置，执行任务的过程是用 git 命令操作文件，但是如果改来改去地把文件弄乱了想重新过这关，就要用这个命令恢复到初始状态。

* `githug levels`：查看55关的各自名称。

下图是执行 `githug play` 和 `githug hint` 命令的效果：

![githug play 和 githug hint]({{page.imagePath}}/githug-play-and-githug-hint.png)

因为第1关还没过，所以用红字警告 "Sorry, this solution is not quite right!"（任务还没有完全解决呢），给出的提示是 "You can type 'git' in your shell to get a list of available git commands."（先用 'git' 命令列出常用命令看看吧）。

### 第1关 init

> A new directory, ‘git_hug’, has been created; initialize an empty repository in it.
> 
> 把 'git_hug' 这个新建的目录变为一个可以被 Git 管理的仓库。

如果你准备把一个本地目录让 Git 管理起来，要先做初始化工作。本地目录可以是空目录，也可以是已经存有文件的目录。

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

仓库初始化之后要做的第一件事就是设置你的用户名称和电子邮件地址，以后每一次 Git 提交都会使用这些信息，用于记录代码是谁提交的。

配置信息分为全局配置和本地配置（即当前仓库的配置），使用 `git config` 命令维护，读写全局配置用 `--global` 参数，读写本地配置用 `--local` 参数。（注：还有一层系统配置，但用得少，此处不议。）

查看指定的配置信息用 `--get` 参数，如：

```
$ git config --get --local user.name
$ git config --get --global user.name
$ git config --get user.name
```

第1条命令是查看本地配置的用户名，第2条命令是查看全局配置的用户名，第3条命令是查看优先级最高的用户名，如果有本地配置项，就读取本地配置项，如果没有本地配置项，就读取全局配置项。

增加配置信息用 `--add` 参数，如：

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

仓库初始化了，用户信息也设置好了，就该管理文件了。我们先看一下 Git 文件的生命周期：

![Git 文件的生命周期]({{page.imagePath}}/git-file-lifecycle.png)

工作目录里的文件不会自动被 Git 管理，要用 `git add` 命令把它添加到暂存区，暂存区可以存多个文件，举例来说，假设开发一个页面，要先写一个 html 文件，再写一个 css 文件，再写一个 js 文件，那就把它们逐个添加到缓存区，这时缓存区里有3个文件了，再用 `git commit` 命令把它们一起提交到本地仓库（图中的提交区）。以上流程就是第3关和第4关要考核的内容。

把文件添加到暂存区的命令是这样的：

```
$ git add README
$ git add *.md
$ git add .
```

第1条命令表示把 README 这个文件添加到暂存区，第2条命令表示把 md 扩展名的文件都添加到暂存区，第3条命令表示把所有没加到暂存区的文件都添加到暂存区。

第3关过关画面如下：

![第3关 add]({{page.imagePath}}/level-3-add.png)

### 第4关 commit

> The 'README' file has been added to your staging area, now commit it.
>
> 'README' 文件已经添加到暂存区了，现在提交它吧。

承上关，把文件添加到暂存区以后，就该提交文件了。提交命令是 `git commit`，像下面这样写：

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

回忆一下第1关，当时我们是把本地目录初始化成 Git 仓库的，除此之外，还有一种情况可以创建 Git 仓库，就是把服务器上的仓库克隆到本地，它的命令格式是：

```
$ git clone http://remote.repo.url
```

此命令执行之后，就在当前目录下创建一个与远程仓库同名的子目录，同时把远程仓库的所有文件复制到这个新建的子目录中。

第5关过关画面如下：

![第5关 clone]({{page.imagePath}}/level-5-clone.png)

### 第6关 clone_to_folder

> Clone the repository at https://github.com/Gazler/cloneme to 'my_cloned_repo'.
>
> 克隆远程仓库 https://github.com/Gazler/cloneme 到本地的 'my_cloned_repo' 目录。

要是你想把克隆到本地的仓库命名为一个和远程仓库不一样的目录名，就在 `git clone` 的后面追加一个自定义的目录名，像这样：

```
$ git clone http://remote.repo.url your-folder
```

第6关过关画面如下：

![第6关 clone_to_folder]({{page.imagePath}}/level-6-clone-to-folder.png)

### 第7关 ignore

> The text editor 'vim' creates files ending in '.swp' (swap files) for all files that are currently open.  We don't want them creeping into the repository.  Make this repository ignore '.swp' files.
> 
> 文本编辑器 'vim' 会自动创建以 '.swp' 结尾的临时交换文件，我们不想让这些文件进入到仓库，让仓库忽略掉这些 '.swp' 文件。

在开发时经常会因编辑器、IDE、编译器或其他什么程序自动生成一些临时文件、日志文件什么的，这些都不算源代码，所以不应该让 Git 来管理。

.gitignore 文件存放在仓库的根目录下，专用于配置可忽略文件的规则，它是一个文本文件，每行书写一条规则，常用的规则举例如下：

```
# 忽略掉文件名是 foo.txt 的这个文件
foo.txt

# 忽略所有 log 文件
*.log

# 但 important.log 是个例外，不忽略
!imprtant.log
```

第7关过关画面如下：

![第7关 ignore]({{page.imagePath}}/level-7-ignore.png)

### 第8关 include

> Notice a few files with the '.a' extension.  We want git to ignore all but the 'lib.a' file.
> 
> 我们想忽略以 '.a' 为扩展名的文件，但不忽略 'lib.a' 这个文件。

在上一关讲到的忽略规则中，最后一条是把某个文件排除在已有规则之外，正好用它来解这一关：

![第8关 include]({{page.imagePath}}/level-8-include.png)

### 第9关 status

> There are some files in this repository, one of the files is untracked, which file is it?
> 
> 仓库中有一个文件是未被 Git 管理的，请问是哪一个文件？

Git 管理下的文件有多种状态，在工作中你经常需要先查询文件状态才能决定下一步做什么或怎么做，所以它的重要性和 Linux 的 `ls` 命令是一样重要的，是几乎所有操作的起点。

查看仓库状态的命令是：

```
$ git status
$ git status -s
```

第1条命令表示以详细格式查看，第2条命令表示以紧凑格式查看。默认的详细格式包含以下内容：

* untracked：仓库里新建的文件，或者从别的地方复制到仓库里的文件，它们的状态都是 "untracked"，它们被用红字显示在查询结果的 "Untrakced files" 段落中。

* modified：被编辑过的文件的状态就变为 "modified"，它们被用红字显示在查询结果的 "Changes not staged for commit" 段落中。

* staged：通过 `git add` 命令加入到暂存区的文件的状态就变为 "staged"，它们被用绿字显示在查询结果的 "Changes to be committed" 段落中。

如果上面的状态把你搞乱了，请翻到前面第3关，再仔细看一下“Git 文件生命周期”那张图。

第9关和第10关考核是正是你对 git status 查询结果的阅读能力，第9关是要你从查询结果中识别出 untracked 状态的文件。

第9关过关画面如下：

![第9关 status]({{page.imagePath}}/level-9-status.png)

### 第10关 number_of_files_committed

> There are some files in this repository, how many of the files will be committed?
> 
> 仓库中有多少文件即将被提交？

这一关是要你从查询结果中识别出 staged 状态的文件。

第10关过关画面如下：

![第10关 number_of_files_committed]({{page.imagePath}}/level-10-number-of-files-committed.png)