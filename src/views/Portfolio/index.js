import * as React from 'react';
import Props from 'prop-types';

import Input from '@src/components/Input';
import Section from '@src/components/Section';
import Notify from '@src/components/Notification';

const Portfolio = (props) => {
  const {
    data,
    editable,
    editToggle,
    onChange,
    success,
  } = props;

  return (
    <Section title={`${data.name} — ${data.clientName}`}>
      <article>
        {success === true && <Notify>Edit successful</Notify>}
        {success === false && <Notify type="warning">Edit failed</Notify>}
        <button className="button is-small" type="button" onClick={editToggle}>{editable ? 'Finish' : 'Edit'}</button>
        <form>
          <Input type="number" value={data.value} name="value" label="Amount" disabled={!editable} onChange={onChange} />
          <Input type="text" value={data.currency} name="currency" label="Currency" disabled={!editable} onChange={onChange} />
          <Input type="text" value={data.name} name="name" label="Name" disabled={!editable} onChange={onChange} />
          <Input type="text" value={data.clientName} name="clientName" label="Client" disabled={!editable} onChange={onChange} />
        </form>
      </article>
    </Section>
  );
};

Portfolio.propTypes = {
  data: Props.shape({
    clientName: Props.string,
    currency: Props.string,
    id: Props.oneOfType([Props.string, Props.number]),
    name: Props.string,
    value: Props.oneOfType([Props.string, Props.number]),
  }).isRequired,
  editable: Props.bool.isRequired,
  editToggle: Props.func.isRequired,
  success: Props.bool,
  onChange: Props.func.isRequired,
};

export default Portfolio;
