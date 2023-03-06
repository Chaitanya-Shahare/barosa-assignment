import "./ColorPicker.scss";

const ColorPicker = () => {

	return(
		<>
		<form className="color-picker" action="">
		  <fieldset>
			<legend className="visually-hidden">Pick a color scheme</legend>
			<label htmlFor="light" className="visually-hidden">Light</label>
			<input type="radio" name="theme" id="light" checked/>

			<label htmlFor="pink" className="visually-hidden">Pink theme</label>
			<input type="radio" id="pink" name="theme"/>

			<label htmlFor="blue" className="visually-hidden">Blue theme</label>
			<input type="radio" id="blue" name="theme"/>

			<label htmlFor="green" className="visually-hidden">Green theme</label>
			<input type="radio" id="green" name="theme"/>

			<label htmlFor="dark" className="visually-hidden">Dark theme</label>
			<input type="radio" id="dark" name="theme"/>
		  </fieldset>
		</form>
		</>
	)
}

export default ColorPicker;
