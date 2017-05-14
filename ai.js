function ai() {

}

function aiPlayer(dna) {
    this.fit = 0;
    this.dna = dna;

    this.calc = function() {
        return (d > dna.min && d < dna.max);
    }
}

function Dna(min, max) {
    this.min = min;
    this.max = max;
}
