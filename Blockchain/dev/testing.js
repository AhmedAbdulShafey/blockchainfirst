var Blockchain = require('./blockchain.js')

var bitcoin = new Blockchain();

bitcoin.createNewBlock('1stnonce','firstprevioushash','1st hash')

bitcoin.createNewTx(35,"shafey","rafey")
bitcoin.createNewTx(45,"rafey","shafey")

bitcoin.createNewBlock('2ndnonce','1st hash','2nd hash')
bitcoin.createNewBlock('3rdnonce','2nd hash','3rd hash')

//console.log(bitcoin);
bitcoin.createNewTx(25,"hadia","shafey")
//console.log(bitcoin.getLastBlock())

console.log(bitcoin.getTxsOfBlock(2))


//console.log(bitcoin.getTxsOfBlock(1))