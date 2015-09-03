# Yieldify Adventure

Project uploaded here: http://webnatives.uk/sandbox/yieldify-adventure

You can also download the zip and open `index.html` in the `release` directory.

### Prerequisites

* [Node / npm] - You need node installed locally to run this project!

### Installation

Open your favorite Terminal and run these commands.

```sh
$ git clone https://github.com/Nazzanuk/yieldify-adventure.git #clone the repo
$ cd yieldify-adventure #set directory
$ sudo npm install #install all node dependencies (might not need sudo)
$ bower install #install all front-end dependencies
$ gulp watch #compile and build the release directory
```

### Important

- The HTML is all stored in the `release` directory
- The source files are stored in the `src` directory
- Once you have `gulp watch` running you can make a change to any of the files in the  `src` and it will regenerate the `release` directory
- Once you have `gulp watch` running the changes live reload at `http://localhost:20000/`
