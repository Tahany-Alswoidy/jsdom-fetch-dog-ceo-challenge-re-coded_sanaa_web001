console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContenetLoaded',function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl).then((response)=>response.json()).then((data)=>{
    data.forEach((image)=>
    {
      documen.createElement("img").setAttribute("src",image);
    })
  })
});