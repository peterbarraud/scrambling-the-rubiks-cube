$(document).ready(function(){
    var screenwidth = parseInt($(window).width());
    var imagewidth = screenwidth < 700 ? 70 : 85;
    if (window.location.href.indexOf('showversion') > -1){
        $( '#versionnumber' ).css('display','block');
        $( '#versionnumber' ).text($('meta[name=versionnumber]').attr('content'));
    } else {
        $( '#versionnumber' ).css('display','none');
    }
    const row_len = parseInt(screenwidth/imagewidth);
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
      var tr = null;
      $.each(moves, function(i, move){
          if (i%row_len === 0){
              tr = $( '<tr/>' );
          } else if((i+1)%row_len === 0){
            $( 'table' ).append(tr);
          }
          tr.append('<td><img src="imgs/' + moves[i] + '.png" width=' + imagewidth + 'px><br>' + moves[i] + '</td>');
      });
      $( 'table' ).append(tr);

  });