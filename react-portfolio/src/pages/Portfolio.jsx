import { Link, Card, CardHeader, CardBody, Button } from '@chakra-ui/react'

export default function Portfolio(props) {
    const {sites} = props
    console.log(sites)
    return(
        <>
        portfolio
        {sites.map((site) => {
            <>
            <Card>
                <CardHeader>{site.name}</CardHeader>
                <img src={site.image}></img>
            </Card>
            </>
        })}
        </>
    )
}