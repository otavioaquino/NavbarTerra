  var ids_arr,json,id;

  /** Função de retorno do jsonp */
  function navbar_callback(data){
      json = data;
  }
  
  /** Função responsável por mergulhar no nível */
  function diveIn(obj, lvl){
    if(lvl<ids_arr.length){
      for (var i = 0; i < obj.length; i++) {
        if(obj[i].id == ids_arr[lvl]){
          print(obj[i]);
          diveIn(obj[i].items, lvl+1); 
          break;  
        };
      }
    }
  }

  function print(obj){
    $("#navbar-item").html("<a href='"+obj.url+"'>"+obj.label+"</a>"); 
  }

  $(document).ready(function(){
    var url = "http://s1.trrsf.com/navbar/js/nav_121.js";

    $.ajax({
       type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp'
    });

    $("#btn").bind('click', function() {
      id = $("#key").val();
      ids_arr = id.split(/-/gi);//quebra o identificador multinível e atribui à variável
      diveIn(json.all, 0);
      return false;
    });

  });