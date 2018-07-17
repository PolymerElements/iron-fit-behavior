[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-fit-behavior.svg)](https://www.npmjs.com/package/@polymer/iron-fit-behavior)
[![Build status](https://travis-ci.org/PolymerElements/iron-fit-behavior.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-fit-behavior)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-fit-behavior)

## IronFitBehavior

`IronFitBehavior` positions and fits an element in the bounds of another
element and optionally centers it in the window or the other element.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-fit-behavior),
 [Demo](https://www.webcomponents.org/element/@polymer/iron-fit-behavior/demo/demo/index.html).

## Usage

### Installation

```
npm install --save @polymer/iron-fit-behavior
```

### In a Polymer 3 element

```js
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {IronFitBehavior} from '../iron-fit-behavior.js';

class SimpleFit extends mixinBehaviors(IronFitBehavior, PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          background: white;
          border: 2px solid gray;
        }
      </style>
      This element can be positioned using the features of IronFitBehavior.
    `;
  }
}

customElements.define('simple-fit', SimpleFit);
```

## Contributing

If you want to send a PR to this element, here are the instructions for running
the tests and demo locally:

### Installation

```sh
git clone https://github.com/PolymerElements/iron-fit-behavior
cd iron-fit-behavior
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests

```sh
polymer test --npm
```
