videojs.registerPlugin('videoBeforePlaylist', function(options) {
  var myPlayer = this,
    beforePlaylistVideo = '4607357817001',
    playlistID = '5769553004001';

  myPlayer.catalog.getVideo(beforePlaylistVideo, function (error, video) {
    //deal with error
    console.log(' get video error', error);

    // +++ Retrieve video to play before playlist and load it +++
    myPlayer.catalog.load(video);

    // +++ Retrieve playlist +++
    myPlayer.catalog.getPlaylist(playlistID, function (error, myPlaylist) {
      // deal with error
      console.log(' get playlist error', error);

      // +++ Place playlist in player, but -1 parameter does not load playlist video in player +++
      myPlayer.playlist(myPlaylist, -1);
    });
  })

  // +++ Set event  handler so after first video plays playlist plays +++
  myPlayer.one('ended', function () {
    myPlayer.playlist.currentItem(0)
  });
});
