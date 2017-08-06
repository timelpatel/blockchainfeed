import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
// import style from './style.scss'



class LineGraph extends Component {

    componentDidMount() {

        // set graph properties
        const graphHeight = 400
        const graphWidth = 700
        const marginBottom = 30
        const marginLeft = 30
        const marginRight = 30
        const marginTop = 20
        const cssStyle = "fill: none; stroke: #0099cc; stroke-width: 1px;"

        const margin = {
            top: marginTop,
            right: marginRight,
            bottom: marginBottom,
            left: marginLeft
        },
            width = graphWidth - margin.left - margin.right,
            height = graphHeight - margin.top - margin.bottom;

        // parse the date / time
        const parseTime = d3.timeParse("%d-%m-%Y")

        // set the ranges
        const x = d3.scaleTime().range([0, width])
        const y = d3.scaleLinear().range([height, 0])

        // define the line
        const valueline = d3.line()
            .x( (d) => {
                return x(d.date)
            })
            .y( (d) => {
                return y(d.close)
            })

        // append the svg
        const svg = d3.select("#d3LineGraph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // appends a 'group' element to 'svg'
            .append("g")
            // moves the 'group' element to the top left margin
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")")

        // Get the data
        d3.json(this.props.data, (error, data) => {
            if (error) throw error

            // format the data
            data.forEach( (d) => {
                d.date = parseTime(d.date)
                d.close = +d.close
            })

            // Scale the range of the data
            x.domain(d3.extent(data, (d) => {
                return d.date
            }))

            y.domain([0, d3.max(data, (d) => {
                return d.close
            })])

            // Add the valueline path.
            svg.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", valueline)
                .attr("style", cssStyle)

            // Add the X Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))

            // Add the Y Axis
            svg.append("g")
                .call(d3.axisLeft(y))

        })

    }


    render() {

        return (
            <div id="d3LineGraph" />
        )

    }

}


export default LineGraph
