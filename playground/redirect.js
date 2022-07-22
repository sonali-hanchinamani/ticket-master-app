const redirect = () => {
    console.log('im redirect. i will go to google.com')
}

function print(msg, redirect) {
    
   setTimeout(() => {
       console.log(msg) 
       redirect()
   }, 2000)
    
}


print('hello world', redirect)