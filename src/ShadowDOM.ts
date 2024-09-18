class MyComponent extends HTMLElement {
    constructor() {
        super();

    
        const shadow = this.attachShadow({ mode: 'open' });

        
        const style = document.createElement('style');
        style.textContent = `
            p {
                color: blue;
                font-size: 20px;
            }
        `;

        
        const content = document.createElement('div');
        content.innerHTML = `
            <p>Hello from Shadow DOM!</p>
        `;

        
        shadow.appendChild(style);
        shadow.appendChild(content);
    }
}


customElements.define('my-component', MyComponent);