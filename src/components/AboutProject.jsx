import React from "react";
import axios from "axios";

const  AboutProject = () => {
        return (
            <section className="mt-5 p-5 container-about-projectPage border border-dark rounded">
                <div className="d-flex flex-wrap">
                    <div>
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
                    <div className="max-w-50">
                        Избражение проекта
                    </div>
                </div>
            </section>
    )
}

export default AboutProject;