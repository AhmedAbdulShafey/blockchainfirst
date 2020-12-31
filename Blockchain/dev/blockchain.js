function Blockchain(){
    this.chain =[]
    this.mempool = [];
}

Blockchain.prototype.createNewBlock = function(nonce,previoushash,hash){
        var block = {
            'height': this.chain.length,
            'timestamp': Date.now(),
            'transactions': this.mempool,
            'previoushash': previoushash,
            'hash': hash,
            'nonce': nonce
        }

        this.chain.push(block)
        this.mempool = []
        return 'New Block Added With block height' + block.height;
};

Blockchain.prototype.getLastBlock = function (){
    var index = this.chain.length;
    return this.chain[index - 1]
}

Blockchain.prototype.createNewTx = function (amount,sender,reciever){
        var tx = {
            'timestamp': Date.now(),
            'amount': amount,
            'sender': sender,
            'reciever': reciever
        }
        this.mempool.push(tx)
        var newBlock = this.chain.length;
        return 'New Tx added in Mempool and it will add in Block Height'+newBlock.length
}

Blockchain.prototype.getTxsOfBlock = function(height){
    var block = this.chain[height]
    if(block){
        return block.transactions
        }else{
        return 'block not found';
    }
}

module.exports = Blockchain;