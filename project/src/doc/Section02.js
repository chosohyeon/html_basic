import '../css/section02.css';

const Section02 = () => {
    return ( 
        <section className="business">
            <h2><span className="t_b">OUR</span> BUSINESS</h2>
            <p>새로운 미래를 열어가는 지구별 컴퍼니</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="./img/item01.jpeg" alt=""/>
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur accusamus,
                            voluptatibus ad nesciunt dolorem!</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/item02.jpeg" alt=""/>
                    </div>
                    <div className="cover">
                        <h3>주요사업 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur accusamus,
                            voluptatibus ad nesciunt dolorem!</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/item03.png" alt=""/>
                    </div>
                    <div className="cover">
                        <h3>주요사업 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur accusamus,
                            voluptatibus ad nesciunt dolorem!</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/item04.png" alt=""/>
                    </div>
                    <div className="cover">
                        <h3>주요사업 4</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur accusamus,
                            voluptatibus ad nesciunt dolorem!</p>
                        <a href="">자세히보기</a>
                    </div>
                </figure>
            </div>
            <div className="inner">
                <div className="tit">
                    <strong>심플하고 깜찍한 지구별 컴퍼니</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, excepturi. Ex, excepturi!</p>
                </div>
                <div className="list">
                    <ul className="dotList">
                        <li>Lorem ipsum, dolor sit</li>
                        <li>amet consectetur adipisicing elit.</li>
                        <li>Exercitationem, perspiciatis!</li>
                        <li>Ex, excepturi.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section02;