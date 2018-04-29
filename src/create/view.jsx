import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, FormHelperText } from 'material-ui';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
import { required, numericality } from 'redux-form-validators';

const TextFieldWrapper = ({ input, meta: { error, touched }, label, ...rest }) => {
  return (
    <FormControl fullWidth error={!!(touched && error)}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Input id={label} {...input} {...rest} />
      {(touched && error && <FormHelperText id={`${label}text`}>{error}</FormHelperText>)}
    </FormControl>
  );
};

TextFieldWrapper.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
TextFieldWrapper.defaultProps = {
  label: undefined,
  meta: {},
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

export const Form = ({ handleSubmit, onSend, reset, pristine, invalid }) => {
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
            validate={[required()]}
            name="name" label="Name" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={6} item>
          <Field
            validate={[required()]}
            name="type" label="Activity" component={SelectFieldWrapper}
          >
            <MenuItem value={'Running'}>Running</MenuItem>
          </Field>
        </Grid>
        <Grid xs={12} item>
          <Field
            validate={[required()]}
            name="description" label="Description" component={TextFieldWrapper} multiline
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            validate={[required(), numericality()]}
            name="points" label="Points" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            validate={[required(), numericality()]}
            name="value" label="Value" component={TextFieldWrapper}
          />
        </Grid>
        <Grid xs={4} item>
          <Field
            validate={[required()]}
            name="unit" label="Unit" component={SelectFieldWrapper}
          >
            <MenuItem value={'Kilometers'}>Kilometers</MenuItem>
            <MenuItem value={'Minutes'}>Minutes</MenuItem>
            <MenuItem value={'Calories'}>Calories</MenuItem>
          </Field>
        </Grid>
        <Grid xs={12} item>
          <Button disabled={pristine || invalid} variant="raised" color="secondary" type="submit">Send</Button>
        </Grid>
      </Grid>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

Form.defaultProps = {
};

const connectedForm = reduxForm({
  form: 'admin',
})(Form);

export default connectedForm;
