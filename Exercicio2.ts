// Cria uma função que ofusca emails. 
// Se te passar um email retornar as 3 primeiras letras e o resto com asterisco por exemplo: "art**@gmail.com"
// 1. validar se e um email valido com regex, isolar a função de validação em uma outra função a parte
// Independe do dominio

const gmail: string = "arthurpassere11@gmail.com";
const emailInvalido: string = "arthurpassere.com"
const hotmail: string = "hotmail_@hot-mail123.com.br";

function validação(email: string): boolean{
  const regex = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9-]+\.(com(\.[a-z]{2,})?)$/; // Aqui a validação pode ver se o dominio é diferenciado também, e o regex verifica se contém .br ou outros tipos de extensão. Usei o site: https://regexr.com para me ajudar a desenvolver 

  return regex.test(email)
}

function ofuscaEmail(email:string): string{
  if(validação(email)){
    const dominio:string = email.substring(email.indexOf("@")) // Extraindo apenas o dominio.
    
    const username:string = email.replace(dominio, "") // Deixando apenas o username, sem dominio.

    const tresPrimeiros: string = username.slice(0,3) // Pego somente os 3 primeiros caracteres.

    const result: string = tresPrimeiros + "*".repeat(username.length - 3) + dominio; // Adicionando asteriscos no restante do username.

    return result
  }
  return "Email invalido!"
}

console.log(ofuscaEmail(gmail))
console.log(ofuscaEmail(emailInvalido))
console.log(ofuscaEmail(hotmail))
