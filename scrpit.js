const accesskey="1JOOo5UvrLItHJb5iS9ii0-85RvTiUPRRDK3HpVCrLc";

const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const searchresult=document.getElementById("search-result");
const showmorebtn=document.getElementById("show-more-btn");

let keyword="animal";
let page = 1;

async function searchImages(){

    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=15`;

    const  response=await fetch(url);
    const data=await response.json();

   // console.log(data);

   if(page===1){
    searchresult.innerHTML="";
   }

   const results=data.results;
   results.map((results) =>{
    const  image= document.createElement("img");
    image.src=results.urls.small;


    const imageLink=document.createElement("a");
    imageLink.href=results.links.html;

    imageLink.target="_blank";

    imageLink.appendChild(image);

    searchresult.appendChild(imageLink);



   })

   showmorebtn.style.display="block";

}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

})


showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();

})
