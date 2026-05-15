const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises + " ejercicios"}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
      excercises
    </p>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

export default Course;
