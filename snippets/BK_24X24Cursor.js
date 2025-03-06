javascript:(function() {
    var cursorSize = 22;
    var cursor = document.createElement('div');
    cursor.style.width = cursor.style.height = cursorSize + 'px';
    cursor.style.position = 'fixed';
    cursor.style.top = cursor.style.left = '0';
    cursor.style.background = 'transparent'; // Transparent background
    cursor.style.border = '1px solid white'; // White border
    cursor.style.outline = '1px solid black'; // Surrounding black outline
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.id = 'custom-cursor';

    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        var customCursor = document.getElementById('custom-cursor');
        if (customCursor) {
            customCursor.style.top = (e.clientY - cursorSize / 2) + 'px';
            customCursor.style.left = (e.clientX - cursorSize / 2) + 'px';
        }
    });

    // Optional: A way to remove the custom cursor when done testing
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            var customCursor = document.getElementById('custom-cursor');
            if (customCursor) {
                customCursor.remove();
            }
        }
    });
})();
