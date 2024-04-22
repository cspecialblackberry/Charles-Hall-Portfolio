const Project = ({ site }) => {
    const {id, name, img, alt, description, link, repo} = site
    return (
        <>
            <div className='site-div' key={id}>
                <h2>{name}</h2>
                <img src={img} alt={alt}></img>
                <p>{description}</p>
                <div>
                    <a href={link} target='_blank'>Deployed Site</a>
                    <a href={repo} target='_blank'>GitHub Repo</a>
                </div>
            </div>
        </>
    )
}

export default Project