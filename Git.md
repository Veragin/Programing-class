# Git

-   tool for versioning of your code,
-   it allows you to work in team (multiple people is modifying the same project)
-   backup of your code
-   free tool

## Installation

https://github.com/git-guides/install-git

-   windows: https://gitforwindows.org/
-   linux: sudo apt install git-all
-   osx: brew install git

## Services

-   https://github.com/
-   https://gitlab.com/
-   https://bitbucket.org/

##

## Commands

-   `git clone <git address>` ... download git repository to your computer

*   `git status` ... check status of git (check if you are rebasing or merging ... )
*   `git add <path>` ... stage your changes (prepare for commit)
*   `git commit -m "commmit massage"` ... create new commit from staged changes (`--fixup`)
*   `git push` ... push commits to origin (`-f` ... force push)
*   `git pull` ... download changes from origin and move local branch
*   `git fetch` ... download changes from origin
*   `git branch <name>` ... create new branch
*   `git checkout <branch name>` ... change working branch
*   `git branch --list` ... list all branches
*   `git merge` ... join two branches into one commit
*   `git rebase` ... move commits in your branch on some other branch (`-i` interactive), (`--autosquash`)
*   `git cherry-pick` ... copy commit to your branch
*   `git reset`

## Workflow

-   create your working branch
-   add new code (do some changes) as a commits
-   create Merge Request (Pull reaquest) ... request to merge your branch into master branch
-   put on Code Review ... another programmer check your changes
-   put on testing ... tester will test your work
-   merge changes into master branch

## Submodules

-   `git submodule init` ... initialize submodules
-   `git submodule add` ... adds submodule from another repository
-   `git submodule update` ... set submodules to right version
