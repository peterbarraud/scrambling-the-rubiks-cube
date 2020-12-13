class Scrambler {
    constructor() {
        var request = new XMLHttpRequest();
        request.open('GET', 'scrambles.json', false);  // `false` makes the request synchronous
        request.send(null);
        this.scrambles = JSON.parse(request.responseText);
        this.done = [];
    }
    getScramble() {
        var retval = null;
        while (true){
            var i = Math.floor(Math.random() * this.scrambles.length);
            if (this.done.indexOf(i) === -1){
                retval = this.scrambles[i].scramble;
                this.done.push(i);
                break;
            }
        }
        return retval;
    }
  }