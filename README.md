## defer-render-hoc

<p>Defer expensive react rendering with rAF</p>

<br />

## Install

```
$ npm install defer-render-hoc --save
```

## Usage

```js
import React, { Component } from 'react'
import Scroll from 'defer-render-hoc'

class RandomComp extends Component {
  ...

  render () {
    const { scroll } = this.props

    ...
  }
}

export default DeferRender(RandomComp)
```

MIT © [Jack Hanford](http://jackhanford.com)
