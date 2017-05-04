## Rodar  

> yarn install  
> bower install  
> node index.js  



 - url: localhost:3000/emitirBoleto  
 - type: POST 
 - data: 
      ```
      {
           "cpf": "64802590334", 
           "linhaDigitavel": "62390001172100004610800000000117971680000042234", 
           "dataEmissao": "2017-05-02T18:30:16.791Z", 
           "dataVencimento": "2017-05-02T18:30:16.791Z",
           "valor": "422.34", 
           "nossoNumero": "11", 
           "numeroDocumento": "1", 
           "cedente": "Meu Banco", 
           "cedenteCnpj": "64802590334", 
           "agencia": "123", 
           "codigoCedente": "123", 
           "carteira": "1", 
           "pagador": "ERICK WENDEL",
           "logoURL": "https://www.banconeon.com.br/Content/assets/imagens/banco-neon.jpg"
      } 
       
