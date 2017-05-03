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

      console.log(catList[0]['name']);
      var catName = (catList[0]['name']);
      console.log(catList[0]['photo']);
      var catPhoto = (catList[0]['photo']);
      var catInfo = $('<img>').attr('src',catPhoto).attr('alt', catName).appendTo('#cat1');
    });
  });
});
