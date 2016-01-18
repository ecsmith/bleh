	$( ".wrap-media-embed-overlay").each(function( index ) {
		index++;
		if(index < 10)
			index = "0" + index;
		$( this ).html('<div class="2u 3u(xlarge) 4u(large) 6u(small) 12u(xsmall) wrap-details">'+
		 '<h1>' + index + '</h1>' +
		 '<div class="wrap-details-content">' + 
		 '<ul><li><strong>Wrap Title</strong></li><li class="wrap-title">alksdjhfsalkj</li></ul>' +
		 '<ul><li><strong>My Role</strong></li><li class="my-role">alksdjhfsalkj</li></ul>' +
		 '<ul><li><strong>Wrap Type</strong></li><li class="wrap-type">alksdjhfsalkj</li></ul>' +
		 '<p class="description"></p></div>' +
		 '<a class="button">— Launch —</a></div>');
	});
	$( ".wrap-spotify .wrap-media-embed-overlay .wrap-details-content .wrap-title").text('Spotify Artist Spotlight');
	$( ".wrap-spotify .wrap-media-embed-overlay .wrap-details-content .my-role").text('Vis Design / Widget Design');
	$( ".wrap-spotify .wrap-media-embed-overlay .wrap-details-content .wrap-type").text('Widget Experimentation');
