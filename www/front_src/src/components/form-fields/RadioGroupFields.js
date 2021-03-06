import React from "react";
import PropTypes from "prop-types";
import styles from '../../styles/partials/form/_form.scss';
import FieldMsg from "./FieldMsg";
import RadioField from "./RadioField";
import { I18n } from "react-redux-i18n";

const getValue = item => (item.value ? item.value : item);

const getLabel = item => (item.label ? item.label : item);

const getInfo = item => (item.info ? item.info : null);

const renderOptions = (options, rest) =>
  options.map((item, i) => (
    <RadioField
      key={i}
      {...rest}
      value={getValue(item)}
      label={I18n.t(getLabel(item))}
      info={getInfo(item)}
      checked={getValue(item) === rest.input.value}
      className={styles["radio-group-field__radio"]}
    />
  ));

const RadioGroupField = ({ options, className, label, meta, ...rest }) => {
  const { error, touched, ...restMeta } = meta;

  return (
    <div className={styles["form-group"]}>
      {renderOptions(options, { ...rest, meta: { ...restMeta } })}
      {touched && error ? <FieldMsg>{error}</FieldMsg> : null}
    </div>
  );
};

RadioGroupField.displayName = "RadioGroupField";
RadioGroupField.propTypes = {
  options: PropTypes.array.isRequired
};

RadioGroupField.defaultProps = { className: styles["radio-group-field"] };

export default RadioGroupField;
