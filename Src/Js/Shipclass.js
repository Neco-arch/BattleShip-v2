class ShipFactory {
    constructor(length) {
        this.length = length
        this.hitcounter = 0
        this.is_Sunk = false
    }

    hit() {
        this.hitcounter += 1
    }

    Check_Ship() {
        if (this.hitcounter >= this.length) {
            this.is_Sunk = true
            return "sunk"
        }
    }
}

export { ShipFactory }