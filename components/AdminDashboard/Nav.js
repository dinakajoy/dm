import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <Link href="/admin-dashboard" className="navbar-brand">
          <a className="navbar-brand">Welcome Admin!</a>
        </Link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
              <Link href="/admin-dashboard">
                <a className="nav-link"><i class="fa fa-fw fa-dashboard"></i><span class="nav-link-text">Dashboard</span></a>
              </Link>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
              <Link href="/admin-dashboard/users">
                <a className="nav-link"><i class="fa fa-users"></i><span class="nav-link-text">Users</span></a>
              </Link>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Instructors">
              <Link href="/admin-dashboard/instructors">
                <a className="nav-link"><i class="fa fa-user-plus"></i><span class="nav-link-text">Instructors</span></a>
              </Link>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Courses Categories">
              <Link href="/admin-dashboard/courses-categories">
                <a className="nav-link"><i class="fa fa-graduation-cap"></i><span class="nav-link-text">Courses Categories</span></a>
              </Link>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Courses">
              <Link href="/admin-dashboard/courses">
                <a className="nav-link"><i class="bx bx-chalkboard"></i><span class="nav-link-text">Courses</span></a>
              </Link>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Posts">
              <Link href="/admin-dashboard/posts">
                <a className="nav-link"><i class="fa fa-fw fa-list"></i><span class="nav-link-text">Posts</span></a>
              </Link>
            </li>
          </ul>

          <ul class="navbar-nav sidenav-toggler">
            <li class="nav-item">
              <a class="nav-link text-center" id="sidenavToggler">
                <i class="fa fa-fw fa-angle-left" style={{color:'#212529'}}></i>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link"><i class="fa fa-home" style={{fontSize:'20px'}}></i></a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link"><i class="fa fa-user-circle-o" style={{fontSize:'20px'}}></i></a>
              </Link>
            </li> 
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                <i class="fa fa-fw fa-sign-out"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

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
              <Link href="/signin">
                <a className="btn btn-primary">Logout</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Nav;