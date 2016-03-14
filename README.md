
# Win32 Simple Calculator

## Build

### Prerequisite

 * MinGW >= 5.0.0

 * Node.js >= 5.0.0, with npm

 * Git >= 2.7.0

### Build steps

#### Clone this repo

```bash
mkdir calculator
cd calculator
git clone https://github.com/khai-learn-cpp/calculator.git .
```

#### Fetch dependencies

```bash
node --es-staging ./install.js
node --es-staging ./fetch.js
```

#### Run build script

```bash
node --es-staging ./build.js
```

## Run

Go to directory [out](./out) to find executable binaries
