let quotes = document.getElementById("Quotes")
let author = document.getElementById("author")



let url ="https://api.quotable.io/quotes/random"
async function api(){
    let respon = await fetch(url)
    let data = await respon.json()
    console.log(data);
quotes.innerText= `"${data[0].content}"`
author.innerText=`"..${data[0].author}"`
}
api()