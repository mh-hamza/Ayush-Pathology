import React from "react";
import headerImg from "../../assets/header.jpg"
import footerImg from "../../assets/bottom.jpg";
import { useLocation, useParams } from "react-router-dom";
import "./View.css"; // Assuming you have a CSS file for styling

function ViewLFT() {
  const { reportId } = useParams();
  
  const location = useLocation();
  const reportData = location.state;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <>
        <div className="container-a">
          <div className="top">
            <img src={headerImg} alt="" />
          </div>
          <div className="form">
            <div className="row">
              <p>Pt. {reportData.name}</p>
              <p>
                Age :{reportData.age}YRS/{reportData.gender}
              </p>
            </div>
            <div className="row">
              <p>Dr. Reff : DR {reportData.drReff}</p>
              <p>Date : {reportData.date}</p>
            </div>
            <hr />
            <h4 className="pathology-report-heading">PATHOLOGY REPORT</h4>
            <div className="report-container">
              <div className="first-column">
                <span>Test Name</span>
                <p>Serum Total Bilirbin</p>
                <p>Serum Direct Bilirbin</p>
                <p>Serum Indirect Bilirbin</p>
                <p>Serum Alkaline Phosphatase</p>
                <p>S.G.O.T</p>
                <p>S.G.P.T</p>
                <p>Serum Prorein</p>
              </div>
              <div className="second-column">
                <span>Result</span>
                <p
                  className={
                    reportData.serumTotalBilirubin < 0.2 ||
                    reportData.serumTotalBilirubin > 1.0
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumTotalBilirubin}
                </p>
                <p
                  className={
                    reportData.serumDirectBilirubin < 0.0 ||
                    reportData.serumDirectBilirubin > 0.2
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumDirectBilirubin}
                </p>

                <p
                  className={
                    reportData.serumIndirectBilirubin < 0.0 ||
                    reportData.serumIndirectBilirubin > 0.1
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumIndirectBilirubin}
                </p>

                <p
                  className={
                    reportData.serumAlkalinePhosphatase < 28 ||
                    reportData.serumAlkalinePhosphatase > 111
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumAlkalinePhosphatase}
                </p>

                <p
                  className={
                    reportData.sGot < 10 || reportData.sGot > 35
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.sGot}
                </p>

                <p
                  className={
                    reportData.sGPT < 10 || reportData.sGPT > 40
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.sGPT}
                </p>

                <p
                  className={
                    reportData.serumProtein < 6.0 ||
                    reportData.serumProtein > 8.0
                      ? "font-bold"
                      : ""
                  }
                >
                  {reportData.serumProtein}
                </p>
              </div>
              <div className="third-column">
                <span>Unit</span>
                <p>mg/dl</p>
                <p>mg/dl</p>
                <p>mg/dl</p>
                <p>K.A.Units</p>
                <p>u/ml</p>
                <p>u/ml</p>
                <p>g/dl</p>
              </div>
              <div className="fourth-column">
                <span>Range</span>
                <p>(0.2-1.0)</p>
                <p>(0.0-0.2)</p>
                <p>(0.0-0.1)</p>
                <p>(28-111)</p>
                <p>(10-35)</p>
                <p>(10-40)</p>
                <p>(6.0-8.0)</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <img src={footerImg} alt="bottom" />
          </div>
          <button className="print" onClick={handlePrint}>
            Print
          </button>
        </div>
      </>
    </>
  );
}

export default ViewLFT;
