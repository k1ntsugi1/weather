import React from "react";

function Prompt() {
    return (
        <div className="rotate-container">
            <div className="card">
                <div className="back-face-of-card">
                    <h3>Чтобы начать поиск:</h3>
                    <ul>
                        <li>Введите в поиск название города</li>
                        <li>Если ваш город етсь среди указанных, то нажмите на него :)</li>
                    </ul>
                </div>
                <div className="front-face-of-card">
                    <h3>О проекте</h3>
                    <p className="m-0">Задачами этого проекта является:</p>
                    <ul>
                        <li>Создать приложение способное искать погоду в разных уголках мира</li>
                        <li>Самостоятельно настроить:
                            <ul>
                                <li>Webpack</li>
                                <li>Babel</li>
                            </ul>
                        </li>
                        <li>Использовать:
                            <ul>
                                <li>Препроцессор SASS</li>
                                <li>flex, grid, media (для адаптивности страницы)</li>
                                <li>CSS анимации (как в 2D, так и в 3D)</li>
                                <li>React (с хуками)</li>
                                <li>Redux (@toolkit)</li>
                                <li>GisMeteo API</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prompt;