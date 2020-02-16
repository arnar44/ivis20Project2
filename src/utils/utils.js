import * as d3 from "d3";

export default function createCoords(svgRef, d) {

    const margin = { top: 66, right: 110, bottom: 20, left: 188 },
        width = document.body.clientWidth - margin.left - margin.right,
        height = 340 - margin.top - margin.bottom,
        innerHeight = height - 2;


    const countries = ['Argentina', 'Australia', 'Brazil', 'Chile', 'China', 'Colombia', 'Germany', 'Ghana', 'India',
        'Iraq', 'Japan', 'Kazakstan', 'Malaysia', 'Morocco', 'Netherlands', 'New-Zealand', 'Nigeria',
        'Pakistan', 'Peru', 'Poland', 'Russia', 'South-Africa', 'Zimbabwe', 'Spain', 'Sweden', 'Thailand',
        'Egypt', 'USA', 'Uruguay', 'Uzbekistan'];

    const devicePixelRatio = window.devicePixelRatio || 1;

    const color = d3.scaleOrdinal()
        .domain(countries)
        .range(["#DB7F85", "#50AB84", "#4C6C86", "#C47DCB", "#B59248", "#DD6CA7", "#E15E5A", "#5DA5B3", "#725D82", "#54AF52", "#954D56", "#8C92E8", "#D8597D", "#AB9C27", "#D67D4B", "#D58323", "#BA89AD", "#357468", "#8F86C2", "#7D9E33", "#517C3F", "#9D5130", "#5E9ACF", "#776327", "#944F7E"]);

    const types = {
        "Number": {
            key: "Number",
            coerce: function (d) { return +d; },
            extent: d3.extent,
            within: function (d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
            defaultScale: d3.scaleLinear().range([innerHeight, 0])
        },
        "String": {
            key: "String",
            coerce: String,
            extent: function (data) { return data.sort(); },
            within: function (d, extent, dim) { return extent[0] <= dim.scale(d) && dim.scale(d) <= extent[1]; },
            defaultScale: d3.scalePoint().range([0, innerHeight])
        }
    };

    const dimensions = [
        {
            key: "Name",
            description: "Name of Country",
            type: types["String"],
            axis: d3.axisLeft()
                .tickFormat(function (d, i) {
                    return d;
                })
        },
        {
            key: "Family",
            description: "Importance of Family",
            type: types["Number"]
        },
        {
            key: "Friends",
            description: "Importance of Friends",
            type: types["Number"]
        },
        {
            key: "Happiness",
            type: types["Number"],
            description: "Avrg Happiness of Country",
            scale: d3.scaleLog().range([innerHeight, 0])
        },
        {
            key: "Satisfaction",
            type: types["Number"],
            description: "Avrg Life satisfaction in Country",
            scale: d3.scaleLog().range([innerHeight, 0])
        },
        {
            key: "Religous",
            description: "% of Religous people in country",
            type: types["Number"]
        },
        {
            key: "Suicide",
            description: "Avrg Suicide Acceptance in Country",
            type: types["Number"]
        },
        {
            key: "Employment",
            description: "Avrg Employment Status in Country",
            type: types["Number"]
        },
        {
            key: "Age",
            description: "Avrg Age of participants in country",
            type: types["Number"]
        },
        {
            key: "Education",
            description: "Avrg Education Level in Country",
            type: types["Number"]
        },
        {
            key: "Liv_Status",
            description: "% of participants that lives with Parents in Country",
            type: types["Number"]
        }
    ];


    const xscale = d3.scalePoint()
        .domain(d3.range(dimensions.length))
        .range([0, width]);

    const yAxis = d3.axisLeft();

    const container = d3.select(svgRef.current).append("div")
        .attr("class", "parcoords")
        .style("width", width + margin.left + margin.right + "px")
        .style("height", height + margin.top + margin.bottom + "px");

    const svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const canvas = container.append("canvas")
        .attr("width", width * devicePixelRatio)
        .attr("height", height * devicePixelRatio)
        .style("width", width + "px")
        .style("height", height + "px")
        .style("margin-top", margin.top + "px")
        .style("margin-left", margin.left + "px");

    const ctx = canvas.node().getContext("2d");
    ctx.globalCompositeOperation = 'darken';
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 1.5;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const output = d3.select("body").append("pre");

    const axes = svg.selectAll(".axis")
        .data(dimensions)
        .enter().append("g")
        .attr("class", function (d) { return "axis " + d.key.replace(/ /g, "_"); })
        .attr("transform", function (d, i) { return "translate(" + xscale(i) + ")"; });

    d.map(data => {


        data.forEach(function (d) {
            dimensions.forEach(function (p) {
                d[p.key] = !d[p.key] ? null : p.type.coerce(d[p.key]);
            });

            // truncate long text strings to fit in data table
            for (const key in d) {
                if (d[key] && d[key].length > 35) d[key] = d[key].slice(0, 36);
            }
        });

        // type/dimension default setting happens here
        dimensions.forEach(function (dim) {
            if (!("domain" in dim)) {
                // detect domain using dimension type's extent function
                dim.domain = d3_functor(dim.type.extent)(data.map(function (d) { return d[dim.key]; }));
            }
            if (!("scale" in dim)) {
                // use type's default scale for dimension
                dim.scale = dim.type.defaultScale.copy();
            }
            dim.scale.domain(dim.domain);
        });

        //const render = renderQueue(draw).rate(30);

        ctx.clearRect(0, 0, width, height);
        ctx.globalAlpha = d3.min([1.15 / Math.pow(data.length, 0.3), 1]);
        //render(data);

        axes.append("g")
            .each(function (d) {
                const renderAxis = "axis" in d
                    ? d.axis.scale(d.scale)  // custom axis
                    : yAxis.scale(d.scale);  // default axis
                d3.select(this).call(renderAxis);
            })
            .append("text")
            .attr("class", "title")
            .attr("text-anchor", "start")
            .text(function (d) { return "description" in d ? d.description : d.key; });

        // Add and store a brush for each axis.
        axes.append("g")
            .attr("class", "brush")
            .each(function (d) {
                d3.select(this).call(d.brush = d3.brushY()
                    .extent([[-10, 0], [10, height]])
                    .on("start", brushstart)
                    .on("brush", brush)
                    .on("end", brush)
                )
            })
            .selectAll("rect")
            .attr("x", -8)
            .attr("width", 16);

        d3.selectAll(".axis.pl_discmethod .tick text")
            .style("fill", color);

        output.text(d3.tsvFormat(data.slice(0, 24)));

        function project(d) {
            return dimensions.map(function (p, i) {
                // check if data element has property and contains a value
                if (
                    !(p.key in d) ||
                    d[p.key] === null
                ) return null;

                return [xscale(i), p.scale(d[p.key])];
            });
        };

        function draw(d) {
            ctx.strokeStyle = color(d.pl_discmethod);
            ctx.beginPath();
            const coords = project(d);
            coords.forEach(function (p, i) {
                // this tricky bit avoids rendering null values as 0
                if (p === null) {
                    // this bit renders horizontal lines on the previous/next
                    // dimensions, so that sandwiched null values are visible
                    if (i > 0) {
                        const prev = coords[i - 1];
                        if (prev !== null) {
                            ctx.moveTo(prev[0], prev[1]);
                            ctx.lineTo(prev[0] + 6, prev[1]);
                        }
                    }
                    if (i < coords.length - 1) {
                        const next = coords[i + 1];
                        if (next !== null) {
                            ctx.moveTo(next[0] - 6, next[1]);
                        }
                    }
                    return;
                }

                if (i == 0) {
                    ctx.moveTo(p[0], p[1]);
                    return;
                }

                ctx.lineTo(p[0], p[1]);
            });
            ctx.stroke();
        }

        function brushstart() {
            d3.event.sourceEvent.stopPropagation();
        }

        // Handles a brush event, toggling the display of foreground lines.
        function brush() {
            //render.invalidate();

            const actives = [];
            svg.selectAll(".axis .brush")
                .filter(function (d) {
                    return d3.brushSelection(this);
                })
                .each(function (d) {
                    actives.push({
                        dimension: d,
                        extent: d3.brushSelection(this)
                    });
                });

            const selected = data.filter(function (d) {
                if (actives.every(function (active) {
                    const dim = active.dimension;
                    // test if point is within extents for each active brush
                    return dim.type.within(d[dim.key], active.extent, dim);
                })) {
                    return true;
                }
            });

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = d3.min([0.85 / Math.pow(selected.length, 0.3), 1]);
            //render(selected);

            output.text(d3.tsvFormat(selected.slice(0, 24)));
        }
});

function d3_functor(v) {
    return typeof v === "function" ? v : function () { return v; };
};
}