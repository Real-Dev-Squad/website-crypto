 const PersonDetail = (props) => {
    const {name, type, photo} = props.personDetails
    return (
        <div className="userinfo-container">
            <div>
                <p> {name} </p>
            <p> {type} </p> 
            <p> some extra information</p>
             </div>
            <p></p>
            <style jsx>{
        `.userinfo-container {
            padding : 1em;
            display : flex;
        }
        .userinfo-container > p {
            border : 3px solid green;
            width : 5em;
            border-radius : 50%;

        }
        `
    }</style>
        </div>
    )
}

export default PersonDetail;