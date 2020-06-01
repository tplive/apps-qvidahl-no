import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Contact() {
    return (
        <Container>
            <Link to="/">Home</Link>
            <Header headerText="Contact me!"/>
            <p>Thomas Qvidahl</p>
            <p>Twitter: <a href="https://twitter.com/qvidahl">@qvidahl</a></p>
            <p>Feel free to drop me a message!</p>
        </Container>
    )
}