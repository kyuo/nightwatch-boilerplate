# nightwatch-boilerplate

## Environment 

HOST OS : macOS 

## Setup

1. Nightwatch 설치

```
$ yarn init
$ yarn add -D nightwatch
```

2. Selenium 설치

```
$ java -version
openjdk version "1.8.0_222"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode)
```

selenium-server-standalone-3.9.1.jar 설치

http://selenium-release.storage.googleapis.com/index.html

```
$ mkdir bin
$ mv $SELENIUM-FILE ./bin
```

3. Chromedriver 설치

Chrome 버전에 맞게 설치

https://sites.google.com/a/chromium.org/chromedriver/downloads


4. Nightwatch.js 설정

nightwatch.json 파일


## REFERENCE 

[end-to-end-testing-with-nightwatch-js-node-js-at-scale/](https://blog.risingstack.com/end-to-end-testing-with-nightwatch-js-node-js-at-scale/)
