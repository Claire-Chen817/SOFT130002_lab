const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
let container = document.getElementsByClassName("flex-container justify")[0];

for (let i=0; i<works.length; i++){
    let genre_div = document.createElement("div");
    genre_div.id = works[i].tips;
    genre_div.className = "item";

    let genre = document.createElement("h4");
    genre.innerText = "Genre: " + works[i].tips;
    let innerBox1 = document.createElement("div");
    innerBox1.className = "inner-box";
        let author = document.createElement("h3");
        author.innerText = works[i].author;
        author.style.display = 'inline';
        let lifetime = document.createElement("h5");
        lifetime.innerText = "lifetime: "+works[i].lifetime;
        lifetime.style.display = 'inline';
        lifetime.style.margin = '0 0 0 10px';
        innerBox1.append(author,lifetime);
    let innerBox2 = document.createElement("div");
    innerBox2.className = "inner-box";
        let box2_h3 = document.createElement("h3");
        box2_h3.innerText = "Popular Photos";
        innerBox2.append(box2_h3);
        for (let j = 0; j<works[i].photos.length; j++){
            let photo = document.createElement("img");
            photo.className = "photo";
            photo.style.display = 'inline';
            photo.src = "./img/" + works[i].photos[j];
            innerBox2.append(photo);
        }

    let btn = document.createElement("button");
    btn.innerText = "Visit";

    genre_div.append(genre,innerBox1,innerBox2,btn);
    container.append(genre_div);
}


