import './heading.css'
function Heading(props) {
  // eslint-disable-next-line react/prop-types
  const {headName, headTitle} = props;
  return (
    <div className="heading">
      <p>{headName}</p>
      <h2>{headTitle}</h2>
    </div>
  );
}

export default Heading;
