# Project Title

Aeneas GUI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Dependencies required

#### Runtime

```
aeneas core along with all required python dependencies
ffmpeg
espeak
youtube-dl python module (optional)
```
### Build Time
```
node.js
electron
bower
polymer(global modules)
other node.js modules
```

## Installing

Node.js is required to be installed locally only while building the application

### Install node.js and polymer-cli

```
sudo npm install -g polymer-cli
```

### Bower
```
sudo npm install -g bower
bower install
mv bower_components lib
```
It is important to rename the bower_components folder as then we can save space in the final package

### Build final package
```
./make --windows
./make --osx
./make
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Polymer](https://github.com/Polymer/polymer) - The web framework library used
* [electron](https://github.com/electron/electron) - The cross-platform desktop application the application runs on
* [AppImage](https://github.com/AppImage/AppImageKit) - For building the linux binary appImage

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/chetan-prime/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [git](http://git.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/chetan-prime/project/tags). 

## Authors

* **Chetan Chauhan** - *Initial work* - [chetan-prime](https://github.com/chetan-prime)

See also the list of [contributors](https://github.com/chetan-prime/aeneas-gui/CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the AGPL License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc



