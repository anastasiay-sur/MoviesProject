function Movie(props) {
    const {
        Title,
        Year, 
        imdbID,
        Type,
        Poster
    } = props;

    return <div id={imdbID} className="card" style={{width: '18rem'}}>
      {
        Poster === 'N/A' ? 
        <img className="card-img-top" src={'https://placeholder.pagebee.io/api/plain/300/200?text=Hello+World&bg=CA28FF&color=FFFFFF'}  alt="..." />
        : 
        <img className="card-img-top" src={Poster}  alt="..." />
      }   
    <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{Year} <span>{Type}</span></p>
  </div>
</div>

}

export {Movie}