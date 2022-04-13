function positions(firstPlace, secondPlace, lastPlace){

    let colocados = [firstPlace, secondPlace, lastPlace]
    
    if(colocados[2] === "Daniel"){

        return console.log(`
            1ª - colocado ${colocados[0]}
            2ª - colocado ${colocados[2]}
            3ª - colocado ${colocados[1]}
            `) 
    }else if(colocados[1] === "Daniel"){

        return console.log(`
            1ª - colocado ${colocados[1]}
            2ª - colocado ${colocados[0]}
            3ª - colocado ${colocados[2]}
            `) 
    }else{

        return console.log(`
            1ª - colocado ${colocados[0]}
            2ª - colocado ${colocados[1]}
            3ª - colocado ${colocados[2]}
            `) 
     }
}
positions("Rafael", "Manoel", "Daniel")


