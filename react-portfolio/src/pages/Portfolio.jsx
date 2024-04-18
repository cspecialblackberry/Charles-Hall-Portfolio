import Project from "../components/Project"

export default function Portfolio({sites}) {
    console.log(sites)
    return(
        <>
        <h1 style={{fontSize:'40px', textAlign:'center', fontWeight:'600', paddingTop: '50px'}}>Check Out My Work!</h1>
        <div className='sites-container'>
        {sites.map( (site) => <Project site={site}/> )}
        </div>
        </>
    )
}
//todo make site-div own component