import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Grid, Cell } from 'react-mdl';
import adapter, { TOGGLE } from '../../../shared/forms/adapter';

// TODO: pre-populate, handle settings as one big object rather than individual settings
function SettingsForm({ handleSubmit }) {
  function handleChange() {
    setTimeout(handleSubmit, 0);
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <Grid>
        <Cell col={12}>
          {/*
          <Field
            name="remindersEnabled"
            type="checkbox"
            label="Reminders"
            component={TOGGLE}
          />
          <Field
            name="pomodoroEnabled"
            type="checkbox"
            label="Pomodoro timer"
            component={TOGGLE}
          />
          */}
          <Field
            name="githubEnabled"
            type="checkbox"
            label="Github integration"
            component={TOGGLE}
          />
        </Cell>
      </Grid>
    </form>
  );
}

SettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'settingsForm',
  adapter,
})(SettingsForm);