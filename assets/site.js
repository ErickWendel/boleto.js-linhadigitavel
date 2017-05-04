(function () {
    $('.barcode').height($('#barcode_height').val())
    var linhaDigitavel = $('#linha_digitavel')
        .mask('00000.00000 00000.000000 00000.000000 0 00000000000000')
        .val();
    new Boleto(linhaDigitavel).toSVG('#barcode');

})()