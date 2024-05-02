import React, { useState } from "react";
import "../../App.css";
import TopBar from "../TopBar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../img/homelogo.svg";
import miclogoSvg from "../../img/miclogo.svg";
import personlogoSvg from "../../img/personlogo.svg";
import documentlogoSvg from "../../img/documentlogo.svg";
import Card from "@mui/material/Card";
import SearchBar from "../home/content/SearchBar";
import DocumentCardItem from "./documentItem/DocumentCardItem";
import dokumenemotSvg from "../../img/dokumenemot.svg";

const DaftarHasilAnalisisDokumenPage = () => {
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        {/* Render the SideBar component */}
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
          <Menu
            menuItemStyles={{
              button: {
                // Styling for the active menu item
                "&.active": {
                  backgroundColor: "#772F32", // Change this to the desired color
                  color: "#FFFFFF", // Change this to the desired color
                },
                // Styling for the hover state
                "&:hover": {
                  backgroundColor: "#772F32", // Dark red color
                  color: "#FFFFFF", // White color
                },
              },
            }}
          >
            <MenuItem className="menu-item">
              <img
                src={homelogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/home">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={miclogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/interview">
                Interview
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={documentlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/document">
                Dokumen
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={personlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/profile">
                Profile
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>

        <div className="interview-page-container">
          {/*Header text "Daftar hasil analisis dokumen"*/}
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={dokumenemotSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Daftar Hasil Analisis Dokumen</h1>
          </div>

          <div>
          <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                    borderRadius: '16px',
                    padding: '15px',
                    marginBottom: '20px',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF', // white background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // soft shadow
                    position: 'relative', // to position the circle
                    width:'1100px',
                    marginLeft:'80px',
                }}
              >
                <span className="text-filter">Semua Dokumen</span>
                <span className="text-filter-not-selected">Belum Dianalisis</span>
                <span className="text-filter-not-selected">Sudah Dianalisis</span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar >

            </SearchBar>
          </div>

          <DocumentCardItem />
          <DocumentCardItem />
          <DocumentCardItem />
          <DocumentCardItem />
          <DocumentCardItem />
         

          {/* Add your input form here */}
        </div>
      </div>
    </div>
  );
};

export default DaftarHasilAnalisisDokumenPage;
