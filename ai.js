function eng() {

    this.playersai = [];

    this.start = true;
    this.toTest = 0;
    this.maxToTest = 5;
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
            console.log("gen complete");
            printSquare = true;
        }

        if (pause) {
            //console.log("teste");
            if (this.toTest + 1 == this.maxToTest) {
                let bestDna  = undefined;
                let bestDna2 = undefined;
                let bestFit = 0;
                let bestFit2 = 0;
                for (let a in this.playersai) {
                    let b = this.playersai[a];
                    console.log(b);
                    if (b.fit > bestFit) {
                        bestFit2 = bestFit;
                        bestFit = b.fit;
                        bestDna2 = bestDna;
                        bestDna = b.dna;
                    }else if(b.fit > bestFit2) {
                        bestFit2 = b.fit;
                        bestDna2 = b.dna;
                    }else if(b.fit == bestFit) {
                        bestFit2 = bestFit;
                        bestFit = b.fit;
                        bestDna2 = bestDna;
                        bestDna = b.dna;
                    }else if(b.fit == bestFit2) {
                        bestFit2 = b.fit;
                        bestDna2 =  b.dna;
                    }
                }

                console.log("bestDna:" + bestDna + ",bestDna2:" + bestDna2 + ",bestFit:" + bestFit + ",bestFit2:" + bestFit2);

                if  (bestDna == undefined && bestDna2 == undefined) {
                    console.log("error");
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
                this.generation++;
                this.toTest = 0;
                console.log("gen:" + this.generation);
                pause = false;
            } else {
                this.toTest++;
                pause = false;
                console.log("Fail next");
            }
        } else {
            let e = mape.objs.x;
            let d = e - (player.body.position.x + 30);
            if (this.playersai[this.toTest].calc(d)) {
                keyboard();
            }
            //console.log(this.toTest + ":" + this.generation + ":" + d);
        }
        //push();
        //translate(60, 450);

        //pop();
    }

    this.updateFit = function() {
        this.playersai[this.toTest].fit = fit;
    }
}

function aiPlayer(dna) {
    this.fit = 0;
    this.dna = dna;

    this.calc = function(d) {
        return (dna.max > 0) ? (d > dna.min && d < dna.max) : (d < dna.min && d > dna.max) ;
    }
}

function Dna(min, max) {
    this.min = min;
    this.max = max;
}
