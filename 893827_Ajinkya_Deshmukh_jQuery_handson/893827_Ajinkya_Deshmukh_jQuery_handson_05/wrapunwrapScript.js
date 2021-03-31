var pTags = $( "p" );
$( "button" ).click(function() {
  if ( pTags.parent().is( "div" ) ) {
    pTags.unwrap();
  } else {
    pTags.wrap( "<div></div>" );
  }
});