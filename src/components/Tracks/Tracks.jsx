import React from 'react'

const Tracks = ({track}) => {
    console.log('estas son las canciones',track);


// const songs = track.map(item=>if(item.id===))

    const handleclick = (ev) => {
        console.log(ev);
    }
  return (
    <div>
        {track.map((item)=>
        <div key={item.id}>
            <button onClick={handleclick}>{item.name}</button>
            {/* <audio src={item.preview_url} controls></audio> */}
        </div>
        )}

    </div>
  )
}

export default Tracks