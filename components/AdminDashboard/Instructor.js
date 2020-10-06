import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';

const Instructors = () => {
  return (
    <>
      <Nav />

      <div class="content-wrapper" style={{marginTop:'80px'}}>
        <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link href="/admin-dashboard">
                <a>Welcome Admin</a>
              </Link>
            </li>
            <li class="breadcrumb-item active">Instructors</li>
          </ol>

          <div class="row mt-5">
            <div class="col-lg-6">
              <div class="card-header">
                <i class="fa fa-table"></i> All Registered Instructors
              </div>
            </div>
            <div class="col-lg-6">
              <div class="float-right">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Add Instructor
                </button>
              </div>

              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Instructor Form</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Form
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Experience</th>
                          <th>Skills</th>
                          <th>Date Added</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Experience</th>
                          <th>Skills</th>
                          <th>Date Added</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Tiger Jane</td>
                          <td>5 Years</td>
                          <td>Web Development</td>
                          <td>2011/04/25</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-success" data-placement="top" title="View Instructor" data-toggle="modal" data-target="#exampleModalCenter">
                              <span class="fa fa-eye"></span>
                            </a>
                          </td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Instructor" onclick="return confirm('Are you sure?')">
                              <span class="fa fa-trash"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Tiger Jane</td>
                          <td>5 Years</td>
                          <td>Web Development</td>
                          <td>2011/04/25</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-success" data-placement="top" title="View Instructor" data-toggle="modal" data-target="#exampleModalCenter">
                              <span class="fa fa-eye"></span>
                            </a>
                          </td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Instructor" onclick="return confirm('Are you sure?')">
                              <span class="fa fa-trash"></span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Instructor's Details</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Instructor's complete data
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Instructors;
