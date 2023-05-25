function ProfileCard () {
    return (
        <div className="profilecard">
            <div className="profilecard-container">
                <div className="profilecard-logininfo">
                    <img src="src\Images\FaceBook Portfolio Photo-modified.png" alt="profile picture" className="loginimg" />
                    <div className="logininfo">
                        <h1 className="loginusername">Safarov Khan</h1>
                        <h2 className="loginemail">safarovrafiq9@gmail.com</h2>
                    </div>
                </div>
                <div className="profilecard-pages">
                    <button className="profilecard-btn">Archive</button>
                    <div className="dark-mode">
                        <p className="darkmode-txt">Dark Mode</p>
                        <input type="checkbox" />
                    </div>
                </div> 
            </div>
        
        </div>
    );
}
export default ProfileCard;