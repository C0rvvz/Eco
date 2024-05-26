function openReplyBox(button) {
    var replyBox = button.parentElement.nextElementSibling;

    // Verificar si replyBox no es null antes de acceder a su propiedad style
    if (replyBox) {
        console.log("replyBox encontrado:", replyBox);
        replyBox.style.display = 'block'; // Muestra la ventana de respuesta

        // Muestra el botón "Enviar" dentro de la ventana de respuesta
        var sendButton = replyBox.querySelector('.send-reply-button');
        if (sendButton) {
            console.log("sendButton encontrado:", sendButton);
            sendButton.style.display = 'block';
        }
    }

    // Ocultar el botón "Responder"
    button.style.display = 'none';
}




