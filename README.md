# S.M.R.T with Intel Edison

## Getting Started

### Hardware
You'll need an Intel Edison (obviously) for running the server and a computer/Raspberry Pi to handle the display.

- Plug the Intel Edison into your computer/Raspberry Pi via USB and open up the terminal (this works on OSX, not yet tested on the Pi). Note: one USB port is for power, the other is for data transfer
- Run `ls /dev/cu.usbserial-*` to find the Edison's ID
- Run `screen /dev/xx.usbserial-XXXX 115200 –L` where XXXX is the ID from the step above (`sudo apt-get install screen` if you don't have it)
- You'll be met with an empty terminal.. just press enter twice and the login stuff should appear
- `configure_edison --wifi` to log into your wifi network. Once connected, it should print a local IP address that you can use to SSH into the device (`ctrl+A` then `ctrl+\` to exit screen)
- If you manage to `SSH root@ip-address` successfully, you can unplug the Edison from your computer! Wahey..

### Software

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
