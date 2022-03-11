import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import js_styles from './my-element.css.js';
import css_styles from "./my-element.css";
import scss_styles from "./my-element.scss";

@customElement('my-element')
export class MyElement extends LitElement {
  static readonly styles = [css_styles, scss_styles, js_styles];

  render() {
    return html`
      <div>
          <h1>A simple LIT, SASS, CSS and Typescript Starter</h1>
          Some random text in root of div!
          <p>A simple paragraph</p>
      </div>
    `;
  }
}