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
