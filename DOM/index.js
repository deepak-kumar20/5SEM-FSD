// const div = document.getElementsByTagName("div");
// console.log(div[0]);
// div[0].innerText = "hello world";
// div[0].style.color = "red";

const btn = document.getElementById("btn");
btn.addEventListener("click", displayData);
const loading = document.getElementById('loading')



function displayData() {

  loading.innerText = "Loading data...";
    setTimeout(() => {
        const div = document.getElementsByClassName("container");
        div[0].innerText = "Hi there";
        // console.log(div);
        console.log(div[0]);
        const h2 = document.createElement("h2");
        h2.innerText = "i m created h2";
        h2.style.backgroundColor = "red";
        div[0].appendChild(h2);

        const img = document.createElement("img");
        img.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJgexfDAWKxhPcT-DytGgLo9ewkkT_q1hgA&s";
        img.alt = "A beautiful scenery";
        img.setAttribute("height", 200);
        img.setAttribute("width", 200);
        div[0].appendChild(img); 
        loading.innerText=""
    }, 2000);
    

}





