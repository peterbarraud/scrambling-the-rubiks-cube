$(document).ready(function(){
    var screenwidth = parseInt($(window).width());
    var imagewidth = screenwidth < 700 ? 70 : 120;
    $( '#versionnumber' ).text($('meta[name=versionnumber]').attr('content'));
    $( '#screenwidth' ).text(screenwidth);
    const row_len = screenwidth < 700 ? 4 : 12;
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
      for (var i=0;i<moves.length;i++){
          var tr = $( '<tr/>' );
          for (var j=0;j<row_len;j++){
              tr.append('<td><img src="imgs/' + moves[i] + '.png" width=' + imagewidth + 'px></td>');
              i += 1;
              if (i==moves.length){
                  break;
              }
          }
          $( 'table' ).append(tr);
      }

      console.log('all don')
  });