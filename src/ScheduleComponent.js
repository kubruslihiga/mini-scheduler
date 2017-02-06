import React from 'react';
import { reduxForm, Field } from 'redux-form'

class ScheduleComponent extends React.Component {
  constructor() {
    super();
    this.days = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3];
    this.employees = ['Matilde', 'Creide', 'Eugenia', 'Fabiola'];
  }

  render() {
    let { handleSubmit } = this.props;
    return (
      <div id="schedule">
        <form onSubmit={handleSubmit((values) => { console.log(values)})}>
          <table>
            <thead>
              <tr>
                <th>Funcionários\\Dias</th>
                {this.days && this.days.map((param, index) => { return (
                  <th key={index}>{param}</th>
                );
                })}
              </tr>
            </thead>
            <tbody>
              {this.employees && this.employees.map((paramEmp, indexEmp) => { return (
                <tr key={indexEmp}>
                  <td>{paramEmp}</td>
                  {this.days && this.days.map((paramDay, indexDay) => { return (
                    <td key={indexDay}>
                      <Field name={`${paramEmp}.${paramDay}`} component="select" value="Normal">
                        <option value="Normal">...</option>
                        <option value="Folga">Folga</option>
                        <option value="Intermediario">Intermediário</option>
                      </Field>
                    </td>
                  );
                  })}
                </tr>
              ); })}
            </tbody>
          </table>
          <button type="submit">Submeter</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({ form : 'scheduleComponent', destroyOnUnmount: false, forceUnregisterOnUnmount: true })(ScheduleComponent);