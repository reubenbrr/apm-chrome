$(document).ready( function() {
	getLinks();
	$('#load').click( function () {
		console.log(arr);
		getLinks();
	});
});

function getLinks(){
	var	arr = [],
		i = 0,
		album = $('.album-details h1.title'),
		track = $(".track[data-id]");

	album.each( function (i) {
		var album = $(this).text().split('-'),
			artist = $.trim(album[0]),
			albumName = $.trim(album[3]);

		arr.push({
			'artist': artist,
			'album': $.trim(album[3]),
			'songs': []
		});
		track.each( function (j) {
			var id = $(this).attr('data-id'),
				idSplit = id.split('_');
				name = $('.track[data-id="'+id+'"] span.title').text();
				albumId = idSplit[1],
				artistId = idSplit[0],
				catalogNumber = albumId+'_'+artistId+'_'+idSplit[2],
				song = idSplit[2]+'_'+idSplit[3],
				url = 'audio.apmmusic.com/mp3_128/'+artistId+'/'+albumId+'/'+catalogNumber+'/'+id+'.mp3';

			j++;

			arr[i].songs.push({
				'name': name,
				'dataId': id,
				'artistId': artistId,
				'albumId': albumId,
				'catalogNumberId': catalogNumber,
				'songId': song,
			});
			if ( j <= 2 ){
				$('.popuptable tbody').append('<tr [data-id="'+id+'"]><td>'+artist+'</td><td>'+album+'</td><td>Name: '+j+'</td><td>Name: '+name+'</td></tr>');
			} else {
				$('.popuptable tbody').append('<tr [data-id="'+id+'"]><td></td><td></td><td>Name: '+j+'</td><td>Name: '+name+'</td></tr>');
			}
			console.log(url);
		});
		console.log(arr);
	});
}
