class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    // connect the component to the DOM when called
    connectedCallback() {
        // the hteml to display when the tags are used
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> 
            (<span id="cart-count"></span>)`;
    }
}

// define how the custom component will be called
customElements.define('cart-component', CartComponent);