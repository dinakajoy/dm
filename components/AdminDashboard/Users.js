import React from 'react';
import Link from 'next/link';

const Users = () => {
  return (
    // <body class="fixed-nav sticky-footer bg-dark" id="page-top">
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <a class="navbar-brand" href="/admin">Admin Dashboard</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
              <a class="nav-link" href="/">
                <i class="fa fa-fw fa-dashboard"></i>
                <span class="nav-link-text">Home</span>
              </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
              <a class="nav-link" href="charts.html">
                <i class="fa fa-fw fa-area-chart"></i>
                <span class="nav-link-text">Users</span>
              </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
              <a class="nav-link" href="tables.html">
                <i class="fa fa-fw fa-table"></i>
                <span class="nav-link-text">Instructors</span>
              </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
              <a class="nav-link" href="tables.html">
                <i class="fa fa-fw fa-table"></i>
                <span class="nav-link-text">Courses Categories</span>
              </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
              <a class="nav-link" href="tables.html">
                <i class="fa fa-fw fa-table"></i>
                <span class="nav-link-text">Courses</span>
              </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
              <a class="nav-link" href="tables.html">
                <i class="fa fa-fw fa-table"></i>
                <span class="nav-link-text">Posts</span>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav sidenav-toggler">
            <li class="nav-item">
              <a class="nav-link text-center" id="sidenavToggler">
                <i class="fa fa-fw fa-angle-left"></i>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-bell"></i>
                <span class="d-lg-none">Alerts
                  <span class="badge badge-pill badge-warning">6 New</span>
                </span>
                <span class="indicator text-warning d-none d-lg-block">
                  <i class="fa fa-fw fa-circle"></i>
                </span>
              </a>
              <div class="dropdown-menu" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">New Alerts:</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-success">
                    <strong>
                      <i class="fa fa-long-arrow-up fa-fw"></i>Status Update
                    </strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-danger">
                    <strong>
                      <i class="fa fa-long-arrow-down fa-fw"></i>Status Update
                    </strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-success">
                    <strong>
                      <i class="fa fa-long-arrow-up fa-fw"></i>Status Update
                    </strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                <i class="fa fa-fw fa-sign-out"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="content-wrapper">
        <div class="container-fluid">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Welcome Admin</a>
            </li>
          </ol>

          <div class="row">
            <div class="col-lg-12">
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fa fa-table"></i> Data Table Example</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr>
                          <td>Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                        <tr>
                          <td>Angelica Ramos</td>
                          <td>Chief Executive Officer (CEO)</td>
                          <td>London</td>
                          <td>47</td>
                          <td>2009/10/09</td>
                          <td>$1,200,000</td>
                        </tr>
                        <tr>
                          <td>Gavin Joyce</td>
                          <td>Developer</td>
                          <td>Edinburgh</td>
                          <td>42</td>
                          <td>2010/12/22</td>
                          <td>$92,575</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
            </div>
    
            <footer class="sticky-footer">
              <div class="container">
                <div class="text-center">
                  <small>Copyright © Your Website 2018</small>
                </div>
              </div>
            </footer>

            <a class="scroll-to-top rounded" href="#page-top">
              <i class="fa fa-angle-up"></i>
            </a>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </body> */}
    </>
    );
  }

export default Users;
