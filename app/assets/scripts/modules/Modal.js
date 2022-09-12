class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeModalButton = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // close modal click
        this.closeModalButton.addEventListener("click", () => this.closeTheModal())
        // esc key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
        }
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="modal">
            <div class="modal__inner">
                <h2 class="site-section-title site-section-title--blue">header here</h2>
                <div class="wrapper">
                    <p class="modal__description">paragraph here</p>
                </div>
            </div>
            <div class="modal__close">X</div>
        </div>
        `)
    }
}

export default Modal;