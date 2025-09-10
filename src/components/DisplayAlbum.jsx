import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumDatalocal = albumsData[id];
  const { playWithId, currentSongId, isPlaying } = useContext(PlayerContext);

  // Fallback if album not found
  if (!albumDatalocal) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-20 text-red-500 text-xl">
          Album not found. Please check the URL or album ID.
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Album Info Section */}
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumDatalocal.image} alt={albumDatalocal.name} />
        <div className='flex flex-col'>
          <p className='text-sm text-[#a7a7a7]'>Playlist</p>
          <h2 className='text-4xl font-bold mb-4 md:text-6xl'>{albumDatalocal.name}</h2>
          <h4 className='text-[#a7a7a7]'>{albumDatalocal.desc}</h4>
          <p className='mt-2 text-[#a7a7a7]'>
            <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt="Spotify" />
            <b> Spotify Clone</b> • 33,62,251 likes • <b>50 Songs</b> • about 2hr 35 min
          </p>
        </div>
      </div>

      {/* Song List Header */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] sticky top-0 bg-black z-10'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden md:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="Duration" />
      </div>
      <hr />

      {/* Song List */}
      {songsData.map((item, index) => (
        <div
          key={index}
          onClick={() => playWithId(item.id)}
          className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] hover:scale-[1.02] transition-transform duration-200 cursor-pointer'
        >
          <p className='text-white flex items-center'>
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            {currentSongId === item.id && isPlaying ? (
              <img src={assets.pause_icon} className="inline w-5 mr-2" alt="Pause" />
            ) : (
              <img src={assets.play_icon} className="inline w-5 mr-2" alt="Play" />
            )}
            <img className='inline w-10 mr-2 rounded' src={item.image} alt={item.name} />
            {item.name}
          </p>
          <p className='text-[15px]'>{albumDatalocal.name}</p>
          <p className='text-[15px] hidden md:block'>3 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  );
};


export default DisplayAlbum;