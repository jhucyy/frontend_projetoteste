
$(document).ready(function(){

  $("#loguinAluno").submit(function(event){


    var usuario = $("#inputUsuario").val()
    var senha = $("#inputSenha").val()


    //*Testar se usuario e senha estão corretos*//

    if(usuario == "nome" && senha == "1234"){
      $("#mensagem").addClass("alert alert-sucess alert-dismissible fade show")

      $("mensagem").removeClass("alert-warning")

      $("#mensagem").text("Usuário logado!").show().fadeOut(3000)

    }else{
        $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")

      $("mensagem").removeClass("alert-sucess")
      
      $("#mensagem").text("Usuário ou senha inválida!").show().fadeOut(3000)

      event.preventDefault()

    }

  })
})