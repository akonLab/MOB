import React, { Component } from 'react';

export class About extends Component {
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                    О платформе
                    </h3>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Межотраслевой баланс </h4>
                                <p className="card-description">
                                    Межотраслевой баланс отражает производство и распределение валового национального продукта в отраслевом разрезе, межотраслевые производственные связи, использование материальных и трудовых ресурсов, создание и распределение национального дохода.
                                </p>
                                <p className="card-description">
                                    Пусть экономика страны имеет n отраслей материального производства. Каждая отрасль выпускает некоторый продукт, часть которого потребляется другими отраслями (промежуточный продукт), а другая часть – идет на конечное потребление и накопление (конечный продукт).
                                </p>
                                <p className="card-description">
                                    Обозначим через Xi (i=1..n) валовый продукт i-й отрасли; xij – стоимость продукта, произведенного в i-й отрасли и потребленного в j-й отрасли для изготовления продукции стоимостью Xj; Yi – конечный продукт i-й отрасли.
                                </p>
                                <p className="card-description">
                                </p>
                                <p className="card-description">
                                </p>
                                <p className="card-description">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default About
