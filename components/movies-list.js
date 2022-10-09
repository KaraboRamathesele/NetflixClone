
class Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div>THIS IS THE MOVIE LIST</div>'
    }
}

customElements.define('movie-list', Component)