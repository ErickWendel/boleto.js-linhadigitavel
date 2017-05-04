const ejs = require('ejs')
const path = require('path')
const formatters = require('./../lib/formatters')

const mapData = (obj) => {
    let renderOptions = {
        'barcode_height': '50',
        'logoURL': obj.logoURL || 'https://bancodata.com.br/assets/img/logos/pan_m.jpg',
        'boleto': {
            'linhaDigitavel': obj.linhaDigitavel || '62390001172100004610800000000117971680000042234',
            'banco': 'pan',
            'dataEmissao': new Date(obj.dataEmissao) || new Date(),
            'dataVencimento': new Date(obj.dataVencimento),
            'valor': obj.valor,
            'nossoNumero': obj.nossoNumero,
            'numeroDocumento': obj.numeroDocumento,
            'cedente': obj.cedente,
            'cedenteCnpj': obj.cedenteCnpj,
            'agencia': obj.agencia,
            'codigoCedente': obj.codigoCedente,
            'carteira': obj.carteira,
            'pagador': `${obj.pagador} \n CPF: ${obj.cpf}`,
            'localPagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
            'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.',
        }
    }
    Object.keys(formatters)
        .map(key => renderOptions[key] = formatters[key])


    return renderOptions
}
const renderTest = () => {
    let renderOptions = {
        'barcodeHeight': '50',
        'logoURL': 'https://bancodata.com.br/assets/img/logos/pan_m.jpg',
        'boleto': {
            'linhaDigitavel': '62390001172100004610800000000117971680000042234',
            'banco': 'pan',
            'dataEmissao': new Date(),
            'dataVencimento': new Date(),
            'valor': 500.15,
            'nossoNumero': "1111111",
            'numeroDocumento': "111111",
            'cedente': "111",
            'cedenteCnpj': "111",
            'agencia': "111",
            'codigoCedente': "111",
            'carteira': "111",
            'pagador': "111",
            'localPagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.' || "111",
            'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.',
        }

    }
    Object.keys(formatters)
        .map(key => renderOptions[key] = formatters[key])
    return renderOptions;
}
module.exports = {
    renderOptions: mapData,
    renderTest
}