import React from "react";

const AboutPage: React.FC = () => {
    return (
        <section className="mt-5 container-glass b-rad-10 text-light bg-gradient-main">
            <div className="back-face-of-glass b-rad-10"></div>
            <div className="px-3 py-2 front-face-of-glass b-rad-10 ">
                    <div className="d-flex flex-wrap fw-normal">
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
            </div>
        </section>
    );
};

export default AboutPage;