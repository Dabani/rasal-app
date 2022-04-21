import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
      <>
          <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                      className="nav-link"
                      id="nav-members-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-members"
                      type="button"
                      role="tab"
                      aria-controls="nav-members"
                      aria-selected="true"
                  >
                      Members
                  </button>
                  <button
                      className="nav-link"
                      id="nav-fellows-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-fellows"
                      type="button"
                      role="tab"
                      aria-controls="nav-fellows"
                      aria-selected="false"
                  >
                      Fellows
                  </button>
                  <button
                      className="nav-link"
                      id="nav-commissions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-commissions"
                      type="button"
                      role="tab"
                      aria-controls="nav-commissions"
                      aria-selected="false"
                  >
                      Commissions
                  </button>
                  <button
                      className="nav-link"
                      id="nav-projects-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-projects"
                      type="button"
                      role="tab"
                      aria-controls="nav-projects"
                      aria-selected="false"
                  >
                      Projects
                  </button>
                  <button
                      className="nav-link"
                      id="nav-events-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-events"
                      type="button"
                      role="tab"
                      aria-controls="nav-events"
                      aria-selected="true"
                  >
                      Events
                  </button>
                  <button
                      className="nav-link"
                      id="nav-campaigns-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-campaigns"
                      type="button"
                      role="tab"
                      aria-controls="nav-campaigns"
                      aria-selected="false"
                  >
                      Campaigns
                  </button>
                  <button
                      className="nav-link"
                      id="nav-meetings-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-meetings"
                      type="button"
                      role="tab"
                      aria-controls="nav-meetings"
                      aria-selected="false"
                  >
                      Meetings
                  </button>
                  <button
                      className="nav-link"
                      id="nav-reports-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-reports"
                      type="button"
                      role="tab"
                      aria-controls="nav-reports"
                      aria-selected="true"
                  >
                      Reports
                  </button>
                  <button
                      className="nav-link"
                      id="nav-requisitions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-requisitions"
                      type="button"
                      role="tab"
                      aria-controls="nav-requisitions"
                      aria-selected="false"
                  >
                      Requisitions
                  </button>
                  <button
                      className="nav-link"
                      id="nav-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-orders"
                      type="button"
                      role="tab"
                      aria-controls="nav-orders"
                      aria-selected="false"
                  >
                      Orders
                  </button>
                  <button
                      className="nav-link"
                      id="nav-invoices-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-invoices"
                      type="button"
                      role="tab"
                      aria-controls="nav-invoices"
                      aria-selected="false"
                  >
                      Invoices
                  </button>
                  <button
                      className="nav-link"
                      id="nav-mailing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mailing"
                      type="button"
                      role="tab"
                      aria-controls="nav-mailing"
                      aria-selected="false"
                  >
                      Mailing
                  </button>
                  <button
                      className="nav-link"
                      id="nav-partners-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-partners"
                      type="button"
                      role="tab"
                      aria-controls="nav-partners"
                      aria-selected="false"
                  >
                      Partners
                  </button>
              </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
              <div
                  className="tab-pane fade show acive"
                  id="nav-members"
                  role="tabpanel"
                  aria-labelledby="nav-members-tab"
              >
                  I'm in Members' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-fellows"
                  role="tabpanel"
                  aria-labelledby="nav-fellows-tab"
              >
                  I'm in Fellows' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-commissions"
                  role="tabpanel"
                  aria-labelledby="nav-commissions-tab"
              >
                  I'm in Commissions' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-projects"
                  role="tabpanel"
                  aria-labelledby="nav-projects-tab"
              >
                  I'm in Projects' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-events"
                  role="tabpanel"
                  aria-labelledby="nav-events-tab"
              >
                  I'm in Events' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-campaigns"
                  role="tabpanel"
                  aria-labelledby="nav-campaigns-tab"
              >
                  I'm in Campaigns' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-meetings"
                  role="tabpanel"
                  aria-labelledby="nav-meetings-tab"
              >
                  I'm in Meetings' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-reports"
                  role="tabpanel"
                  aria-labelledby="nav-reports-tab"
              >
                  I'm in Reports' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-requisitions"
                  role="tabpanel"
                  aria-labelledby="nav-requisitions-tab"
              >
                  I'm in Requisitions' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-invoices"
                  role="tabpanel"
                  aria-labelledby="nav-invoices-tab"
              >
                  I'm in Invoices' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-mailing"
                  role="tabpanel"
                  aria-labelledby="nav-mailing-tab"
              >
                  I'm in Mailing' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-partners"
                  role="tabpanel"
                  aria-labelledby="nav-partners-tab"
              >
                  I'm in Partners' Tab
              </div>
              <div
                  className="tab-pane fade"
                  id="nav-orders"
                  role="tabpanel"
                  aria-labelledby="nav-orders-tab"
              >
                  I'm in Orders' Tab
              </div>
          </div>
      </>
  );
}

export default Dashboard
