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
            appName="Selbu-whist"
            appIcon="/images/selbu-whist-icon.png"
            longDesc="Selbu-whist is a fun card game for two to five players"
        />
    </Container>
    );
}