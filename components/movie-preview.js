
class Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div>THIS IS THE MOVIE PREVIEW</div>'
    }
}

customElements.define('movie-preview', Component)