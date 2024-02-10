const Parrafo = (props) => {
  console.log(props);const { name, age } = props;
  console.log(props);
  // let name = "";
  // let age = "";
  // if(props.name && props.age){
  //   name = props.name; 
  //   age = props.age; 
  // }

  console.log(name + age);
  return (
    <p>
      My name is {name} and i am {age} years old
    </p>
  );
};

export default Parrafo;