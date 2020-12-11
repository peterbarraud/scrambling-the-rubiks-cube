$(document).ready(function(){
    const row_len = 7;
    var scrabmle_str = "L2 R D2 L' B F' L D' U2 F L' R F D2 U B' L' R2 B' R D L' D' L2 B' R U' R' B2 D";
    $ ( '#scramble' ).text(scrabmle_str);
    var moves = [];
    $( scrabmle_str.toLocaleLowerCase().split(' ') ).each(function(i, move) {
        if (move[1] === "'"){
            moves.push(move[0] + '-prime');
        } else{
            if (move[1] === "2")
                moves.push(move[0]);
                moves.push(move[0]);
        }        
      });
      var cell_count = 0;
      for (var i=0;i<moves.length;i++){
          var tr = $( '<tr/>' );
          for (var j=0;j<row_len;j++){
              tr.append('<td><img src="imgs/' + moves[i] + '.png"></td>');
              i += 1;
              if (i==moves.length){
                  break;
              }
          }
          $( 'table' ).append(tr);
      }

      console.log('all don')
  });