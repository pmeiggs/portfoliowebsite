import "./test.css";
import testData from "../data/testData";


function Test(props) {
  return (
    <div className="vertical">
      {testData.map(item => (
        <label key={item._id}>
          <input type="radio" name="color" value={item.name} />
          {item.name}
        </label>
      ))}
    </div>
  );
}
export default Test;