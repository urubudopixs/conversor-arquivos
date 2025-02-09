 Adicionando o evento de submit no formulário
document.getElementById('uploadForm').addEventListener('submit', function(event) {
     Previne o envio do formulário para que possamos manipular o arquivo
    event.preventDefault();
    
     Pegando o arquivo selecionado pelo usuário
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

     Verificando se um arquivo foi selecionado
    if (file) {
        alert('Arquivo pronto para conversão ' + file.name);
         Aqui você pode adicionar a lógica de conversão do arquivo

         Exemplo apenas exibindo o nome do arquivo no console
        console.log('Arquivo sele
