var bodyvar = document.body

//four buttons
var consumption = document.getElementById("consumption")
console.log(consumption);

var climate = document.getElementById("climate")
console.log(climate);

var resources = document.getElementById("resources")
console.log(resources);

var people = document.getElementById("people")
console.log(people);

//save text
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

// Variable Declaration is done---------


consumption.onclick=()=>{

    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    bodyvar.style.backgroundAttachment='fixed'
    

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers.. The increasing population has led to a shortage of resources. If this continues, it will be very difficult to sustain such a huge population."
    
    //buttons
    consumption.style.background="#27AE70"
    resources.style.background="transparent"
    climate.style.background="transparent"
    people.style.background="transparent"
   
}

resources.onclick=()=>{
    bodyvar.style.background="url('https://images.pexels.com/photos/4460676/pexels-photo-4460676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
    bodyvar.style.backgroundSize="100% 100%"
    bodyvar.style.backgroundAttachment='fixed'
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
    savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle. Always remember 'We did not inherit our land from our forefathers, we borrowed in from our children'"
    resources.style.background="#EA9355"
    consumption.style.background="transparent"
    climate.style.background="transparent"
    people.style.background="transparent"

}

climate.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    bodyvar.style.backgroundAttachment='fixed'
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
    savetext.innerHTML="Climate change is a great concern in today’s scenario. This problem has surfaced in the last few decades. Greenhouse gases are the major cause of climate change. Environmental changes have several destructive impacts such as the melting of glaciers, change in seasons, epidemics, etc. Save trees, use renewable energy sources and prefer to travel green"
    climate.style.background="#337BE6"
    resources.style.background="transparent"
    consumption.style.background="transparent"
    people.style.background="transparent"


    

}

people.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    bodyvar.style.backgroundAttachment='fixed'
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25"
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need, Cause what might be leftovers and waste for you might be the meal of their lifetime!"
    people.style.background="#D06961"
    resources.style.background="transparent"
    climate.style.background="transparent"
    consumption.style.background="transparent"


}
