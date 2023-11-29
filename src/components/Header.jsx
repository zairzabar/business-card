import profile from "../assets/profile.jpg";

function Header() {
  return (
    <div className="header">
      <img className="profile" src={profile} alt="profile photo" />
      <h2 className="name">Zair Ansari</h2>
      <p className="designation">Frontend Developer</p>
      <small className="email">ouzair-protfolio.netlify.app</small>
    </div>
  );
}

export default Header;
