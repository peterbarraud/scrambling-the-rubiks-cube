$(document).ready(function(){
    var screenwidth = parseInt($(window).width());
    var imagewidth = screenwidth < 700 ? 70 : 85;
    if (window.location.href.indexOf('showversion') > -1){
        $( '#versionnumber' ).css('display','block');
        $( '#versionnumber' ).text($('meta[name=versionnumber]').attr('content'));
    } else {
        $( '#versionnumber' ).css('display','none');
    }
    const row_len = screenwidth < 700 ? 6 : 18;
    var scrambler = new Scrambler();
    
    var scrabmle_str = scrambler.getScramble();
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

  });