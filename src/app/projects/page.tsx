import { CommingSoom } from 'components'

export default function Projects () {
    const underConstruction = true

    if(underConstruction) return <CommingSoom />

    return(
       <h1>Projetos</h1>
    )
}