console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContenetLoaded',function(e){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl).then((response)=>response.json()).then((data)=>{
    data.forEach((image)=>
    { console.log(image);
      document.getElementById("dog-image-container").appendChild(document.createElement("img").setAttribute("src",image));
      
    })
  });
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl).then((res)=>res.json()).then((data)=>{
    
  })
});