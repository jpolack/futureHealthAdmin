import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button } from 'material-ui';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';

const TextFieldWrapper = ({ input, ...rest }) => {
  return (
    <FormControl fullWidth>
      <TextField
        {...input}
        {...rest}
      />
    </FormControl>
  );
};

TextFieldWrapper.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const SelectFieldWrapper = ({ input, children, label, ...rest }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        name={label}
        value={input.value}
        onChange={input.onChange}
        {...rest}
      >
        {children}
      </Select>
    </FormControl>
  );
};

SelectFieldWrapper.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export const Form = ({ handleSubmit, onSend, reset }) => {
  return (
    <form
      onSubmit={
      handleSubmit((values) => {
        onSend(values);
        reset();
      })
    }
    >
      <Grid spacing={16} container>
        <Grid xs={6} item>
          <Field
            name="name" label="Name" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={6} item>
          <Field
            name="type" label="Activity" component={SelectFieldWrapper}
          >
            <MenuItem value={'Running'}>Running</MenuItem>
          </Field>
        </Grid>
        <Grid xs={12} item>
          <Field
            name="description" label="Description" component={TextFieldWrapper} multiline
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            name="points" label="Points" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            name="value" label="Value" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            name="unit" label="Unit" component={SelectFieldWrapper}
          >
            <MenuItem value={'Kilometers'}>Kilometers</MenuItem>
            <MenuItem value={'Minutes'}>Minutes</MenuItem>
            <MenuItem value={'Calories'}>Calories</MenuItem>
          </Field>
        </Grid>
        <Grid xs={12} item>
          <Button variant="raised" color="secondary" type="submit">Send</Button>
        </Grid>
      </Grid>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

Form.defaultProps = {
};

const connectedForm = reduxForm({
  form: 'admin',
})(Form);

export default connectedForm;
