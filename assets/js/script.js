class Multimedia {
	constructor(url) {
		this._url = url;
	}
	get url() {
		return this._url;
	}
	setInicio() {
		return `Este método es para realizar un cambio en la URL.`;
	}
}
class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url);
		this._id = id;
	}
	get id() {
		return this._id;
	}
	playMultimedia() {
		urlIdVideoIFrame.reproducir(this._url, this._id);
	}
	setInicio(time) {
		let collapseAlternative = document.querySelector(`#collapse${this._id} iframe`);
		collapseAlternative.setAttribute("src", `${this._url}?start=${time}`);
	}
}

const urlIdVideoIFrame = (() => {
	function reproducir(url, id) {
		let collapseAlternative = document.querySelector(`#collapse${id} iframe`);
		collapseAlternative.setAttribute("src", `${url}`);
	}
	return { reproducir };
})();

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	const setInicio = document.getElementById("setInicio").value;
	const urlVideo = document.getElementById("urlVideo").value;
	const idCategory = document.getElementById("idCategory").value;

	const newVideo = new Reproductor(`${urlVideo}`, `${idCategory}`);
	newVideo.playMultimedia();
	newVideo.setInicio(`${setInicio}`);
});

const startingVideos = (() => {
	const videoMusicURL = "https://www.youtube.com/embed/YODCM26JXOY";
	const videoMusicIDCategory = "Music";
	const videoMovieURL = "https://www.youtube.com/embed/HhesaQXLuRY";
	const videoMovieIDCategory = "Movies";
	const videoSerieURL = "https://www.youtube.com/embed/jEFTyAXOJ58";
	const videoSerieIDCategory = "Series";
	let initialMultimediaMusic = new Reproductor(`${videoMusicURL}`, `${videoMusicIDCategory}`);
	let initialMultimediaMovie = new Reproductor(`${videoMovieURL}`, `${videoMovieIDCategory}`);
	let initialMultimediaSerie = new Reproductor(`${videoSerieURL}`, `${videoSerieIDCategory}`);
	initialMultimediaMusic.playMultimedia();
	initialMultimediaMovie.playMultimedia();
	initialMultimediaSerie.playMultimedia();
	initialMultimediaMusic.setInicio(50);
})();
