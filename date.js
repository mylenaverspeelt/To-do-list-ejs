module.exports.getDate = function (){

    const options = {
        diaDaSemana: "long",
        dia: "numeric",
        mes: "long"
    };   //utilizado pra formatar a hora

    return new Date().toLocaleDateString("pt-BR", options);

}


