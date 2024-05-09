function User() {
    return <div className="card-container">
       <span className="pro online">ONLINE</span>
       <img src="images/img2.jpeg" className="img" alt="user" />
        <h3>GIRI</h3>
        <h3>Chennai</h3>
        <p>Front-End Developer</p>
        <div className="buttons">
            <button className="primary ">Message</button>
            <button className="primary outline">Follow</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                <li>Ui / Ux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>JAVASCRIPT</li>
                <li>REACTJS</li>
            </ul>
        </div>
    </div>
}
const UserCard = () => {
  return (
      <User/>
   
  )
}

export default UserCard
