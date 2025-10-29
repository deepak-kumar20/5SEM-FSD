const parent = document.getElementById("parent");
console.log(parent);
const root = ReactDOM.createRoot(parent);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React JS"
// );

//JSX
const Container = () => {
  return (
    <div style={{margin:"20px",backgroundColor:"grey",width:"200px",padding:"10px"}}>
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        alt="Student Profile"
        style={{ width: "200px", height: "200px"}}
      />
      <h2>Deepak Kumar</h2>
      <h3>Branch:CS</h3>
      <p>Section:B</p>
      <p>College:Abes Engineerin College</p>
    </div>
  );
};
root.render(<Container />);
