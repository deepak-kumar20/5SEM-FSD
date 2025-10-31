import Profile from "./Profile"
import "./gallery.css"
const Gallery = () => {
    const student = [
        {
           name: "Deepak", branch: "CS", section: "B", college: "Abes Engineering College"
        },
        {
              name: "Rahul", branch: "IT", section: "C", college: "Abes Engineering College"
        },
        {
                name: "Aman", branch: "EC", section: "A", college: "Abes Engineering College"
        },
        {
                name: "Rohit", branch: "ME", section: "D", college: "Abes Engineering College"
        }
    ]
    return (
      <>
        <div className="gallery-box">
          <div className="gallery-container">
            {student.map((data, index) => (
              <Profile key={index} data={data} />
            ))}
          </div>
        </div>
      </>
    );
}
export default Gallery;