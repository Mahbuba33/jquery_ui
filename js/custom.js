// draggable
$( function() {
    $( "#draggable" ).draggable();
  } );
// draggable
// draggable
$( function() {
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
// draggable
// resizable 
$( function() {
    $( "#resizable" ).resizable();
  } );
// resizable 

// selectable 
$( function() {
    $( "#selectable" ).selectable();
  } );
// selectable 
// sortable
 $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
// sortable
// accordion
$( function() {
    $( "#accordion" ).accordion();
  } );
// accordion
// autocomplete
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
// autocomplete
// button
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
// button
// Checkbox
  $( function() {
    $( "input" ).checkboxradio();
  } );
// Checkbox

// controlgroup
$( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
  } );
// controlgroup
// datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );
// datepicker
// dialog
$( function() {
    $( "#dialog" ).dialog();
  } );
// dialog
// menu
$( function() {
    $( "#menu" ).menu();
  } );
// menu
// progressbar
$( function() {
    $( "#progressbar" ).progressbar({
      value: 60
    });
  } );
// progressbar

// selectmenu
$( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );
// selectmenu
// slider
$( function() {
    $( "#slider" ).slider();
  } );
// slider
// spinner
$( function() {
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );
// spinner
// tabs
$( function() {
    $( "#tabs" ).tabs();
  } );
// tabs
// tooltip
// $( function() {
//     $( document ).tooltip();
//   } );
// tooltip

// toggler
$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
// toggler
// easing
 $( function() {
    if ( !$( "<canvas>" )[0].getContext ) {
      $( "<div>" ).text(
        "Your browser doesn't support canvas, which is required for this demo."
      ).appendTo( "#graphs" );
      return;
    }
 
    var i = 0,
      width = 100,
      height = 100;
 
    $.each( $.easing, function( name, impl ) {
      var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
        text = $( "<div>" ).text( ++i + ". " + name ).appendTo( graph ),
        wrap = $( "<div>" ).appendTo( graph ).css( 'overflow', 'hidden' ),
        canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];
 
      canvas.width = width;
      canvas.height = height;
      var drawHeight = height * 0.8,
        cradius = 10;
        ctx = canvas.getContext( "2d" );
      ctx.fillStyle = "black";
 
      // Draw background
      ctx.beginPath();
      ctx.moveTo( cradius, 0 );
      ctx.quadraticCurveTo( 0, 0, 0, cradius );
      ctx.lineTo( 0, height - cradius );
      ctx.quadraticCurveTo( 0, height, cradius, height );
      ctx.lineTo( width - cradius, height );
      ctx.quadraticCurveTo( width, height, width, height - cradius );
      ctx.lineTo( width, 0 );
      ctx.lineTo( cradius, 0 );
      ctx.fill();
 
      // Draw bottom line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight + .5 );
      ctx.lineTo( width * 0.9, drawHeight + .5 );
      ctx.stroke();
 
      // Draw top line
      ctx.strokeStyle = "#555";
      ctx.beginPath();
      ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
      ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
      ctx.stroke();
 
      // Plot easing
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo( width * 0.1, drawHeight );
      $.each( new Array( width ), function( position ) {
        var state = position / width,
          val = impl( state, position, 0, 1, width );
        ctx.lineTo( position * 0.8 + width * 0.1,
          drawHeight - drawHeight * val * 0.7 );
      });
      ctx.stroke();
 
      // Animate on click
      graph.on( "click", function() {
        wrap
          .animate( { height: "hide" }, 2000, name )
          .delay( 800 )
          .animate( { height: "show" }, 2000, name );
      });
 
      graph.width( width ).height( height + text.height() + 10 );
    });
  } );
// easing
// removesClass
// $( function() {
//     $( "#button" ).on( "click", function() {
//       $( "#effect" ).removeClass( "newClass", 1000, callback );
//     });
 
//     function callback() {
//       setTimeout(function() {
//         $( "#effect" ).addClass( "newClass" );
//       }, 1500 );
//     }
//   } );
// removesClass