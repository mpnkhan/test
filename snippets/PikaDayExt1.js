(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Initialize Pikaday on the input field
    const $arrive = $('[name=arrive]').pikaday();
    console.log($arrive);

    // Define _onKeyChange function
    function _onKeyChange(e) {
        console.log('Key pressed:', e.keyCode); // Log the key code to check if the event is triggered

        // Check if the Pikaday input field is visible
        if ($arrive.is(':visible')) {
            console.log('Pikaday is visible');

            // Get the keycode
            const keyCode = e.keyCode;

            // Check for key actions
            switch (keyCode) {
                case 13:
                case 27:
                    // Blur the input field
                    $arrive.blur();
                    break;
                case 37:
                    // Subtract 1 day
                    $arrive.pikaday('adjustDate', 'subtract', 1);
                    break;
                case 38:
                    // Subtract 7 days
                    $arrive.pikaday('adjustDate', 'subtract', 7);
                    break;
                case 39:
                    // Add 1 day
                    $arrive.pikaday('adjustDate', 'add', 1);
                    break;
                case 40:
                    // Add 7 days
                    $arrive.pikaday('adjustDate', 'add', 7);
                    break;
                case 8:
                case 46:
                    // Clear the date
                    $arrive.pikaday('setDate', null);
                    break;
            }
        }
    }

    // Bind _onKeyChange function to keydown event directly
    $('[name=arrive]').on("keydown", _onKeyChange);

})();
