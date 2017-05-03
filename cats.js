$(function () {

  $('.summon-cats').on('click', function(){
    console.log('click!');
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    })
    .done(function(data){
      console.log('.ajax done');
      var catList = data['cats'];

      // To pull only just one cat from json data
      //
      // console.log(catList[0]['name']);
      // var catName = (catList[0]['name']);
      // console.log(catList[0]['photo']);
      // var catPhoto = (catList[0]['photo']);
      // var catInfo = $('<img>').attr('src',catPhoto).attr('alt', catName).appendTo('#cat1');

      // To pull only all the cats from json data
      //
      for (var i = 0; i < catList.length; i++) {
        var catName = catList[i]['name'];
        console.log(catName);
        var catPhoto = catList[i]['photo']
        console.log(catPhoto);
        var catInfo = $('<img>').attr('src', catPhoto).attr('alt', catName).appendTo('#cat'+(1+i))
      }
    });
  });
});
