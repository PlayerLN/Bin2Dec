function convert(){
  const binary = document.querySelector('input.binary').value
  if(binary === '')return alert('Digite um número binario')
  if(binary.split('').map((char) => {
    if (char !== '0' && char !== '1'){
      alert('Digite um binário valido')
      return false
    }else{
      return true
    }
  })){
    const result = parseInt(binary, 2)
    document.querySelector('p.result').innerHTML=result
  }
}