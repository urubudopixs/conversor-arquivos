document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário

    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];

    if (!file) {
        alert('Por favor, escolha um arquivo para converter!');
        return;
    }

    // Aqui você pode adicionar a lógica para converter o arquivo.
    // Neste exemplo, apenas mostramos um alerta.
    alert('Arquivo selecionado: ' + file.name);

    // Simulação de processo de 
