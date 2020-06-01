import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container";
import AppCard from "../components/appcard";

export default function Home() {
    return (
    <Container>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Apps by Qvidahl"/>
        <AppCard
            appName="Conference Call Bingo"
            appIcon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            longDesc="Conference Call Bingo is what you play when you get a lot of conference call clichès going on..."
            />
        <AppCard
            appName="Selbu-whist"
            appIcon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            longDesc="Selbu-whist is a fun card game for two to five players"
        />
        <AppCard
            appName="Image-generating API"
            appIcon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            longDesc="This API will generate a background image for use in conference calls. Dynamic text."
        />
    </Container>
    );
}