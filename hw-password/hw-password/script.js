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

  
  const charArr = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    '`~!@#$%^&*()-_=+[]{}\\|;\'",./<>?'
  ];
  
  let generate = document.querySelector('#generate');
  
  console.log(generate);
  
  generate.addEventListener('click', function() {
    generatePassword();
  });
  
  function generatePassword() {

    let passLength = document.getElementById('length').value;
    let userOptions = [
      document.getElementById('lowercase').checked,
      document.getElementById('uppercase').checked,
      document.getElementById('numbers').checked,
      document.getElementById('symbols').checked
    ]
  

    // add random characters to newPass based on user specified length
    for (let i = 0; i < passLength; i++) {
  
      // choose random array index for equivalent chance of character types
      let str = passArr[Math.floor(Math.random() * passArr.length)];
  
      // get a random character from the string and add it to the new password
      newPass += str.charAt(Math.floor(Math.random() * str.length));
    }
  
    // show the new password to the user
    document.getElementById('new-password').value = newPass;
  }
    
  document.querySelector('#copy').addEventListener('click', function(e) {
    let newPass = document.getElementById('new-password');
    newPass.select();
    document.execCommand('copy');
    alert('Your new password has been copied to your clipboard.');
  });