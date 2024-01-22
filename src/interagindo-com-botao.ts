class Cor {
    protected cor: string

    constructor(cor: string) {
        this.cor = cor
    }
}

class Click extends Cor {
    protected clique: string

    constructor(clique: string) {
        super(clique)
        this.clique = clique
    }

    onClick() {
        const btn = document.querySelector(this.clique) as HTMLButtonElement;
        btn.addEventListener("click", () => {
            if (this.clique === "#btn-blue") {
                this.cor = "blue"
            } else {
                this.cor = "red"
            }
            console.log(this.cor)
            document.body.style.backgroundColor = this.cor;
        })
    }
}

const clickBlue = new Click("#btn-blue")
clickBlue.onClick()

const clickRed = new Click("#btn-red")
clickRed.onClick()
