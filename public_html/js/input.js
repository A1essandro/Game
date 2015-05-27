(function () {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch (code) {
            case 32:
                key = 'SPACE';
                break;
            case 37:
            case 65:
                key = 'LEFT';
                break;
            case 38:
            case 87:
                key = 'UP';
                break;
            case 39:
            case 68:
                key = 'RIGHT';
                break;
            case 40:
            case 83:
                key = 'DOWN';
                break;
            case 81:
                key = 'SLEFT';
                break;
            case 69:
                key = 'SRIGHT';
                break;
            default:
                // Convert ASCII codes to letters
                key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function (e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function (e) {
        setKey(e, false);
    });

    window.input = {
        isDown: function (key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();