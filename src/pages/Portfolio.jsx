import Project from "../components/Project"

export default function Portfolio({ sites }) {
    return (
        <>
            <h1 style={{ fontSize: '40px', textAlign: 'center', fontWeight: '600', paddingTop: '25px' }}>Check Out My Work!</h1>
            <div className='sites-container'>
                {/* create project component for each site */}
                {sites.map((site) => <Project site={site} />)}
            </div>
        </>
    )
}