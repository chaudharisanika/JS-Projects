const form = document.querySelector("#searchForm")
const res1 = document.querySelector("#res1")
form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const config = {params: {q: searchterm}}  //for multiple purpose to add more params and to add headers etc
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    // console.log(res.data[0].show.image.medium)
    makeImages(res.data)
    // form.element.query.value = ""
    
})

const makeImages = (shows) => {
    for(let result of shows)
    {
        if(result.show.image){    //if is added so that if there is no image then it will not show error
            const img = document.createElement('IMG');
            img.src=result.show.image.medium;
            img.classList.add('decoration')
            // document.body.append(img);
            res1.append(img)
            // result.append(img)
}
    }
}