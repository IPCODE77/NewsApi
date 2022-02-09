console.log("new js file");


fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=d9fa043f7f074395bcbf48cfacb704ff").then((response)=>{return response.json()}).then((responsedata)=>{
    const data=responsedata;
    let article=data.articles;
    let str="";
    let api=document.getElementById("accordionExample");
    Array.from(article).forEach(function(element,index){
        console.log(element);

        str+=`  <div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" style="font-family: 'Merriweather', serif; font-size: 1.3rem;" aria-expanded="true" aria-controls="collapse${index}">
            ${index+1}.  ${element["title"]}
            </button>
          </h2>
        </div>
    
        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordionExample">
          <div class="card-body" style="font-family: 'Ubuntu', sans-serif;">
          ${element['content']}.<a href=${element['url']} target="_blank">For More Details click here</a>
          </div>
        </div>`
    })
    api.innerHTML=str;
    // console.log(article)
    // console.log(data);
}).catch((error)=>{
    console.log("some error occure")
})