import React from 'react';
import {Card} from 'antd';
import './card.css';
export default ({title, content}) => {
    return(
        <div className={'card-container'}>
            <Card className={'card'} hoverable title={title} bordered={false}>
                {content}
            </Card>
        </div>
    )
}