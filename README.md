# rtc-signaller-testrun

This is a suite of tests that will allow you to test how solid
your custom signaller is against some "real world" usage within
both [`rtc-quickconnect`](https://github.com/rtc-io/rtc-quickconnect)
and the lower level [`rtc-tools`](https://github.com/rtc-io/rtc-tools).


[![NPM](https://nodei.co/npm/rtc-signaller-testrun.png)](https://nodei.co/npm/rtc-signaller-testrun/)

[![Build Status](https://img.shields.io/travis/rtc-io/rtc-signaller-testrun.svg?branch=master)](https://travis-ci.org/rtc-io/rtc-signaller-testrun) [![stable](https://img.shields.io/badge/stability-stable-green.svg)](https://github.com/dominictarr/stability#stable) 
[![Gitter chat](https://badges.gitter.im/rtc-io.png)](https://gitter.im/rtc-io)



## Example Usage

```js
var testrun = require('rtc-signaller-testrun');
var messenger = require('rtc-switchboard-messenger');
var signaller = require('rtc-signaller');

function createSignaller(opts) {
  return signaller(messenger('https://switchboard.rtc.io'), opts);
}

testrun(createSignaller);

```

## License(s)

### Apache 2.0

Copyright 2013 - 2015 National ICT Australia Limited (NICTA)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
