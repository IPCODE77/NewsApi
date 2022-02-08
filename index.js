// d9fa043f7f074395bcbf48cfacb704ff  (api key)

console.log("Videonumber40");
// https://newsapi.org/v2/top-headlines?country=us&apiKey=d9fa043f7f074395bcbf48cfacb704ff

let news=document.getElementById("accordionExample");
console.log(news);

let source='THe people Voise';
let apikey='d9fa043f7f074395bcbf48cfacb704ff ';

const xhr=new XMLHttpRequest();


xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=d9fa043f7f074395bcbf48cfacb704ff',true)

xhr.onload=function(){
    if(xhr.status==200){
        let json=JSON.parse(this.responseText);
        console.log(json); 
        let articles=json.articles;
        let newsapi="";
        articles.forEach(function(element,index){
            let newshtml=`  <div class="card">
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
            newsapi+=newshtml;
        })
        news.innerHTML=newsapi;
    console.log(articles);        
    // console.log(json)
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();
