import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Nav from "./components/navigation/nav/Nav";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Services from "./pages/services/Services";

const App = () => {
    return(
            <Layout className={"layout"}>
                <Layout.Header className={"header"}><Nav/></Layout.Header>
                <Layout.Content className={"content"}>
                    <Row >
                        <Col span={22} offset={1}>
                            <Landing/><Services/>
                        </Col>
                    </Row>
                    </Layout.Content>
                <Layout.Footer>Footer</Layout.Footer>
            </Layout>
    )
}

export default App;
