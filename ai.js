function AI() {

    this.playersai = [];

    this.start = true;
    this.toTest = 0;
    this.maxToTest = 10;
    this.generation = 0;

    this.tick = function() {
        if (this.start) {
            this.start = false;
            //let dnas = []
            for (let i = 0; i < this.maxToTest; i++) {
                let min = floor(random(0,10));
                let max = floor(random(5, 15));
                let dna = new Dna(min, max);
                this.playersai[i] = new aiPlayer(dna);
            }
        }

        if (pause) {
            if (this.toTest + 1 == this.maxToTest) {
                let bestDna  = undefined;
                let bestDna2 = undefined;
                let bestFit = 0;
                let bestFit2 = 0;
                for (let a in this.playersai) {
                    let b = this.playersai[a];
                    if (b.fit < bestFit) {
                        bestFit2 = bestFit;
                        bestFit = b.fit;
                        bestDna2 = bestDna;
                        bestDna = b.dna;
                    }else(b.fit < bestFit2) {
                        bestFit2 = b.fit;
                        bestDna2 = b.dna;
                    }else (b.fit == bestFit) {
                        bestFit2 = bestFit;
                        bestFit = b.fit;
                        bestDna2 = bestDna;
                        bestDna = b.dna;
                    }
                }

                if  (bestDna == undefined && bestDna2 == undefined) {
                    this.start = true;
                    return;
                }

                playersai = [];

                for (let i = 0; i < this.maxToTest; i++) {
                    let min = bestDna.min + floor(random(-1,1) * 10);
                    let max = bestDna2.max + floor(random(-1,1) * 10);
                    let dna = new Dna(min, max);
                    this.playersai[i] = new aiPlayer(dna);
                }
            } else {
                this.toTest++;
                pause = false;
            }
            return;
        }

    }

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
