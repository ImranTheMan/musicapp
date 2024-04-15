import "./styles.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Pantropiko",
    artist: "Bini",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Alam mo ba girl?",
    artist: "Hev Abi",
    genre: "HipHop",
  },
  {
    id: 3,
    title: "Selos",
    artist: "Shaira",
    genre: "Pop",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Neneng B",
    artist: "Nik Makino",
    genre: "Rap",
    userRating: 5
  },
  {
    id: 2,
    title: "Babaero",
    artist: "Hev Abi",
    genre: "HipHop",
    userRating: 4
  },
  
];

function Box({children, title}){
  return (
    <div className="container">
      <h2>{title}</h2>{children}</div>
  )
}
// function MusicListBox({music}){
//   return(
//     <div className="container">
//       <h2>Music List</h2>
//       <Music music={music}/>
//   </div>
//   );
// }
// function PlaylistBox(){
//   return(
//     <div className="container">
//     <h2>Play List</h2>
//     <PlayList/>
//   </div>
//   );
// }


function PlayList(){
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  }
  return(
    <ul>
      {playlist.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist}
          <p>
            <span>⭐</span>
            <span>3</span>
          </p>
        </li>
      ))}
    </ul> 
  );
}
function Music({music}){
  return(
    <div>
    <ul>
      {music.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist} ({music.genre})<button>♥️</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
function NavBar({children}){
  return(  
  <nav className="container">

        {children}
  </nav>
  );
}
function Logo(){
  return <h1 style={{ textAlign: "center" }}>Music App</h1>
}
function NumResult({music}){
  return(
    <p>
          Found <strong>{music.length}</strong> results
    </p>
  );
  
}
function Search(){
  const [query, setQuery] = useState("");
  return(
  <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function Main({children}){
  return(
    <div className="container">
      {children}
      {/* <MusicListBox music={music}/>
      <PlaylistBox/> */}
    </div>
  );
}
function App() {
  const [music, setMusic] = useState(tempMusicData);
  return (
    <>
      <NavBar>
        <Logo/>
        <Search/>
        <NumResult music={music}/>
      </NavBar>
      <Main>
        <Box title="Music List">
          <Music music={music}/>
        </Box>
        <Box title ="Playlist">
          <PlayList/>
        </Box>
        <Box title="ETC list"></Box>
        </Main>
      </>
  );
}


export default App;
