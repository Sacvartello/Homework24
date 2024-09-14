const page = ' https://fakestoreapi.com'

const res = fetch(`${page}/products`)
res.then((value)=>{
    return value.json()
})
.then((data)=>{
    mapCards(data)
})
.catch((err)=>{
    console.log(err);
})

function mapCards (productArr){
    const cardArr = productArr.map(product => createCard(product))
    document.body.append(...cardArr)
}

function createCard(prodObj) {
    const {image,title,price,rating:{rate}} = prodObj
    const img = createElement('img',['product-img'])
    img.setAttribute('src',image)
    const h3 = createElement('h3', undefined, title)
    const titleEl = createElement('p',['price'], 'price: ',`$${price}` )
    const rateEl = createElement('p',['rate'], 'rate: ', rate)
    const article = createElement('article',['card'],img,h3,titleEl,rateEl)
    return article
}

function createElement(type, className =[],...children){
    const el = document.createElement(type)
    el.classList.add(...className)
    el.append(...children)
    return el
}