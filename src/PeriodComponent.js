import React from 'react';
import { reduxForm, Field } from 'redux-form'
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import DatePicker from 'react-bootstrap-date-picker';

class PeriodComponent extends React.Component {
  getDatePickerComponent({input, meta, custom}) {
    return <DatePicker dateFormat="DD/MM/YYYY" showClearButton={false} {...input} {...custom} />
  }

  render() {
    let { handleSubmit } = this.props;
    return (
      <Grid>
        <Row>
          <form onSubmit={handleSubmit((values) => { console.log(values); this.props.router.push('/schedule'); })}>
            <Col xs={4}><Field name="startDate" component={this.getDatePickerComponent} /></Col>
            <Col xs={4}><Field name="endDate" component={this.getDatePickerComponent} /></Col>
            <Row>
              <button type="submit">Próximo passo</button>
            </Row>
          </form>
        </Row>
      </Grid>
    );
  }
}
export default reduxForm({ form : 'scheduleComponent', destroyOnUnmount: false, forceUnregisterOnUnmount: true })(PeriodComponent);