# mscode
Trying out Microsoft Visual Studio Code on my Mac OS X Yosemite computer

## About Microsoft Visual Studio Code
Today (30/04/2015) I discovered that Microsoft had released a new free _cross platform_ code editor, and this is my first reposetory created in Code.
It will contain all the teste I do.

This file has been written inside a split-editor view, which was kind of nice!
I had an instant preview of my MarkDown code:
![Image](https://dl.dropboxusercontent.com/u/3260327/Sk%C3%A6rmbillede%202015-04-30%2023.20.00.png)

I Follow the [Developing Node Applications](https://code.visualstudio.com/docs/nodejs) tutorial which is linked from Code.

Coding in Javascript (or Typescript I guess) you will get Intellisense as you type, pretty nice:
![http intellisence](https://dl.dropboxusercontent.com/u/3260327/codeIntellisense.png)

Trying to launch my Node.JS app lead to an error informing me that Mono (a newer version than the one I had installed) was required:
![Mono 3.1.0 or greater required](https://dl.dropboxusercontent.com/u/3260327/mono310required.png) 

I found Mono version 4.0.0 [here](http://www.mono-project.com/download/).  A `.pkg` file of around 201 Mb, downloaded (and installed ≈ 610 Mb).
 
Even after installing I could not launch my Node.js app. I then tried to restart Code... Which did not solve the problem.

I asked our friend (Google) which suggested that other had come across this issue. A solution was offered on another friendly site (stackoverflow.com), where someone suggested that using `brew install mono` should help, so I tried that.
([My guess is that your mono installation did not add mono to the PATH...](http://stackoverflow.com/questions/29956098/debugging-node-js-in-visual-studio-code-preview-on-os-x) which seemed likely :-)
