$(document).ready(function(){
    var scrabmle_str = "U2 R2 U R' F' R2 D B2 U L' D U2 F2 U2 R' D2 B' F2 L2 B2 U B2 L2 R B' F' L B F U".toLowerCase();
    $( scrabmle_str.split(' ') ).each(function(i, move) {
        var moves = [];
        if (move[1] === "'"){
            moves.push(move[0] + '-prime');
        } else{
            if (move[1] === "2")
                moves.push(move[0]);
                moves.push(move[0]);
        }
        $ (moves).each(function(i, move){
            $( "table" ).append( "<tr><td><img src='imgs/" + move + ".png'></td?</tr>" );
            console.log(move)
        });
      });
  });