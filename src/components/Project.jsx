const Project = ({ site }) => {
    return (
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
    )
}

export default Project