import React, { Component } from 'react';


export class Methodology extends Component {

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Методология
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

                                <p>
                                    <button type="button" class="btn btn-inverse-primary btn-fw mr-3">Скачать шаблон таблицы .xls</button>
                                     это облегчит расчеты 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Критерии продуктивности матрицы А </h4>
                                <p className="card-description">
                                    Существует несколько критериев продуктивности матрицы А.
                                </p>

                                <ul className="list-ticked">
                                    <li>
                                        Матрица А продуктивна, если максимум сумм элементов ее столбцов не превосходит единицы, причем хотя бы для одного из столбцов сумма элементов строго меньше единицы.
                                    </li>
                                    <li>
                                        Для того чтобы обеспечить положительный конечный выпуск по всем отраслям необходимо и достаточно, чтобы выполнялось одно из перечисленных ниже условий:
                                    </li>
                                    <li>
                                        Определитель матрицы (E - A) не равен нулю, т.е. матрица (E- A) имеет обратную матрицу (E - A)-1.
                                    </li>
                                    <li>
                                        Наибольшее по модулю собственное значение матрицы А, т.е. решение уравнения |λE - A| = 0 строго меньше единицы.
                                    </li>
                                    <li>
                                        Все главные миноры матрицы (E - A) порядка от 1 до n, положительны.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Methodology
