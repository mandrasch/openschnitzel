// console.log fallback
if (typeof console === 'undefined') {
    window.console = {
        log: function() {}
    };
}

// configuration
var AJAX_UNLOCK_URL = 'codes.json';
var DIGITS = 4; // how many numbers?

// 2DO: NOT IMPLEMENTED YET!
// uncomment following line for PHP-alternative (more secure)
// AJAX_UNLOCK_URL = 'try-to-unlock.php';
// important: rename codes.json file to other filename and change it inside of try-to-unlock.php as well

var sendUnlockCode = function(code_input_from_user) {
    $(".unlock-error-message").hide();
    $(".unlock-success-message").hide();

    $.getJSON(AJAX_UNLOCK_URL, function(data) {

        if (data.codes.hasOwnProperty(code_input_from_user)) {
            var redirect_url = data.codes[code_input_from_user];
            var redirect_message = '<p><h3>Code unlocked!</h3> <a class="btn btn-primary" href="' + redirect_url + '" target="_blank">Open</a></p>';

            //$("#redirect-modal .modal-body").html(redirect_message);
            //$("#redirect-modal").modal();
            // Your application has indicated there's an error
            /*window.setTimeout(function() {
                window.open(redirect_url);
            }, 1500);*/

            $(".unlock-success-message").html(redirect_message).show();

            //$('#pincode-input1').pincodeInput().data('plugin_pincodeInput').clear();

        } else {
            // 2DO show error, code does not exist
            $(".unlock-error-message").fadeIn();
        }
    });

}


$(function() {

    $('#pincode-input1').pincodeInput({
        hidedigits: false,
        inputs: DIGITS,
        complete: function(value, e, errorElement) {
            sendUnlockCode(value);
        },
        change: function(input, value, inputnumber) {
            $(".unlock-error-message").hide();
            $(".unlock-success-message").hide();
        }
    });

    $('#pincode-input1').pincodeInput().data('plugin_pincodeInput').focus();

    // classic method
    $("#open-the-lock-classic").click(function(e) {
        e.preventDefault();
        sendUnlockCode($("#classic-code").val());
    })


}); // eo jQuery