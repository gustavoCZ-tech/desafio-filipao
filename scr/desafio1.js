let nomeHeroi = "gustavo";
let xpHeroi = 5000;
let classeHeroi 

switch(xpHeroi){
  case xpHeroi <= 1000:
    classeHeroi = "ferro";
    break
  case (xpHeroi > 1000) && (xpHeroi <= 2000):
    classeHeroi = "bronze";
    break
  case (xpHeroi > 2000) && (xpHeroi <= 5000 ):
    classeHeroi = "prata";
    break
  case (xpHeroi > 5000) && (xpHeroi <=7000 ):
    classeHeroi = "ouro";
    break
  case (xpHeroi > 7000) && (xpHeroi <=8000 ):
    classeHeroi = "platina";
    break
  case (xpHeroi > 8000) && (xpHeroi <=9000 ):
    classeHeroi = "ascendente";
    break
  case (xpHeroi > 9000) && (xpHeroi <=10000 ):
    classeHeroi = "imortal";
    break
  default:
    classeHeroi = "radiante";
    
  }
console.log("O Herói de nome "+ nomeHeroi +" está no nivel de "+ classeHeroi);