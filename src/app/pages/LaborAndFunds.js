import React, { Component } from 'react';
import { Line, Bar, Doughnut, Pie, Scatter } from 'react-chartjs-2';
import { Form } from 'react-bootstrap';

export class LaborAndFunds extends Component {
    data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [
            {
                label: 'Industry 1',
                data: [10, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Industry 2',
                data: [14, 9, 5, 3, 4, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
                fill: false
            }]
    };

    options = {

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true
        },
        elements: {
            point: {
                radius: 0
            }
        }

    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">Коэффициенты прямых и полных затрат труда и средств</h3>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Рассчитать коэффициенты прямых и полных затрат труда и фондов и плановую потребность в соответствующих ресурсах. </h4>
                                <p className="card-description">
                                Рассчитать коэффициенты прямых и полных затрат труда и фондов и плановую потребность в соответствующих ресурсах.
                                 </p>
                                <form className="forms-sample">
                                    <Form.Group>
                                        <label>Выберите таблицу</label>
                                        <div className="custom-file">
                                            <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                                            <label className="custom-file-label" htmlFor="customFileLang">Upload table</label>
                                        </div>
                                    </Form.Group>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-header">
                    <h3 className="page-title">
                        Результат
                    </h3>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Вы можете загрузить результат как</h4>
                                <div className="template-demo mb-5">
                                    <button type="button" className="btn btn-gradient-primary btn-icon-text">
                                        <i className="mdi mdi-upload btn-icon-prepend"></i>
                                        .csv
                                    </button>

                                    <button type="button" className="btn btn-gradient-success btn-icon-text">
                                        <i className="mdi mdi-upload btn-icon-prepend"></i>
                                        .xls
                                    </button>

                                    <button type="button" className="btn btn-gradient-danger btn-icon-text">
                                        <i className="mdi mdi-upload btn-icon-prepend"></i>
                                        .pdf
                                    </button>
                                </div>

                                <h4 className="card-title">Поделиться результатом по электронной почте</h4>
                                <p className="card-description">
                                Все форматы результатов данных будут отправлены по адресу
                                </p>
                                <form className="forms-sample">
                                    <Form.Group>
                                        <div className="input-group">
                                            <Form.Control type="text" className="form-control" placeholder="Электронная почта " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-sm btn-gradient-primary" type="button">Отправить</button>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Название таблицы</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th> # </th>
                                                <th> First name </th>
                                                <th> Progress </th>
                                                <th> Amount </th>
                                                <th> Deadline </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 1 </td>
                                                <td> Herman Beck </td>
                                                <td> 6 </td>
                                                <td> $ 77.99 </td>
                                                <td> May 15, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 2 </td>
                                                <td> Messsy Adam </td>
                                                <td> 6 </td>
                                                <td> $245.30 </td>
                                                <td> July 1, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 3 </td>
                                                <td> John Richards </td>
                                                <td> 6 </td>
                                                <td> $138.00 </td>
                                                <td> Apr 12, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 4 </td>
                                                <td> Peter Meggik </td>
                                                <td> 6 </td>
                                                <td> $ 77.99 </td>
                                                <td> May 15, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 5 </td>
                                                <td> Edward </td>
                                                <td> 6 </td>
                                                <td> $ 160.25 </td>
                                                <td> May 03, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 6 </td>
                                                <td> John Doe </td>
                                                <td> 6 </td>
                                                <td> $ 123.21 </td>
                                                <td> April 05, 2015 </td>
                                            </tr>
                                            <tr>
                                                <td> 7 </td>
                                                <td> Henry Tom </td>
                                                <td> 6 </td>
                                                <td> $ 150.00 </td>
                                                <td> June 16, 2015 </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Название графика</h4>
                                <Line data={this.data} options={this.options} />

                                <h4 className="card-title mt-5">Сохранить как</h4>
                                <div className="template-demo mb-5">
                                    <button type="button" className="btn btn-outline-primary btn-icon-text">
                                        <i className="mdi mdi-upload btn-icon-prepend"></i>
                                        .svg
                                    </button>

                                    <button type="button" className="btn btn-outline-success btn-icon-text">
                                        <i className="mdi mdi-upload btn-icon-prepend"></i>
                                        .png
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LaborAndFunds
