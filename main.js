$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();

    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const novaImagem = $('#add-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${novaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="img-link">
        <a href="${novaImagem}" target="_blank"/> Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#add-img-nova').val('')

    })


    })