class CartaWc extends HTMLElement {
    #nome:string = ""
    #tipo:string = ""
    #imagem:string = ""
    #render(){
        this.innerHTML=`
            <div>
                <h1>
                ${this.#nome}
                </h1>
                <h1>
                ${this.#tipo}
                </h1>
                <h1>
                ${this.#tipo}
                </h1>
            </div>
        `
    }
    
    constructor() {
        super();
        this.#render()

    }
    connectedCallback(){
        console.log("xxx")
    }
    get nome(){
        return this.#nome;
    }
    get imagem(){
        return this.#imagem;
    }
    get tipo(){
        return this.#tipo;
    }
    set nome(_nome){
        this.#nome = _nome;
    }
    set imagem(_imagem){
        this.#imagem = _imagem;
    }
    set tipo(_tipo){
        this.#tipo = _tipo;
    }
    static get observedAttributes(){
        return ["nome", "tipo", "imagem"];
    }
    attributeChangedCallback(chave:string,antigo:string,novo:string){
        if(chave === "nome" ){
            this.nome = novo;
        }
        if(chave === "imagem"){
            this.imagem = novo;
        }
        if(chave === "tipo"){
            this.tipo = novo;
        }
        this.#render();
    }
}


customElements.define('carta-wc', CartaWc);