class SortedList {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        //for (let i = 0; i < this.length; i++) {
        this.items.push(item);
        this.items.sort((a, b) => a - b)
        this.length++;
        //}

    }

    get(pos) {
        this.items.indexOf(pos);
        if (pos > this.length) {
            throw new Error('Out of Bounds')
        } else {
            return pos;
        }
    }

    max() {
        if (this.length === 0) {
            throw new Error('EmptySortedList')
        } else {
            return Math.max(...this.items)
        }

    }

    min() {

        if (this.length === 0) {
            throw new Error('EmptySortedList')
        } else {
            return Math.min(...this.items)
        }
    }

    sum() {

        if (this.length === 0) {
            return 0
        } else {
            let sum = this.items.reduce((a, b) => a + b, 0);
            return sum
        }
    }

    avg() {
        if (this.length === 0) {
            throw new Error('EmptySortedList')
        } else {
            let sum = this.items.reduce((a, b) => a + b, 0);
            return sum / this.length;
        }

    }
}

module.exports = SortedList;