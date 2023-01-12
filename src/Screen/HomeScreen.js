import React from 'react';
import About from '../Section/About';
import Footer from '../Section/Footer';
import Home from '../Section/Home';
import Project from '../Section/Project';
import Skills from '../Section/Skills';

export default function HomeScreen(){
    return(
        <>
            <Home />
            <About />
            <Skills />
            <Project />
            <Footer />
        </>
    )
}