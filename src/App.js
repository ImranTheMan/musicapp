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
  {
    id:4,
    title: "Lagabog",
    artist: "Skusta Clee",
    genre:"HipHop"
  },
  {
    id:5,
    title: "After Last Night",
    artist: "Bruno Mars",
    genre:"R&B"
  },
  {
    id:6,
    title: "Pagtingin",
    artist: "Ben&Ben",
    genre:"OPM"
  },
  {
    id:7,
    title: "All I Want",
    artist: "Paramore",
    genre:"Rock"
  },
  {
    id:8,
    title: "Alcohol Free",
    artist: "TWICE",
    genre:"K-pop"
  },
  {
    id:9,
    title: "Glue Song",
    artist: "Beabadoobee",
    genre:"Indie"
  },
  {
    id:10,
    title: "Cornelia Street - Cover",
    artist: "Skusta Clee",
    genre:"HipHop"
  },
  {
    id:11,
    title: "Rock With You",
    artist: "Michael Jackson",
    genre:"Soul"
  },
  {
    id:12,
    title: "I KNOW",
    artist: "Travis Scott",
    genre:"HipHop"
  },
  {
    id:13,
    title: "Saturn",
    artist: "SZA",
    genre:"R&B"
  },
  {
    id:14,
    title: "Mercy",
    artist: "Kanye West",
    genre:"HipHop"
  },
  {
    id: 15,
    title: "Rolling in the Deep",
    artist: "Adele",
    genre: "Pop",
  },
  {
    id: 16,
    title: "Call Me Maybe",
    artist: "Carly Rae Jepsen",
    genre: "Pop",

  
  },
  {
    id:17,
    title: "Lagabog",
    artist: "Skusta Clee",
    genre:"HipHop"
  },
  {
    id:18,
    title: "Kiss me more",
    artist: "Doja Cat",
    genre:"HipHop"
  },
  {
    id:19,
    title: "Carnival",
    artist: "Kanye West",
    genre:"HipHop"
  },
  {
    id: 20,
    title: "Partition",
    artist: "Beyoncé",
    genre: "R&B",
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


function PlayList({ playlist }){
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
function Music({ music, addToPlaylist, playlist }) {
  const isAddedToPlaylist = (music) => {
    return playlist.some((item) => item.title === music.title);
  };

  const handleClick = (music) => {
    if (isAddedToPlaylist(music)) {
      alert("This music is already added to the playlist!");
    } else {
      addToPlaylist(music);
    }
  };

  return (
    <div>
      <ul>
        {music.map((music) => (
          <li key={music.id}>
            {music.title} by {music.artist} ({music.genre}){" "}
            <button onClick={() => handleClick(music)}>♥️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SortBy({handleSortBy}){
  const genres = [
    "HipHop",
    "Pop",
    "R&B",
    "OPM",
    "K-pop",
    "Rock",
    "Indie",
    "Soul"
  ];

  const handleChange = (e) => {
    handleSortBy(e.target.value);
  };

  return (
    <div>
      <label className="sort">Sort by Genre:</label>
      <select id="genre" onChange={handleChange}>
        <option value="">Select Genre</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
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
  return <h1 style={{ textAlign: "center" }}>Muñoz Beats</h1>
}
function NumResult({music}){
  return(
    <p className="found">
          Found <strong>{music.length}</strong> results
    </p>
  );
  
}
function Search({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (

    <input
      className="input"
      name="txt" onmouseout="this.value = ''; this.blur();"
      placeholder="Search music..."
      value={query}
      onChange={handleChange}
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

function SummaryBox({ musicCount, playlistCount, genreCounts }) {
  return (
    <div>
      <p>Total music in Music List: {musicCount}</p>
      <p>Total music in Playlist: {playlistCount}</p>
      <h3>Genres:</h3>
      <ul>
        {Object.entries(genreCounts).map(([genre, count]) => (
          <li key={genre}>{genre}: {count}</li>
        ))}
      </ul>
    </div>
  );
}



function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const [filteredMusic, setFilteredMusic] = useState(tempMusicData);

  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };

  const handleSearch = (query) => {
    const filtered = tempMusicData.filter((music) =>
      music.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMusic(filtered);
  };

  const handleSortBy = (sortBy) => {
    let sortedData = [...tempMusicData];

    switch (sortBy) {
      case "HipHop":
      case "Pop":
      case "R&B":
      case "OPM":
      case "K-pop":
      case "Rock":
      case "Indie":
      case "Soul":
        sortedData.sort((a, b) => {
          if (a.genre === sortBy && b.genre !== sortBy) return -1;
          if (b.genre === sortBy && a.genre !== sortBy) return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    setFilteredMusic(sortedData);
  };

  const countGenres = (data) => {
    let genreCounts = {
      HipHop: 0,
      RnB: 0,
      KPop: 0,
      OPM: 0,
      Pop: 0,
      Other: 0
    };

    data.forEach((item) => {
      switch (item.genre) {
        case "HipHop":
          genreCounts.HipHop++;
          break;
        case "R&B":
          genreCounts.RnB++;
          break;
        case "K-pop":
          genreCounts.KPop++;
          break;
        case "OPM":
          genreCounts.OPM++;
          break;
        case "Pop":
          genreCounts.Pop++;
          break;
        default:
          genreCounts.Other++;
          break;
      }
    });

    return genreCounts;
  };

  const genreCounts = countGenres(tempMusicData);

  return (
    <>
      <NavBar handleSortBy={handleSortBy}>
        <Logo />
        <Search handleSearch={handleSearch} />
        <NumResult music={filteredMusic} />
      </NavBar>
      <div className="sortlist">
      <SortBy handleSortBy={handleSortBy}/>
      </div>
      <Main>
        <Box title="Music List">
          <Music music={filteredMusic} addToPlaylist={addToPlaylist} playlist={playlist}  />
        </Box>
        <Box title="Playlist">
          <PlayList playlist={playlist} />
        </Box>
        <Box title="Summary">
        <SummaryBox
          musicCount={tempMusicData.length}
          playlistCount={playlist.length}
          genreCounts={genreCounts}
        />
        </Box>
      </Main>
    </>
  );
}

export default App;
