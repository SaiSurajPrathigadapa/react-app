import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets-wrapper">
      <h3>Elements</h3>
      <div className="elements">
        <button className="button">Container</button>
        <button className="button">Row</button>
        <button className="button">Column</button>
        <button className="button">List</button>
      </div>
      <h3>Widgets</h3>
      <div className="widgets">
        <button className="button">Input Field</button>
        <button className="button">Input Box</button>
        <button className="button">Button</button>
        <button className="button">Check Box</button>
        <button className="button">Radio Button</button>
        <button className="button">Drop Down</button>
        <button className="button">Text</button>
      </div>
    </div>
  );
}

export default Widgets;
