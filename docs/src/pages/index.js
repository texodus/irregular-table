// import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import React, { useEffect } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
// import Link from "@docusaurus/Link";

import styles from "./index.module.css";

function HomepageHeader() {
    const Svg = require("@site/static/img/regular-table-logo.svg").default;
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <Svg role="img" />
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={` ${siteConfig.title}`}>
            <HomepageHeader />
            <main>
                <Gallery />
            </main>
        </Layout>
    );
}

function partition(input, spacing) {
    let output = [];
    for (let i = 0; i < input.length; i += spacing) {
        output[output.length] = input.slice(i, i + spacing);
    }

    return output;
}

function ExampleTD({ img, url, item }) {
    return (
        <td style={{ maxWidth: "400px" }}>
            <Link to={url}>
                <br />
                <h4>{item}</h4>
                <img
                    width="100%"
                    src={img}
                    style={{
                        borderRadius: "10px",
                        border: "1px solid var(--ifm-toc-border-color)",
                    }}
                ></img>
            </Link>
        </td>
    );
}

function ExampleTR({ group }) {
    return (
        <tr>
            {group.map(({ img, name, url }) => {
                return (
                    <ExampleTD
                        key={name}
                        img={img}
                        url={url}
                        item={name}
                    ></ExampleTD>
                );
            })}
        </tr>
    );
}

function ExampleTable({ data }) {
    return (
        <table
            style={{
                display: "flex",
                margin: "0 auto",
                width: "1200px",
                maxWidth: "90%",
            }}
        >
            <tbody>
                {partition(data, 3).map((x, i) => {
                    return <ExampleTR key={i} group={x}></ExampleTR>;
                })}
            </tbody>
        </table>
    );
}

function Gallery() {
    const { siteConfig } = useDocusaurusContext();

    if (ExecutionEnvironment.canUseDOM) {
        useEffect(() => {
            document.body.classList.add("scrolled");
        }, []);
    }

    return (
        <>
            <br />
            <ExampleTable data={siteConfig.customFields.examples} />
            <br />
            <br />
        </>
    );
}
