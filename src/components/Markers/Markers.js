// import React from 'react';
import d3 from 'd3'
import boomerang from './public/ufo-icons/boomerang'
import cigar from './public/ufo-icons/cigar'
import circle from './public/ufo-icons/circle'
import cross from './public/ufo-icons/cross'
import diamond from './public/ufo-icons/diamond'
import disk from './public/ufo-icons/disk'
import egg from './public/ufo-icons/egg'
import fireball from './public/ufo-icons/fireball'
import orb from './public/ufo-icons/orb'
import oval from './public/ufo-icons/oval'
import rectangle from './public/ufo-icons/rectangle'
import teardrop from './public/ufo-icons/teardrop'
import triangle from './public/ufo-icons/triangle'


export default function Marker() {
    Promise.all ([
    boomerang.Marker = d3.xml("boomerang.svg"),
    cigar.Marker = d3.xml("cigar.svg"),
    circle.Marker = d3.xml("circle.svg"),
    cross.Marker = d3.xml("cross.svg"),
    diamond.Marker = d3.xml("diamond.svg"),
    disk.Marker = d3.xml("disk.svg"),
    egg.Marker = d3.xml("egg.svg"),
    fireball.Marker = d3.xml("fireball.svg"),
    orb.Marker = d3.xml("orb.svg"),
    oval.Marker = d3.xml("oval.svg"),
    rectangle.Marker = d3.xml("rectangle.svg"),
    teardrop.Marker = d3.xml("teardrop.svg"),
    triangle.Marker = d3.xml("triangle.svg")
])
.then(([boomerang, cigar, circle, cross, diamond, disk, egg, fireball, orb, oval, rectangle, teardrop, triangle]) => {
        d3.selectAll("boomerang").nodes().forEach(n => {
            n.append(boomerang.documentElement.cloneNode(true))
        });
        d3.selectAll("cigar").nodes().forEach(n => {
            n.append(cigar.documentElement.cloneNode(true))
        });
        d3.selectAll("circle").nodes().forEach(n => {
            n.append(circle.documentElement.cloneNode(true))
        });
        d3.selectAll("cross").nodes().forEach(n => {
            n.append(cross.documentElement.cloneNode(true))
        });
        d3.selectAll("diamond").nodes().forEach(n => {
            n.append(diamond.documentElement.cloneNode(true))
        });
        d3.selectAll("disk").nodes().forEach(n => {
            n.append(disk.documentElement.cloneNode(true))
        });
        d3.selectAll("egg").nodes().forEach(n => {
            n.append(egg.documentElement.cloneNode(true))
        });
        d3.selectAll("fireball").nodes().forEach(n => {
            n.append(fireball.documentElement.cloneNode(true))
        });
        d3.selectAll("orb").nodes().forEach(n => {
            n.append(orb.documentElement.cloneNode(true))
        });
        d3.selectAll("oval").nodes().forEach(n => {
            n.append(oval.documentElement.cloneNode(true))
        });
        d3.selectAll("rectangle").nodes().forEach(n => {
            n.append(rectangle.documentElement.cloneNode(true))
        });
        d3.selectAll("teardrop").nodes().forEach(n => {
            n.append(teardrop.documentElement.cloneNode(true))
        });
        d3.selectAll("triangle").nodes().forEach(n => {
            n.append(triangle.documentElement.cloneNode(true))
        });
    })};