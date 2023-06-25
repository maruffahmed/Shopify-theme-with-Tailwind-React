// Web component using "lit" by Google

import { html, css, LitElement } from 'lit'

class Counter extends LitElement {
  static styles = css`
    .counter {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      border-radius: 5px;
      font-size: 2rem;
      padding: 1rem;
    }
    .counter button {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid black;
      background-color: white;
      font-size: 2rem;
      color: black;
      cursor: pointer;
    }
  `
  static properties = {
    steps: { type: Number },
    counter: { type: Number },
  }

  constructor() {
    super()
    this.counter = 0
    this.steps = 1
    this.decrementBtn = '-'
    this.incrementBtn = '+'
  }

  increment() {
    this.counter += this.steps
  }
  decrement() {
    if (this.counter <= 0) return
    this.counter -= this.steps
  }

  render() {
    return html`
      <div class="counter">
        <button class="decrement" @click=${this.decrement}>
          <slot name="decrementBtn">${this.decrementBtn}</slot>
        </button>
        <span class="count"> ${this.counter} </span>
        <button class="increment" @click=${this.increment}>
          <slot name="incrementBtn">${this.incrementBtn}</slot>
        </button>
      </div>
    `
  }
}
customElements.define("counter-component", Counter);