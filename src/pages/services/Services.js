import React from 'react';
import './services.css';
import {Row, Col} from 'antd';
import Card from "../../components/card/Card";

export default () => {
    return (

            <Row className={'services'}>
                <Col md={{ span: 8 }} xs={{ span: 24 }}>
                    <div className={'card-container'}>
                        <Card title={'Web Applications'}/>
                    </div>
                </Col>
                <Col md={{ span: 8 }} xs={{ span: 24 }}>
                    <div className={'card-container'}>
                        <Card title={'Mobile Applications'}/>
                    </div>
                </Col>
                <Col md={{ span: 8 }} xs={{ span: 24 }}>
                   <div className={'card-container'}>
                       <Card title={'Graphics & Motion'}/>
                   </div>
                </Col>
            </Row>

    )
}
