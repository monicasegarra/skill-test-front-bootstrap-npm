/**
 * Import npm dependencies
 * 
 */
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/**
 * Initialize JS
 * 
 */
$(document).ready(() => {
    // 
});

//Register modal
var modal = document.getElementById("modal-skill-test");
var btn = document.getElementById("myBtnModal");
var span = document.getElementsByClassName("close")[0];

//Show modal
btn.onclick = function() {
    $('#modal-skill-test').modal('show');
}

span.onclick = function() {
    modal.style.display = "none";
}

var Swal = require('sweetalert2');

$("#register").submit(function(e) {
    e.preventDefault();
    
    var $name = $('#modal-skill-test-name').val();
    var $surname = $('#modal-skill-test-surname').val();
    var $email = $('#modal-skill-test-email').val();

    //User object
    var userData = {
      name: $name,
      surname: $surname,
      email: $email
    }

    $.ajax({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      data: userData,
      success: function(data) {
        
        //Show Sweetalert2 modal
        Swal.fire({
            type: "success",
            title: `User '${data.name} ${data.surname}' created`,
            text: `A confirmation email was sent to '${data.email}'`,
            showConfirmButton: false,
            timer: 1500
        });

        //Close modal and reset inputs values
        $('#modal-skill-test').modal('hide');
        $('#register')[0].reset();
      }      
    });
  });    