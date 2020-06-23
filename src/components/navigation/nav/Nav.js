import React, {useState} from 'react';
import './nav.css'
import {Menu, Button, Drawer} from 'antd';
import {MailOutlined, AppstoreOutlined, MenuOutlined} from '@ant-design/icons';
import DrawerMenu from "./DrawerMenu";

const {SubMenu} = Menu;

export default () => {
    const [current, setCurrent] = useState('about')
    const [visible, setVisible] = useState(false);
    const handleClick = (e) => {
        setCurrent(e.key)
    }
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className={'menu-container'}><Menu className={'menu'} onClick={handleClick} selectedKeys={[current]}
                                                mode="horizontal">
            <Menu.Item className={'menu-item'} key="about" icon={<MailOutlined/>}>
                ABOUT
            </Menu.Item>
            <Menu.Item className={'menu-item'} key="services" icon={<AppstoreOutlined/>}>
                SERVICES
            </Menu.Item>
            <Menu.Item className={'menu-item'} key="examples" icon={<AppstoreOutlined/>}>
                EXAMPLES
            </Menu.Item>
            <Menu.Item className={'menu-item'} key="alipay">
                CONTACT
            </Menu.Item>
        </Menu>

            <div className={'bars'}>
                <Button onClick={showDrawer} className={'bars-btn'}>
                    <MenuOutlined/>
                </Button>
            </div>
            <Drawer

                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
               <DrawerMenu showDrawer={showDrawer}/>
            </Drawer>
        </div>

    )
}