

const Cats = (props)=> {
    return (
        <div>
          <img src={props.catImage} alt="a Cat"/>
          <h3>Name: {props.Name}</h3>
          <p>Age: {props.Age}</p>
        </div>
    );
}

export default Cats;