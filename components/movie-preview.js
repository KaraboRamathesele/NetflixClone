
class Component extends HTMLElement {
    inner = this.attachShadow({ mode: 'closed '})

    data = {
        label: this.getAttribute('label'),
        image: this.getAttribute('image'),

    }

    connectedCallback() { 
        this.inner.innerHTML = /* html */ `
            <style>
               * { box-sizing: border-box } 

               .resting {
                    border: 1px solid grey;
                    padding: 1rem;
                    background: url("${this.data.image}");
                    background-size: cover;
                    background-position: center;
                    cursor: pointer;
                    position: relative;
                    height: 200px;
                    width: 400px;
                    
               }

               .preview {
                    display: none;
                    position: absolute;
                    top: -40%;
                    left: -20%;
                    width: 140%;
                    height: 200%;
                    background: black;
               }

               .resting:hover {
                z-index: 10;
               }

               .resting:hover > .preview {
                    display: block;
               }
            </style>

            <div class='resting'>
            <div class='preview'>${this.data.label}</div>
            </div>
            
        `
    }
}

customElements.define('movie-preview', Component)