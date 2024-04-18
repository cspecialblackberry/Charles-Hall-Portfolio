export default function Portfolio({sites}) {
    console.log(sites)
    return(
        <>
        <h1 style={{fontSize:'40px', textAlign:'center', fontWeight:'600', paddingTop: '50px'}}>Check Out My Work!</h1>
        <div className='sites-container'>
        {sites.map((site) => 
            <>
            <div className='site-div' key={site.id}>
                <h2>{site.name}</h2>
                <img src={site.img}></img>
                <p>{site.description}</p>
                <div>
                    <a href={site.link} target='_blank'>Deployed Site</a>
                    <a href={site.repo} target='_blank'>GitHub Repo</a>
                </div>
            </div>
            </>
        )}
        </div>
        </>
    )
}
//todo make site-div own component