import { Link, Card, CardHeader, CardBody, Button } from '@chakra-ui/react'

export default function Portfolio({sites}) {
    console.log(sites)
    return(
        <>
        portfolio
        <div className='sites-container'>
        {sites.map((site) => 
            <>
            <div className='site-div'>
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