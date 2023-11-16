import React, { useState } from 'react'
import Image from '../Image/rr.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fight, setFight] = useState([
        { fight: 'sukuna' },
        { fight: 'jogo' },
        { fight:'jujutsu'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fight.length
        setIndex(newIndex)
    }

    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
                <p>Painting is the practice of applying paint, pigment, color or other medium to a solid surface<br></br>
                The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used. In art, the term "painting" describes both the act and the result of the action. <br></br>
                painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language<br></br>
                </p>
                <p>likes: {likes}</p>
                
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=WcxMOcxGYRk'} height={200} controls />
                <div>
                <p>i like this {fight[index].fight}</p>
                <p>Dandelions by Ruth B. </p>
                <button onClick={change}>Change me</button>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Body