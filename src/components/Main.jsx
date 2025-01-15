import React from 'react'

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "Hi there",
        bottomText: "This is a meme",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const { value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: value
        }))
    }
    /// image state and fetching images array when app mounts
    const [memes, setMemes] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemes(data.data.memes))
    }, [])
    ///
    function getRandomMemeImage() {
        const randomNumber = Math.floor(Math.random() * memes.length)
        const url = memes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
        <div className="form">
        <div className="inputs" onChange={handleChange}>
            <label className="input-tile">Top Text
                <input

                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                />
            </label>

            <label className="input-tile" onChange={handleChange}>Bottom Text
                <input
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                />
            </label>
        </div>
        <button className="generate-btn" onClick={getRandomMemeImage}>Get a new meme image 🖼</button>
    </div>
    <div className="meme">
        <img src={meme.randomImage} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
    </div>
</main>
    )
} 