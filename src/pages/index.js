import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container";

export default function Home() {
    return (
    <Container>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Apps by Qvidahl"/>
    </Container>
    );
}