import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';

const AdminDashboard = () => {
  return (
    <>
      <Nav />

      <div class="content-wrapper" style={{marginTop:'80px'}}>
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link href="/admin-dashboard">
                <a>Welcome Admin</a>
              </Link>
            </li>
          </ol>

          <div class="row mt-5">
            <div class="col-xs-12 col-sm-6 mb-3">
              <div class="card text-white bg-primary o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-users"></i>
                  </div>
                  <div class="mr-5">26 Users!</div>
                </div>
                <Link href="/admin-dashboard/users">
                  <a class="card-footer text-white clearfix small z-1">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 mb-3">
              <div class="card text-white bg-warning o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-fw fa-list"></i>
                  </div>
                  <div class="mr-5">11 Posts!</div>
                </div>
                <Link href="/admin-dashboard/posts">
                  <a class="card-footer text-white clearfix small z-1">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 mb-3">
              <div class="card text-white bg-success o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class="fa fa-graduation-cap"></i>
                  </div>
                  <div class="mr-5">123 Courses!</div>
                </div>
                <Link href="/admin-dashboard/courses">
                  <a class="card-footer text-white clearfix small z-1">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 mb-3">
              <div class="card text-white bg-danger o-hidden h-100">
                <div class="card-body">
                  <div class="card-body-icon">
                    <i class='bx bx-chalkboard'></i>
                  </div>
                  <div class="mr-5">13 Instructors!</div>
                </div>
                <Link href="/admin-dashboard/instructors">
                  <a class="card-footer text-white clearfix small z-1">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                      <i class="fa fa-angle-right"></i>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div class="col-xs-12 mt-5" style={{margin:'auto'}}>
              <img src="/img/chart.png" alt="" />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
    );
  }

export default AdminDashboard;
