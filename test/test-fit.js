import '../../polymer/polymer.js';
import { IronFitBehavior } from '../iron-fit-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        background: black;
        color: white;
        padding: 8px;
      }
    </style>
    <slot></slot>
`,

  is: 'test-fit',

  behaviors: [
    IronFitBehavior
  ]
});
