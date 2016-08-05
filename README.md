# S.M.R.T mk II

## Getting Started

#### Prerequisites
Please ensure you have the following installed:
- [Node (and NPM)](https://nodejs.org/en/)
- [Java SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/)
- [Firefox](https://www.mozilla.org)
- [Selenium Standalone Server](http://www.seleniumhq.org/download/)

#### Setup
1. Clone this repo
1. `cd` into the project
1. Install the dependencies with `npm install`

#### Testing
- Run `npm test` to run the test suite

#### Server
- Run `npm start` to start the server

-----

## Usage
#### Mirror Display
- The mirror display can be accessed at [http://localhost:4001/mirror](http://localhost:4001/mirror)
- It should automatically refresh if the configuration changes

#### Control Panel
- The control panel can be accessed at [http://localhost:4000](http://localhost:4000)
- Clicking the tick icon will toggle the widget enabled/disabled
- Clicking the cog icon will expand a popup to configure an individual widget
- The grid represents the layout of the mirror view. Widgets can be dragged and dropped to change position
