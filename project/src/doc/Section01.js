import '../css/section01.css';

const Section01 = () => {
    return (
        <section className="about">
            <h2><span className="mainColor">CEO'S</span> GREETINGS</h2>
            <p>새로운 미래를 열어가는 지구별 컴퍼니</p>
            <div className="container">
                <div className="des">
                    <p className="tit">서비스의 <span className="mainColor">새로운 미래를</span><br />
                        <span className="mainColor">지구별 컴퍼니</span>가 만들어 가겠습니다.
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Tempora, officia consectetur! Corrupti, aut aliquid! Earum incidunt <br />
                        illum veritatis aliquid minima?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Tempora, officia consectetur! Corrupti, aut aliquid! Earum incidunt <br />
                        illum veritatis aliquid minima?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Tempora, officia consectetur! Corrupti, aut aliquid!?</p>

                    <p>지구별 컴퍼니 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/item01.jpeg" alt="" />
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive-table">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 수영구 광안해변로 114번길 24-5</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-487-1928</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
} 

export default Section01;