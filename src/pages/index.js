/* eslint-disable */

import React, { useState } from "react"
import Layout from "../components/layout"
import Particles from "../components/Particles"
import classes from "./styles.module.css"
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from "react-icons/io"
import { BsMoon } from "react-icons/bs"
import { Helmet } from "react-helmet"
import Wrench from "../../assets/wrench.png"
import Radio from "../../assets/radio.png"
import { Link } from "gatsby"

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Helmet>
        <title>Charlie Day</title>
      </Helmet>
      <Layout darkMode={darkMode}>
        <Particles darkMode={darkMode} />
        <div className={classes.container}>
          <div className={classes.detailText}>
            <p
              className={classes.name}
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              Charlie Day
            </p>
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
              }}
            >
              <BsMoon
                fontSize={30}
                color={darkMode ? "white" : "black"}
                cursor="pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
            <p
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              Software Engineer
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className={classes.icon}
                style={{
                  color: darkMode ? "white" : "black",
                }}
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/charlie-day-537585131/")
                }
              >
                <IoLogoLinkedin className={classes.linkedinIcon} />
              </div>
              <div
                className={classes.icon}
                onClick={() =>
                  (window.location = "https://twitter.com/charlie446179")
                }
                style={{
                  color: darkMode ? "white" : "black",
                }}
              >
                <IoLogoTwitter className={classes.twitterIcon} />
              </div>
              <div
                className={classes.icon}
                onClick={() =>
                  (window.location = "https://github.com/charliemday")
                }
                style={{
                  color: darkMode ? "white" : "black",
                }}
              >
                <IoLogoGithub className={classes.githubIcon} />
              </div>
            </div>

            <div className={classes.divider} />

            <div className={classes.wrenchContainer}>
              <img src={Wrench} alt="wrench" className={classes.wrench} />
            </div>
            <div className={classes.projectsContainer}>
              <div className={classes.project}>
                <a
                  href="https://sidetracked.xyz/"
                  className={classes.link}
                  style={{
                    color: darkMode ? "white" : "black",
                  }}
                >
                  SideTracked
                </a>
              </div>
              <div className={classes.project}>
                <a
                  href="https://boilerhub.xyz/"
                  className={classes.link}
                  style={{
                    color: darkMode ? "white" : "black",
                  }}
                >
                  BoilerHub
                </a>
              </div>
              <div className={classes.project}>
                <a
                  href="https://www.ottofinance.io/"
                  className={classes.link}
                  style={{
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Otto Finance
                </a>
              </div>
              <div className={classes.project}>
                <a
                  href="https://serverchat.xyz/home"
                  className={classes.link}
                  style={{
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Server Chat
                </a>
              </div>
            </div>
            <div>
              <div className={classes.radioContainer}>
                <img src={Radio} alt="wrench" className={classes.wrench} />
              </div>
              <div className={classes.linkContainer}>
                <Link to="/blog/aboutMe">About Me</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
