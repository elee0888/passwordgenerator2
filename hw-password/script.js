function generate(length = 15){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var all = uppercase + lowercase + numbers + symbols;

    var password = '';
}
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;

  lowercaseInput = document.getElementById("lowercase");
  uppercaseInput = document.getElementById("uppercase");
  symbolsInput = document.getElementById("punctuation");
  numbersInput = document.getElementById("numbers");
  lengthInput = document.getElementById("length");

  