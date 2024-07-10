export default async function Wiki({ params }: { params: { id: string } }) {
    const id = decodeURIComponent(params.id);
    var [namespace, name] = id.split(':')
    if (!name) {
        name = namespace
        namespace = "문서"
    }
    console.log("ns",namespace)
    console.log("name",name)
    return(
        <article>
            {namespace === '문서' ? <p>{name}</p> : <p>{namespace}: {name}</p>}
        </article>
    )
}