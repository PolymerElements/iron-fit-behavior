import '../../polymer/polymer.js';
import { IronFitBehavior } from '../iron-fit-behavior.js';
import '../../paper-styles/color.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        background-color: var(--paper-light-blue-500);
        color: white;
        text-align: center;
      }
    </style>
    <slot></slot>
`,

  is: 'simple-fit',

  behaviors: [
    IronFitBehavior
  ]
});
