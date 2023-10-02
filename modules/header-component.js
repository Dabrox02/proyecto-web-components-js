export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        const text = this.getAttribute("text") ? this.getAttribute("text") : "";
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            header{
                width: 100%;
                background-color: #303030;
                color: white;
                font-size: 2rem;
                text-align: center;
            }
        </style>
        <header>
            <nav>
                ${text}
            </nav>
        </header>
            `
    }

    connectedCallback() {
        this.shadowRoot.querySelector('header').addEventListener("click", (e) => {
            alert("Evento Click")
        })
    }
}


customElements.define('header-component', HeaderComponent);