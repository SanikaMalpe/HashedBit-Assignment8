import { useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", image: "https://images5.alphacoders.com/112/1122037.jpg" },
  { id: 2, title: "Avengers", image: "https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg" },
  { id: 3, title: "Interstellar", image: "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2021/07/09/1919558723588/INST_SAlone_16_9_1920x1080_1887272_1920x1080.jpg" },
  { id: 4, title: "Joker", image: "https://tse2.mm.bing.net/th/id/OIP._p5Hw_qMn1FJFRAmyyCMlAHaEK?pid=Api&P=0&h=180" },
  { id: 5, title: "Avatar", image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Avatar-movie-from-James-Cameron.jpg" },
  { id: 6, title: "Titanic", image: "https://tse4.mm.bing.net/th/id/OIP.H_HwpokhR6rjdfoOfnVIrAHaEK?pid=Api&P=0&h=180" },
  { id: 7, title: "The Matrix", image: "https://facts.net/wp-content/uploads/2023/06/47-facts-about-the-movie-the-matrix-1687246419.jpg" },
  { id: 8, title: "Gladiator", image: "https://c8.alamy.com/comp/BNPKBH/russell-crowe-gladiator-2000-BNPKBH.jpg" },
  { id: 9, title: "Batman", image: "https://tse3.mm.bing.net/th/id/OIP.KVjGUki0oALHWoSC5FRGkgHaEo?pid=Api&P=0&h=180" },
  { id: 10, title: "Doctor Strange", image: "https://tse3.mm.bing.net/th/id/OIP.PHYEIhmvybn9eSMcamHyeAHaEK?pid=Api&P=0&h=180" },
  { id: 11, title: "Iron Man", image: "https://tse4.mm.bing.net/th/id/OIP.F1cBW6u-KCUdg_9J9XMf0gHaEK?pid=Api&P=0&h=180" },
  { id: 12, title: "Thor", image: "https://tse1.mm.bing.net/th/id/OIP.eeoHcu2yNzWheTrvmVw6xwHaEq?pid=Api&P=0&h=180" },
];

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Movie List</h1>
      <div className="grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
