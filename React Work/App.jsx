// const heading = React.createElement("h2", { id: "child", style: { color: "blue" } }, "Welcome to React JS");
// const li1 = React.createElement("li", { id: "li1" }, "JavaScript")
// const li2 = React.createElement("li", { id: "li2" }, "Python")
// const li3 = React.createElement("li", { id: "li3" }, "Java")
// const ul = React.createElement("ul", { id: "ul" }, li1, li2, li3)

// const image = React.createElement("img", {
//   src: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
//   style: { height: "200px", width: "200px" ,borderRadius:"50%",marginRight:"30px",marginLeft:"30px"},
// });
// const myName = React.createElement("h3", { id: "myName" ,style:{margin:"10px"} }, "Deepak Kumar")
// const nameCont = React.createElement("div", { id: "nameCont" }, image, myName)
// const hr = React.createElement("hr", null, null)
// const container = React.createElement("div", {}, heading, nameCont, hr, ul)

const Head = <h1>This is using Jsx</h1>
const li1 = <li id="li1">JavaScript</li>
const li2 = <li id="li2">python</li>

const ul = <ul>
   
    {li1}
    {li2}
</ul>
const container = (
    <>
        {Head}
        {ul}
    </>
)
 const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(container)
