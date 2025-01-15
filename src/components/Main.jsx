export default function Main() {
    
    
    return (
        <main>
        <div className="form">
        <div className="inputs">
            <label className="input-tile">Top Text
                <input

                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                />
            </label>

            <label className="input-tile">Bottom Text
                <input
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                />
            </label>
        </div>
        <button className="generate-btn">Get a new meme image 🖼</button>
    </div>
    <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
    </div>
</main>
    )
} 