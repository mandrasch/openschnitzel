// 2DO: console.log workaround

var AJAX_UNLOCK_URL = 'codes.json';

// 2DO: NOT IMPLEMENTED YET!
// uncomment following line for PHP-alternative (more secure)
// AJAX_UNLOCK_URL = 'try-to-unlock.php';
// important: rename codes.json file to other filename and change it inside of try-to-unlock.php as well



var sendUnlockCode = function(code_input_from_user) {
	$(".unlock-error-message").hide();
    $.getJSON(AJAX_UNLOCK_URL, function(data) {

        if (data.codes.hasOwnProperty(code_input_from_user)) {
            var redirect_url = data.codes[code_input_from_user];
            var redirect_message = '<p>You will be redirected automatically. If not - please click <a href="' + redirect_url + '">here</a></p>';
 
            $("#redirect-modal .modal-body").html(redirect_message);
            $("#redirect-modal").modal();

            // Your application has indicated there's an error
            window.setTimeout(function() {
                window.open(redirect_url);
            }, 1500);

            $('#pincode-input1').pincodeInput().data('plugin_pincodeInput').clear();

        } else {
            // 2DO show error, code does not exist
            $(".unlock-error-message").fadeIn();

          	
        }
    });

}


$(function() {

    $('#pincode-input1').pincodeInput({
        hidedigits: true,
        digits: 4,
        complete: function(value, e, errorElement) {
            sendUnlockCode(value);
        }
    });

    $('#pincode-input1').pincodeInput().data('plugin_pincodeInput').focus();



}); // eo jQuery