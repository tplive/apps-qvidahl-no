import React from "react"
import Header from "../components/header"
import Container from "../components/container"

export default function About() {
    return (
        <Container>
            <Header headerText="About this page"/>
            <p>You have reached the web-presence of my collection of apps.</p>
        </Container>
    );
}