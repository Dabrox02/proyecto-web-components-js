export class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = /*html*/`
        <head>
            <link rel="stylesheet" href="components/button-component/button-component.css">
        </head>
        <div>
            <button part="clase-shadow-dom">
               Hola, usuario <slot>desconocido</slot>
            </button>
        </div>
            `
    }
}
customElements.define("button-component", ButtonComponent);