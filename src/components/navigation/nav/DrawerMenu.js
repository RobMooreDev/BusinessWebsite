import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default () => {

    const handleClick = e => {
        console.log('click ', e);
    };

    return(
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >

                <Menu.Item key="1">ABOUT</Menu.Item>
                <Menu.Item key="2">SERVICES</Menu.Item>
                <Menu.Item key="3">EXAMPLES</Menu.Item>
                <Menu.Item key="4">CONTACT</Menu.Item>
        </Menu>
    )
}