import "./profile.css"
const Profile = () => {
    return (
      <div
        className="container"
        >
        
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Student Profile"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>Deepak Kumar</h2>
        <h3>Branch:CS</h3>
        <p>Section:B</p>
        <p>College:Abes Engineerin College</p>
      </div>
    );
}
export default Profile;