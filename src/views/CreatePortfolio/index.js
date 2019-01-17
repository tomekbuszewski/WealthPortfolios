import * as React from 'react';
import Props from 'prop-types';

import Input from '@src/components/Input';
import Section from '@src/components/Section';
import Notify from '@src/components/Notification';

import FormController from '@src/containers/FormController';

const CreatePortfolio = (props) => {
  const {
    onChange,
    data,
    submit,
    success,
  } = props;

  return (
    <Section title="Create portfolio">
      <FormController>
        {success === true && <Notify>Creation successful</Notify>}
        {success === false && <Notify type="warning">Creation failed</Notify>}
        <Input label="Portfolio name" name="name" onChange={onChange} value={data.name ? data.name : ''} />
        <Input label="Client name" name="clientName" onChange={onChange} value={data.clientName ? data.clientName : ''} />
        <Input label="Initial wallet value" name="value" onChange={onChange} value={data.value ? data.value : ''} />
        <Input label="Wallet currency" name="currency" onChange={onChange} value={data.currency ? data.currency : ''} />
        <button type="submit" onClick={submit} className="button is-primary">Submit</button>
      </FormController>
    </Section>
  );
};

CreatePortfolio.propTypes = {
  onChange: Props.func.isRequired,
  submit: Props.func.isRequired,
  data: Props.objectOf(Props.oneOfType([Props.string, Props.number])).isRequired,
  success: Props.bool,
};

CreatePortfolio.defaultProps = {
  success: null,
};

export default CreatePortfolio;
