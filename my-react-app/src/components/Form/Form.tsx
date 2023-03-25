import React from 'react';
import styles from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="form__name">
          <h1>Form</h1>
        </div>
        <div className={styles.form__row}>
          <div className={`${styles.form__input} first-name`}>
            <label>
              First Name
              <input type="text" />
            </label>
          </div>
          <div className={`${styles.form__input} last-name`}>
            <label>
              Last Name
              <input type="text" />
            </label>
          </div>
          <div className={`${styles.form__input} email`}>
            <label>
              Email
              <input type="email" />
            </label>
          </div>
        </div>
        <div className={`${styles.form__input} data`}>
          <label>
            Select your date of birth
            <input type="date" />
          </label>
        </div>
        <div className={`${styles.form__input} select`}>
          <label>
            Pick your favorite action:
            <select>
              <option value="make">Make money</option>
              <option value="spend">Spend money</option>
              <option value="stay">Stay at home</option>
              <option value="lick">Lick at home</option>
            </select>
          </label>
        </div>

        <div className={`${styles.form__input} file`}>
          <label>
            Choose a picture of something <input type="file" />
          </label>
        </div>
        <div className={`${styles.form__input} radio`}>
          <fieldset>
            <legend>Select the opposite button</legend>
            <label>
              <input type="radio" checked name="opposite" value="notThis" />
              this button
            </label>
            <label>
              <input type="radio" name="opposite" value="this" />
              opposite button
            </label>
          </fieldset>
        </div>
        <div className={`${styles.form__input} checkbox`}>
          <label>
            You agree to your data being sent
            <input type="checkbox" />
          </label>
        </div>
        <div className="button">
          <button type="submit" className={`${styles.button_submit} btn`}>
            Submit
          </button>
          <button type="reset" className={`${styles.button_reset} btn`}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
