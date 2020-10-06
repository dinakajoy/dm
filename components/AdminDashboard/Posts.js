import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';

const Posts = () => {
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
            <li class="breadcrumb-item active">Posts</li>
          </ol>

          <div class="row mt-5">
            <div class="col-lg-6">
              <div class="card-header">
                <i class="fa fa-table"></i> All Posts
              </div>
            </div>
            <div class="col-lg-6">
              <div class="float-right">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Add New Post
                </button>
              </div>

              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">New Post Form</h5>
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
                          <th>Topic</th>
                          <th>Author</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Topic</th>
                          <th>Author</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>Topic One</td>
                          <td>Tiger Jane</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-success" data-placement="top" title="View Post" data-toggle="modal" data-target="#exampleModalCenter">
                              <span class="fa fa-eye"></span>
                            </a>
                          </td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Post" onclick="return confirm('Are you sure?')">
                              <span class="fa fa-trash"></span>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Topic Two</td>
                          <td>Tiger Jane</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-success" data-placement="top" title="View Post" data-toggle="modal" data-target="#exampleModalCenter">
                              <span class="fa fa-eye"></span>
                            </a>
                          </td>
                          <td>
                            <a href="#" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete Post" onclick="return confirm('Are you sure?')">
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
                  <h5 class="modal-title" id="exampleModalLongTitle">Post's Details</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                Post's complete data
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

export default Posts;