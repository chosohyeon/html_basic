const Section03 = () => {
    return ( 
        <section className="business02 basicSection">
        <h2><span className="mainColor">CEO'S</span> GREETINGS</h2>
        <p>새로운 미래를 열어가는 지구별 컴퍼니</p>
        <div className="container">
            <div className="left">
                <figure>
                    <img src="./img/item03.png" alt=""/>
                </figure>
            </div>
            <div className="right">
                <h3>새로운 미래를 열어가는 지구별 컴퍼니</h3>
                <p>Lorem ipsum dolor sit amet, repellendus.</p>

                <ul className="dotList">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                </ul>

                <div className="bottom">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
            </div>
        </div>
        <div className="inner">
            <h3>새로운 미래를 열어가는 지구별 컴퍼니</h3>
            <ul className="row">
                <li data-num="01">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li data-num="02">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li data-num="03">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                <li data-num="04">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
        </div>
    </section>


    )
}

export default Section03;