import "./profile.css"
const Profile = ({data}) => {
    return (
      <div
        className="container"
        >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Student Profile"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>{data.name}</h2>
        <h3>Branch:{data.branch}</h3>
        <p>Section:{data.section}</p>
        <p>College:{data.college}</p>
      </div>
       
     
    );
}
export default Profile;