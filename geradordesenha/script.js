function gerarsenhas(){
    let tamanho = document.getElementById('qNumber').value
    
    const cara = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','(',')','+','?','>','<',':','{','}','[',']']

    let passorwd = ''

    for( let i = 0; i < tamanho; i +=1){
    let ramdomnumb = Math.floor(Math.random() * cara.length);
    passorwd += cara[ramdomnumb]
    }
   document.getElementById('resposta').innerText = passorwd;
} 
