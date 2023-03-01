function suma(a,b) {
    if (typeof(a) == "number" && typeof(b) == "number") {
        return a+b;
    }else{
        throw new Error('Ambos argumentos deben ser números');
    }
}

module.exports = { suma }