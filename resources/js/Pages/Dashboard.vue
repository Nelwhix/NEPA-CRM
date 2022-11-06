<script setup>
    import barSvg from '/public/images/bars.svg'
</script>

<template>
    <Head title="Dashboard" />
    <main class="layout-light side-menu">
    <div class="mobile-search"></div>
    <div class="mobile-author-actions"></div>
    <header class="header-top">
        <nav class="navbar navbar-light">
            <div class="navbar-left">
                <a href="" class="sidebar-toggle">
                    <img class="svg" :src="barSvg" alt="img"></a>
                <a class="navbar-brand" href="#"><img class="svg dark" src="img/custom/greater-favour.png" alt=""><img class="light" src="img/Logo_white.png" alt=""></a>

            </div>
            <!-- ends: navbar-left -->
            <div class="navbar-right">
                <ul class="navbar-right__menu">
                    <li class="nav-search d-none">
                        <a href="#" class="search-toggle">
                            <i class="la la-search"></i>
                            <i class="la la-times"></i>
                        </a>
                        <form action="/" class="search-form-topMenu">
                            <span class="search-icon" data-feather="search"></span>
                            <input class="form-control mr-sm-2 box-shadow-none" type="search" placeholder="Search..." aria-label="Search">
                        </form>
                    </li>

                    <!-- ends: nav-message -->

                    <!-- ends: .nav-settings -->

                    <!-- ends: .nav-flag-select -->
                    <li class="nav-author">
                        <div class="dropdown-custom">
                            <a href="javascript:;" class="nav-item-toggle"><img src="img/author-nav.jpg" alt="" class="rounded-circle"></a>
                            <div class="dropdown-wrapper">
                                <div class="nav-author__info">
                                    <div class="author-img">
                                        <img src="img/author-nav.jpg" alt="" class="rounded-circle">
                                    </div>
                                    <div>
                                        <h6>Abdullah Bin Talha</h6>
                                        <span> Super Admin  </span>

                                    </div>
                                </div>
                                <div class="nav-author__options">
                                    <ul>
                                        <li> <a href="#">
                                            <span class="attr"> <small> Attributes:  </small>
                                                <br>  <strong> Reviewer </strong>  <strong>Teacher </strong>
                                                <strong> Approval </strong>
                                                </span>
                                        </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="user"></span> Profile</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span data-feather="key"></span> Billing</a>
                                        </li>
                                    </ul>
                                    <a href="" class="nav-author__signout">
                                        <span data-feather="log-out"></span> Sign Out</a>
                                </div>
                            </div>
                            <!-- ends: .dropdown-wrapper -->
                        </div>
                    </li>
                    <!-- ends: .nav-author -->
                </ul>
                <!-- ends: .navbar-right__menu -->
                <div class="navbar-right__mobileAction d-md-none">
                    <a href="#" class="btn-search">
                        <span data-feather="search"></span>
                        <span data-feather="x"></span></a>
                    <a href="#" class="btn-author-action">
                        <span data-feather="more-vertical"></span></a>
                </div>
            </div>
            <!-- ends: .navbar-right -->
        </nav>
    </header>
    <main class="main-content">
        <aside class="sidebar">
            <div class="sidebar__menu-group">
                <ul class="sidebar_nav">
                    <li class="menu-title">
                        <span>Main menu</span>
                    </li>
                    <li class="">
                        <a href="dashboard.html" class="active">
                            <span data-feather="home" class="nav-icon"></span>
                            <span class="menu-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="has-child">
                        <a href="#" class="">
                            <span data-feather="layout" class="nav-icon"></span>
                            <span class="menu-text">Subjects</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <a href="classes.html#primary" class="">Primary</a>
                            </li>
                            <li>
                                <a href="classes.html#junior" >Junior Secondary</a>
                            </li>
                            <li>
                                <a href="classes.html#senior" class="">Senior Primary </a>
                            </li>
                        </ul>
                    </li>
                    <li class="has-child">
                        <a href="#" class="">
                            <span data-feather="folder" class="nav-icon"></span>
                            <span class="menu-text"> Users </span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <a href="users-card.html" class="">Students</a>
                            </li>
                            <li>
                                <a href="users-card2.html" class=""> Guardians </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-title m-top-30">
                        <span>Applications</span>
                    </li>

                    <li class="has-child">
                        <a href="#" class="">
                            <span data-feather="message-square" class="nav-icon"></span>
                            <span class="menu-text">Officers</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <a class="" href="view-Officers.html">View</a>
                            </li>
                        </ul>
                    </li>

                    <li class="has-child">
                        <a href="#" class="">
                            <span data-feather="grid" class="nav-icon"></span>
                            <span class="menu-text">Subjects</span>
                            <span class="toggle-icon"></span>
                        </a>
                        <ul>
                            <li>
                                <a href="feather.html" class="">View</a>
                            </li>
                            <li>
                                <a href="fontawesome.html" class="">Add New</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </aside>
        <div class="contents">
            <div class="container-fluid">
                <div class="social-dash-wrap">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="breadcrumb-main">
                                <h4 class="text-capitalize breadcrumb-title">Dashboard</h4>
                                <div class="breadcrumb-action justify-content-center flex-wrap">


                                    <div class="dropdown action-btn">
                                        <div class="atbd-tag-wrap">
                                            <div class="tag-box">
                                                <span><a class="atbd-tag tag-danger tag-transparented" href="#">Verification pending!!! click to complete it</a></span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <!---  Dashboard Cards -->
                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 1 -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>500 </h1>
                                        <p>Subjects</p>

                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/custom/books.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 1 End -->
                        </div>
                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 2 End  -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>12</h1>
                                        <p>Classes</p>

                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/custom/classes.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 2 End  -->
                        </div>


                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 3 -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>2000</h1>
                                        <p>Topics</p>

                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/custom/ques.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 3 End -->
                        </div>

                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 3 -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>3000</h1>
                                        <p><strong> Pending </strong> Questions</p>


                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/pending.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 3 End -->
                        </div>

                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 3 -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>5000</h1>
                                        <p> <strong> Approved </strong> Questions </p>
                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/approved.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 3 End -->
                        </div>

                        <div class="col-xl-4 col-xxl-6 col-ssm-12 mb-30">
                            <!-- Card 3 -->
                            <div class="ap-po-details p-25 radius-xl bg-white d-flex justify-content-between rel-pos">
                                <div>
                                    <div class="overview-content">
                                        <h1>5000</h1>
                                        <p> <strong> Total</strong> Questions </p>

                                    </div>
                                </div>
                                <div class="side-icon2">
                                    <img src="img/custom/ques.gif" width="80">
                                </div>
                            </div>
                            <!-- Card 3 End -->
                        </div>


                        <div class="col-xl-6 col-lg-12 mb-30">
                            <div class="card broder-0 card-height">
                                <div class="card-header">
                                    <h6>Total cash</h6>
                                    <div class="card-extra">
                                        <ul class="card-tab-links mr-3 nav-tabs nav">
                                            <li>
                                                <a href="#tl_revenue-week" data-toggle="tab" id="tl_revenue-week-tab" role="tab" area-controls="tl_revenue" aria-selected="false">Week</a>
                                            </li>
                                            <li>
                                                <a href="#tl_revenue-month" data-toggle="tab" id="tl_revenue-month-tab" role="tab" area-controls="tl_revenue" aria-selected="false">Month</a>
                                            </li>
                                            <li>
                                                <a class="active" href="#tl_revenue-year" data-toggle="tab" id="tl_revenue-year-tab" role="tab" area-controls="tl_revenue" aria-selected="true">Year</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown dropleft">
                                            <a href="#" role="button" id="revenue" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span data-feather="more-horizontal"></span>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="revenue">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ends: .card-header -->
                                <div class="card-body pt-0">
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="tl_revenue-week" role="tabpanel" aria-labelledby="tl_revenue-week-tab">
                                            <div class="revenue-labels">
                                                <div>
                                                    <strong class="text-primary">₦72,848</strong>
                                                    <span>Current Balance</span>
                                                </div>
                                                <div>
                                                    <strong>₦52,458</strong>
                                                    <span>Cashout</span>
                                                </div>
                                            </div>
                                            <!-- ends: .performance-stats -->
                                            <div class="wp-chart">
                                                <div class="parentContainer">
                                                    <div>
                                                        <canvas id="myChart6W"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="tl_revenue-month" role="tabpanel" aria-labelledby="tl_revenue-month-tab">
                                            <div class="revenue-labels">
                                                <div>
                                                    <strong class="text-primary">₦72,848</strong>
                                                    <span>Current Balance</span>
                                                </div>
                                                <div>
                                                    <strong>₦52,458</strong>
                                                    <span>Cashout</span>
                                                </div>
                                            </div>
                                            <!-- ends: .performance-stats -->
                                            <div class="wp-chart">
                                                <div class="parentContainer">
                                                    <div>
                                                        <canvas id="myChart6M"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade active show" id="tl_revenue-year" role="tabpanel" aria-labelledby="tl_revenue-year-tab">
                                            <div class="revenue-labels">
                                                <div>
                                                    <strong class="text-primary">₦72,848</strong>
                                                    <span>Current Balance</span>
                                                </div>
                                                <div>
                                                    <strong>₦52,458</strong>
                                                    <span>Cashout</span>
                                                </div>
                                            </div>
                                            <!-- ends: .performance-stats -->
                                            <div class="wp-chart">
                                                <div class="parentContainer">
                                                    <div>
                                                        <canvas id="myChart6"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ends: .card-body -->
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-12 mb-30">
                            <div class="card border-0 card-height">
                                <div class="card-header">
                                    <h6>Student score board</h6>
                                    <div class="card-extra">
                                        <ul class="card-tab-links mr-3 nav-tabs nav">
                                            <li>
                                                <a href="#s_revenue-today" class="active" data-toggle="tab" id="s_revenue-today-tab" role="tab" area-controls="s_revenue-table" aria-selected="true">Today</a>
                                            </li>
                                            <li>
                                                <a href="#s_revenue-week" data-toggle="tab" id="s_revenue-week-tab" role="tab" area-controls="s_revenue-table" aria-selected="false">Week</a>
                                            </li>
                                            <li>
                                                <a href="#s_revenue-month" data-toggle="tab" id="s_revenue-month-tab" role="tab" area-controls="s_revenue-table" aria-selected="false">Month</a>
                                            </li>
                                            <li>
                                                <a href="#s_revenue-year" data-toggle="tab" id="s_revenue-year-tab" role="tab" area-controls="s_revenue-table" aria-selected="false">Year</a>
                                            </li>
                                        </ul>
                                        <div class="dropdown dropleft">
                                            <a href="#" role="button" id="action" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span data-feather="more-horizontal"></span>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="action">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="tab-content">
                                        <div class="tab-pane fade active show" id="s_revenue-today" role="tabpanel" aria-labelledby="s_revenue-today-tab">
                                            <div class="table-responsive table-revenue">
                                                <table class="table table--default">
                                                    <thead>
                                                    <tr>
                                                        <th>Name </th>
                                                        <th>Subjects</th>
                                                        <th>Class</th>
                                                        <th>Score</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Ade Peterson</td>
                                                        <td>Biology</td>
                                                        <td>SS 1</td>
                                                        <td>80%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ugo Emeka</td>
                                                        <td>Basic Science</td>
                                                        <td>Basic 7</td>
                                                        <td>90%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Uche Samuel</td>
                                                        <td>Chemistry</td>
                                                        <td>SS 3</td>
                                                        <td>83%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dele Sam</td>
                                                        <td>English</td>
                                                        <td>Basic 6</td>
                                                        <td> 76%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Favour Nwanchukwu</td>
                                                        <td>Mathematics</td>
                                                        <td>SS 2</td>
                                                        <td>56%</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--  Dashboard Cards end -->


                    </div>
                </div>
            </div>
        </div>
        <footer class="footer-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="footer-copyright">
                            <p>2020 @<a href="#">Greaterfavour</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="footer-menu text-right">
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Team</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <!-- ends: .Footer Menu -->
                    </div>
                </div>
            </div>
        </footer>
    </main>
    <div class="overlay-dark-sidebar"></div>
    <div class="customizer-overlay"></div>
    <!-- ends: .atbd-page-content -->
    <div class="modal-basic modal fade show" id="modal-basicOld" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-md modal-info" role="document">
            <div class="modal-content">
                <div class="modal-body">



                    <div class="modal-info-body d-flex">
                        <div class="modal-info-text text-center">

                            <h4> ✌🏽 Hi <span class="apptxt">  Jadesola Chukwuma </span> </h4>
                            <div class="text-center">
                                <img src="img/custom/new-book.gif" width="200">
                            </div>
                            <br>
                            <h6> Here are some verification you need to fulfill to enable you have access to the amazing features  </h6>
                            <p>Some descriptions</p>
                            <div class="row btn-auto">
                                <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal">I am not ready</button>
                                <button type="button" class="btn btn-info btn-sm" onclick="window.location.href='verifyme.html';" data-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div> <br>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal">I am not ready</button>
                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">Ok</button>
                </div>-->
            </div>
        </div>
    </div>
    <!-- ends: .modal-Basic -->

    <div class="modal-basic modal fade show" id="modal-basic" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-info" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Subject Interest</h6>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                </div>
                <div class="modal-body">
                    <div class="modal-info-body">
                        <div class="modal-info-text text-center">

                            <h4> <i class="las la-book"></i> Hi <span class="apptxt">  Jadesola Chukwuma </span> </h4>
                            <h5 class="mb-20"> Please select your subject of interest </h5>
                            <p class="mb-20"> <span class="apptxt">2</span> Selected </p>

                            <div class="grid grid-h scrollbar" id="style-default">
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">English</h2>
                                        </header>
                                    </div>
                                </label>
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/mathematics.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Mathematics</h2>
                                        </header>
                                    </div>
                                </label>
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/physics.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Physics</h2>
                                        </header>
                                    </div>
                                </label>
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/chemistry.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Chemistry</h2>
                                        </header>
                                    </div>
                                </label>
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Biology</h2>
                                        </header>
                                    </div>
                                </label>
                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Civil Education</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/economics.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Economics</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/Geography.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Geography</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/basic-science.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Basic Science</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Literature</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Government</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Financial Accounts</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">C.R.S</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">I.R.S</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Data Processing/Catering Craft</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Book Keeping Marketing, Insurance</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Futhermathematics</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">C.R.S</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">French</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">P.H.E</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Agriculture</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Provocational Studies</h2>
                                        </header>
                                    </div>
                                </label>



                                <label class="cards">
                                    <input class="card__input" type="checkbox"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="img/custom/subjects/placeholder.png"/><span class="card__body-cover-checkbox">
                                      <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                      </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Basic Technology</h2>
                                        </header>
                                    </div>
                                </label>

                                <label class="cards">
                                    <input class="card__input" type="checkbox" disabled="disabled"/>
                                    <div class="card__body">
                                        <div class="card__body-cover"><img class="card__body-cover-image" src="https://i.ibb.co/WDwmPy5/other.png"/><span class="card__body-cover-checkbox">
                                    <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span></div>
                                        <header class="card__body-header">
                                            <h2 class="card__body-header-title">Other</h2>
                                        </header>
                                    </div>
                                </label>
                            </div>

                            <div class="row btn-auto mx-auto">
                                <button class="btn btn-primary btn-default btn-squared no-marg-right ma-auto">Done
                                </button>
                            </div>
                        </div>
                    </div> <br>
                </div>
                <!--<div class="modal-footer">
                    <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal">I am not ready</button>
                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">Ok</button>
                </div>-->
            </div>
        </div>
    </div>

    <div class="modal-info-confirmed modal fade show" id="modal-info-confirmed" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-info" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-info-body d-flex">
                        <div class="modal-info-icon warning">
                            <span data-feather="info"></span>
                        </div>
                        <div class="modal-info-text">
                            <h6>Do you Want to delete these items?</h6>
                            <p>Some descriptions</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light btn-outlined btn-sm" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>
