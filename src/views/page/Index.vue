<template>
    <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card-transparent card-block card-stretch card-height mb-3">
                        <div class="d-flex justify-content-between">
                            <div class="select-dropdown input-prepend input-append">
                                <div class="btn-group">
                                    <label data-toggle="dropdown">
                                        <div class="dropdown-toggle search-query">My Drive
                                            <i class="las la-angle-down ml-3"></i>
                                        </div>
                                        <span class="search-replace">
                        </span>
                                        <span class="caret">
                          <!--icon-->
                        </span>
                                    </label>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <div class="item">
                                                <i class="ri-folder-add-line pr-3">
                                                </i>New Folder</div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <i class="ri-file-upload-line pr-3">
                                                </i>Upload Files</div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <i class="ri-folder-upload-line pr-3">
                                                </i>Upload Folders</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="dashboard1-dropdown d-flex align-items-center">
                                <div class="dashboard1-info">
                                    <a href="#calander" class="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i class="ri-arrow-down-s-line">
                                        </i>
                                    </a>
                                    <ul id="calander" class="iq-dropdown collapse list-inline m-0 p-0 mt-2">
                                        <li class="mb-2">
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="Calander">
                                                <i class="las la-calendar iq-arrow-left">
                                                </i>
                                            </a>
                                        </li>
                                        <li class="mb-2">
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="Keep">
                                                <i class="las la-lightbulb iq-arrow-left">
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tasks">
                                                <i class="las la-tasks iq-arrow-left">
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <!--          <div class="card card-block card-stretch card-height iq-welcome" style="background: url('assets/images/layouts/mydrive/background.png') no-repeat scroll right center;-->
                    <!--              background-color: #ffffff;-->
                    <!--              background-size: contain;-->
                    <!--              ">-->
                    <div class="card card-block card-stretch card-height iq-welcome" style="background-color: #ffffff;background-size: contain;">
                        <div class="card-body property2-content">
                            <div class="d-flex flex-wrap align-items-center">
                                <div class="col-lg-6 col-sm-6 p-0">
                                    <h3 class="mb-3">Welcome Penny</h3>
                                    <p class="mb-5">You have 32 new notifications and 23 unread messages to reply</p>
                                    <a href="#">Try Now
                                        <i class="las la-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Quick Access</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-inline p-0 mb-0 row align-items-center">
                                <li class="col-lg-6 col-sm-6 mb-3 mb-sm-0">
                                    <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="Product-planning.pdf" style="cursor: pointer;
                      " class="p-2 text-center border rounded">
                                        <div>
                                            <img src="../../assets/images/layouts/mydrive/folder-1.png" class="img-fluid mb-1" alt="image1">
                                        </div>
                                        <p class="mb-0">Planning</p>
                                    </div>
                                </li>
                                <li class="col-lg-6 col-sm-6">
                                    <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="Wireframe.docx" style="cursor: pointer;
                      " class="p-2 text-center border rounded">
                                        <div>
                                            <img src="../../assets/images/layouts/mydrive/folder-2.png" class="img-fluid mb-1" alt="image2">
                                        </div>
                                        <p class="mb-0">Wireframe</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent ">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Documents</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <a href="page-folders.html" class=" view-more">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" data-title="Terms.pdf" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay">
                                    </div>
                                    <img src="../../assets/images/layouts/page-1/pdf.png" class="img-fluid" alt="image1">
                                </div>
                                <h6>Terms.pdf</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" data-title="New-one.docx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay">
                                    </div>
                                    <img src="../../assets/images/layouts/page-1/doc.png" class="img-fluid" alt="image1">
                                </div>
                                <h6>New-one.docx</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" data-title="Woo-box.xlsx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.xlsx" data-toggle="modal" data-target="#exampleModal">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay">
                                    </div>
                                    <img src="../../assets/images/layouts/page-1/xlsx.png" class="img-fluid" alt="image1">
                                </div>
                                <h6>Woo-box.xlsx</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb doc-text">
                            <a href="#" data-title="IOS-content.pptx" data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pptx" data-toggle="modal" data-target="#exampleModal">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay">
                                    </div>
                                    <img src="../../assets/images/layouts/page-1/ppt.png" class="img-fluid" alt="image1">
                                </div>
                                <h6>IOS-content.pptx</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Folders</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="dropdown">
                      <span class="dropdown-toggle dropdown-bg btn bg-white" id="dropdownMenuButton1" data-toggle="dropdown">Name
                        <i class="ri-arrow-down-s-line ml-1"></i>
                      </span>
                                    <div class="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="#">Last modified</a>
                                        <a class="dropdown-item" href="#">Last modifiedby me</a>
                                        <a class="dropdown-item" href="#">Last opened by me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <a href="page-alexa.html" class="folder">
                                    <div class="icon-small bg-danger rounded mb-4">
                                        <i class="ri-file-copy-line">
                                        </i>
                                    </div>
                                </a>
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                        <span class="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown">
                          <i class="ri-more-2-fill">
                          </i>
                        </span>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-eye-fill mr-2">
                                                </i>View</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-delete-bin-6-fill mr-2">
                                                </i>Delete</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-pencil-fill mr-2">
                                                </i>Edit</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-printer-fill mr-2">
                                                </i>Print</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-file-download-fill mr-2">
                                                </i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="page-alexa.html" class="folder">
                                <h5 class="mb-2">Alexa Workshop</h5>
                                <p class="mb-2">
                                    <i class="lar la-clock text-danger mr-2 font-size-20">
                                    </i>10 Dec,2020</p>
                                <p class="mb-0">
                                    <i class="las la-file-alt text-danger mr-2 font-size-20">
                                    </i>08 Files</p>
                            </a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <a href="page-android.html" class="folder">
                                    <div class="icon-small bg-primary rounded mb-4">
                                        <i class="ri-file-copy-line">
                                        </i>
                                    </div>
                                </a>
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                        <span class="dropdown-toggle" id="dropdownMenuButton3" data-toggle="dropdown">
                          <i class="ri-more-2-fill">
                          </i>
                        </span>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton3">
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-eye-fill mr-2">
                                                </i>View</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-delete-bin-6-fill mr-2">
                                                </i>Delete</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-pencil-fill mr-2">
                                                </i>Edit</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-printer-fill mr-2">
                                                </i>Print</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-file-download-fill mr-2">
                                                </i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="page-android.html" class="folder">
                                <h5 class="mb-2">Android</h5>
                                <p class="mb-2">
                                    <i class="lar la-clock text-primary mr-2 font-size-20">
                                    </i>09 Dec,2020</p>
                                <p class="mb-0">
                                    <i class="las la-file-alt text-primary mr-2 font-size-20">
                                    </i>08 Files</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <a href="page-brightspot.html" class="folder">
                                    <div class="icon-small bg-info rounded mb-4">
                                        <i class="ri-file-copy-line">
                                        </i>
                                    </div>
                                </a>
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                        <span class="dropdown-toggle" id="dropdownMenuButton4" data-toggle="dropdown">
                          <i class="ri-more-2-fill">
                          </i>
                        </span>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-eye-fill mr-2">
                                                </i>View</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-delete-bin-6-fill mr-2">
                                                </i>Delete</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-pencil-fill mr-2">
                                                </i>Edit</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-printer-fill mr-2">
                                                </i>Print</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-file-download-fill mr-2">
                                                </i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="page-brightspot.html" class="folder">
                                <h5 class="mb-2">Brightspot</h5>
                                <p class="mb-2">
                                    <i class="lar la-clock text-info mr-2 font-size-20">
                                    </i>07 Dec,2020</p>
                                <p class="mb-0">
                                    <i class="las la-file-alt text-info mr-2 font-size-20">
                                    </i>08 Files</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <a href="page-ionic.html" class="folder">
                                    <div class="icon-small bg-success rounded mb-4">
                                        <i class="ri-file-copy-line">
                                        </i>
                                    </div>
                                </a>
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                        <span class="dropdown-toggle" id="dropdownMenuButton5" data-toggle="dropdown">
                          <i class="ri-more-2-fill">
                          </i>
                        </span>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-eye-fill mr-2">
                                                </i>View</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-delete-bin-6-fill mr-2">
                                                </i>Delete</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-pencil-fill mr-2">
                                                </i>Edit</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-printer-fill mr-2">
                                                </i>Print</a>
                                            <a class="dropdown-item" href="#">
                                                <i class="ri-file-download-fill mr-2">
                                                </i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="page-ionic.html" class="folder">
                                <h5 class="mb-2">Ionic Chat App</h5>
                                <p class="mb-2">
                                    <i class="lar la-clock text-success mr-2 font-size-20">
                                    </i>06 Dec,2020</p>
                                <p class="mb-0">
                                    <i class="las la-file-alt text-success mr-2 font-size-20">
                                    </i>08 Files</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-xl-8">
                    <div class="card card-block card-stretch card-height files-table">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Files</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <a href="page-files.html" class=" view-more">View All</a>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="table-responsive">
                                <table class="table mb-0 table-borderless tbl-server-info">
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Members</th>
                                        <th scope="col">Last Edit</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-danger rounded mr-3">
                                                    <i class="ri-file-excel-line">
                                                    </i>
                                                </div>
                                                <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="Weekly-report.pdf" style="cursor: pointer;
                              ">Weekly-report.pdf</div>
                                            </div>
                                        </td>
                                        <td>Me</td>
                                        <td>jan 21,2020 me</td>
                                        <td>02 MB</td>
                                        <td>
                                            <div class="dropdown">
                              <span class="dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown">
                                <i class="ri-more-fill">
                                </i>
                              </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-eye-fill mr-2">
                                                        </i>View</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-delete-bin-6-fill mr-2">
                                                        </i>Delete</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-pencil-fill mr-2">
                                                        </i>Edit</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-printer-fill mr-2">
                                                        </i>Print</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-file-download-fill mr-2">
                                                        </i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="active">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-primary rounded mr-3">
                                                    <i class="ri-file-download-line">
                                                    </i>
                                                </div>
                                                <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pdf" data-toggle="modal" data-target="#exampleModal" data-title="VueJs.pdf" style="cursor: pointer;
                              ">VueJs.pdf</div>
                                            </div>
                                        </td>
                                        <td>Poul Molive</td>
                                        <td>jan 25,2020 Poul Molive</td>
                                        <td>64 MB</td>
                                        <td>
                                            <div class="dropdown">
                              <span class="dropdown-toggle" id="dropdownMenuButton7" data-toggle="dropdown">
                                <i class="ri-more-fill">
                                </i>
                              </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-eye-fill mr-2">
                                                        </i>View</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-delete-bin-6-fill mr-2">
                                                        </i>Delete</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-pencil-fill mr-2">
                                                        </i>Edit</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-printer-fill mr-2">
                                                        </i>Print</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-file-download-fill mr-2">
                                                        </i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-info rounded mr-3">
                                                    <i class="ri-file-excel-line">
                                                    </i>
                                                </div>
                                                <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.docx" data-toggle="modal" data-target="#exampleModal" data-title="Milestone.docx" style="cursor: pointer;
                              ">Milestone.docx</div>
                                            </div>
                                        </td>
                                        <td>Me</td>
                                        <td>Mar 30,2020 Gail Forcewind</td>
                                        <td>30 MB</td>
                                        <td>
                                            <div class="dropdown">
                              <span class="dropdown-toggle" id="dropdownMenuButton8" data-toggle="dropdown">
                                <i class="ri-more-fill">
                                </i>
                              </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-eye-fill mr-2">
                                                        </i>View</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-delete-bin-6-fill mr-2">
                                                        </i>Delete</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-pencil-fill mr-2">
                                                        </i>Edit</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-printer-fill mr-2">
                                                        </i>Print</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-file-download-fill mr-2">
                                                        </i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-success rounded mr-3">
                                                    <i class="ri-file-excel-line">
                                                    </i>
                                                </div>
                                                <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.xlsx" data-toggle="modal" data-target="#exampleModal" data-title="Training center.xlsx" style="cursor: pointer;
                              ">Training center.xlsx</div>
                                            </div>
                                        </td>
                                        <td>Me</td>
                                        <td>Mar 30,2020 Gail Forcewind</td>
                                        <td>10 MB</td>
                                        <td>
                                            <div class="dropdown">
                              <span class="dropdown-toggle" id="dropdownMenuButton9" data-toggle="dropdown">
                                <i class="ri-more-fill">
                                </i>
                              </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton9">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-eye-fill mr-2">
                                                        </i>View</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-delete-bin-6-fill mr-2">
                                                        </i>Delete</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-pencil-fill mr-2">
                                                        </i>Edit</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-printer-fill mr-2">
                                                        </i>Print</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-file-download-fill mr-2">
                                                        </i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="icon-small bg-warning rounded mr-3">
                                                    <i class="ri-file-excel-line">
                                                    </i>
                                                </div>
                                                <div data-load-file="file" data-load-target="#resolte-contaniner" data-url="../../assets/vendor/doc-viewer/files/demo.pptx" data-toggle="modal" data-target="#exampleModal" data-title="Flavour.pptx" style="cursor: pointer;
                              ">Flavour.pptx</div>
                                            </div>
                                        </td>
                                        <td>Me</td>
                                        <td>Mar 30,2020 Gail Forcewind</td>
                                        <td>10 MB</td>
                                        <td>
                                            <div class="dropdown">
                              <span class="dropdown-toggle" id="dropdownMenuButton9" data-toggle="dropdown">
                                <i class="ri-more-fill">
                                </i>
                              </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton9">
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-eye-fill mr-2">
                                                        </i>View</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-delete-bin-6-fill mr-2">
                                                        </i>Delete</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-pencil-fill mr-2">
                                                        </i>Edit</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-printer-fill mr-2">
                                                        </i>Print</a>
                                                    <a class="dropdown-item" href="#">
                                                        <i class="ri-file-download-fill mr-2">
                                                        </i>Download</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-block card-stretch card-height ">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Statistic</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="layout-1-chart" style="min-height: 220px; position: relative;"><div dir="ltr" class="resize-sensor" style="pointer-events: none; position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div class="resize-sensor-expand" style="pointer-events: none; position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 402px; height: 290px;"></div></div><div class="resize-sensor-shrink" style="pointer-events: none; position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 200%; height: 200%;"></div></div></div><div style="width: 100%; height: 100%; position: relative; left: 0.328125px;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="group" style="width: 100%; height: 100%; overflow: visible;"><desc>JavaScript chart by amCharts</desc><defs><clipPath id="id-51"><rect width="392" height="280"></rect></clipPath><linearGradient id="gradient-id-74" x1="1%" x2="99%" y1="59%" y2="41%"><stop stop-color="#474758" offset="0"></stop><stop stop-color="#474758" stop-opacity="1" offset="0.75"></stop><stop stop-color="#3cabff" stop-opacity="1" offset="0.755"></stop></linearGradient><filter id="filter-id-83" width="200%" height="200%" x="-50%" y="-50%"></filter><clipPath id="id-134"><path d=" M-118.736,0  L-144.8,0  a144.8,144.8,0,0,1,289.6,0 L118.736,0  a118.736,118.736,0,0,0,-237.472,0 L-118.736,0 " r="0"></path></clipPath><filter id="filter-id-56" width="200%" height="200%" x="-50%" y="-50%"><feGaussianBlur result="blurOut" in="SourceGraphic" stdDeviation="1.5"></feGaussianBlur><feOffset result="offsetBlur" dx="1" dy="1"></feOffset><feFlood flood-color="#000000" flood-opacity="0.5"></feFlood><feComposite in2="offsetBlur" operator="in"></feComposite><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="filter-id-71" width="120%" height="120%" x="-10%" y="-10%"><feColorMatrix type="saturate" values="0"></feColorMatrix></filter></defs><g><g fill="#ffffff" fill-opacity="0"><rect width="392" height="280"></rect></g><g><g role="region" clip-path="url(&quot;#id-51&quot;)" opacity="1" aria-describedby="id-22-description"><g transform="translate(15,15)"><g><g><g><g><g><g><g transform="translate(0,0)"><g fill="#ffffff" fill-opacity="0" transform="translate(0,0)"><rect width="362" height="250"></rect></g><g><g transform="translate(181,197.4)"><g><g opacity="0"></g><g><g></g></g><g aria-hidden="true"><g><g><g><g><g><g fill="#8f93f6" fill-opacity="1" style="pointer-events: none;"><path d=" M-118.736,0  L-144.8,0  a144.8,144.8,0,0,1,2.5648,-27.1328 L-116.6329,-22.2489  a118.736,118.736,0,0,0,-2.1031,22.2489 L-118.736,0 "></path></g><g stroke="#000000" stroke-opacity="0.15" fill="none"><path d=" M-118.736,0  L-144.8,0 "></path></g><g fill="#fafafa" fill-opacity="1" style="pointer-events: none;"><path d=" M-116.6329,-22.2489  L-142.2352,-27.1328  a144.8,144.8,0,0,1,287.0352,27.1328 L118.736,0  a118.736,118.736,0,0,0,-235.3689,-22.2489 L-116.6329,-22.2489 "></path></g><g stroke="#000000" stroke-opacity="0.15" fill="none"><path d=" M-116.6329,-22.2489  L-142.2352,-27.1328 "></path></g><g fill-opacity="0" stroke-opacity="0" stroke="#000000" stroke-width="1"><path d=" M-144.8,0  L-149.8,0 "></path></g><g fill-opacity="0" stroke-opacity="0" stroke="#000000" stroke-width="1"><path d=" M-142.2352,-27.1328  L-147.1466,-28.0697 "></path></g></g></g><g fill="#000000" fill-opacity="0" opacity="0" stroke-opacity="0" style="pointer-events: none;" display="none" transform="translate(-163.3,0)"><g transform="translate(-3.5,-11.5)" style="user-select: none;"><text x="0" y="23" dy="-6.21"><tspan>L</tspan></text></g></g><g fill="#000000" transform="translate(-159.8,0)"><g display="none"></g></g><g fill="#000000" transform="translate(-156.97,-29.944)"><g display="none"></g></g><g fill="#000000" stroke="#000000" transform="translate(0,0) rotate(190.8)"><g><g display="none"><circle></circle></g><g transform="translate(28.96,-5)"><path d=" M0,0  L115.84,4.5  L115.84,5.5  L0,10 "></path></g></g></g><g><g></g></g></g></g><g fill="#000000"><g display="none"></g></g><g stroke="#000000" stroke-opacity="0.15" fill="none"><path transform="translate(-0.5,-0.5)"></path></g><g stroke="#000000" stroke-opacity="0" fill="none" style="pointer-events: none;"><path d=" M-144.8,0  a144.8,144.8,0,0,1,289.6,0" transform="translate(-0.5,-0.5)"></path></g></g></g><g fill="#000000" font-size="0"><g style="user-select: none;"><text x="0" y="0" dy="0"><tspan>NaN</tspan></text></g></g><g><g></g></g><g clip-path="url(&quot;#id-134&quot;)"><g></g></g></g></g><g><g></g></g><g role="button" focusable="true" opacity="0" visibility="hidden" aria-hidden="true" transform="translate(322,-3)" aria-labelledby="id-37-title"><g fill="#6794dc" stroke="#ffffff" fill-opacity="1" stroke-opacity="0" transform="translate(0,8)"><path d="M17,0 L18,0 a17,17 0 0 1 17,17 L35,17 a17,17 0 0 1 -17,17 L17,34 a17,17 0 0 1 -17,-17 L0,17 a17,17 0 0 1 17,-17 Z"></path></g><g transform="translate(9,9)"><g stroke="#ffffff" style="pointer-events: none;" transform="translate(0,8)"><path d=" M0,0  L11,0 " transform="translate(2.5,7.5)"></path></g><g fill="#000000" style="pointer-events: none;" transform="translate(17,8)"><g display="none"></g></g></g><title id="id-37-title">Zoom Out</title></g></g></g><g><g></g></g><g transform="translate(362,0)"><g></g></g></g></g><g><g></g></g><g transform="translate(0,250)"><g></g></g></g></g></g></g></g><desc id="id-22-description">Chart</desc></g><g><g><g role="tooltip" visibility="hidden" opacity="0"><g fill="#ffffff" fill-opacity="0.9" stroke-width="1" stroke-opacity="1" stroke="#ffffff" filter="url(&quot;#filter-id-56&quot;)" style="pointer-events: none;" transform="translate(0,6)"><path d="M3,0 L3,0 L0,-6 L13,0 L21,0 a3,3 0 0 1 3,3 L24,8 a3,3 0 0 1 -3,3 L3,11 a3,3 0 0 1 -3,-3 L0,3 a3,3 0 0 1 3,-3"></path></g><g><g fill="#ffffff" style="pointer-events: none;" transform="translate(12,6)"><g transform="translate(0,7)" display="none"></g></g></g></g><g visibility="hidden" display="none"><g fill="#ffffff" opacity="1"><rect width="392" height="280"></rect></g><g><g><g><g stroke-opacity="1" fill="#f3f3f3" fill-opacity="0.8"><g><g><path d=" M53,0  a53,53,0,0,1,-106,0 a53,53,0,0,1,106,0 M42,0  a42,42,0,0,0,-84,0 a42,42,0,0,0,84,0 L42,0 "></path></g></g></g><g stroke-opacity="1" fill="#000000" fill-opacity="0.2"><g><g><path d=""></path></g></g></g><g fill="#000000" fill-opacity="0.4"><g display="none"></g></g></g></g></g></g><g opacity="0.3" aria-labelledby="id-71-title" filter="url(&quot;#filter-id-71&quot;)" style="cursor: pointer;" transform="translate(0,259)"><g fill="#ffffff" opacity="0"><rect width="66" height="21"></rect></g><g><g shape-rendering="auto" fill="none" stroke-opacity="1" stroke-width="1.7999999999999998" stroke="#3cabff"><path d=" M15,15  C17.4001,15 22.7998,15.0001 27,15 C31.2002,14.9999 33.2999,6 36,6 C38.7001,6 38.6999,10.5 40.5,10.5 C42.3001,10.5 42.2999,6 45,6 C47.7001,6 50.9999,14.9999 54,15 C57.0002,15.0001 58.7999,15 60,15"></path></g><g shape-rendering="auto" fill="none" stroke-opacity="1" stroke-width="1.7999999999999998" stroke="url(&quot;#gradient-id-74&quot;)"><path d=" M6,15  C8.2501,15 9.7498,15.0001 15,15 C20.2502,14.9999 20.7748,3.6 27,3.6 C33.2252,3.6 33.8998,14.9999 39.9,15 C45.9002,15.0001 45.9748,15 51,15 C56.0252,15 57.7499,15 60,15"></path></g></g><title id="id-71-title">Chart created using amCharts library</title></g><g role="tooltip" visibility="hidden" opacity="0" transform="translate(97.80168936343344,105.9850960244554)"><g fill="#000000" fill-opacity="1" stroke-width="1" stroke-opacity="1" stroke="#000000" style="pointer-events: none;" transform="translate(-10,-15)"><path d="M0,0 L20,0 a0,0 0 0 1 0,0 L20,10 a0,0 0 0 1 -0,0 L20,10 L15,10 L10,15 L5,10 L0,10 a0,0 0 0 1 -0,-0 L0,0 a0,0 0 0 1 0,-0"></path></g><g><g fill="#ffffff" style="pointer-events: none;" transform="translate(0,-15)"><g transform="translate(0,5)" display="none"></g></g></g></g></g></g></g></g></svg></div></div>
                            <div class="row mt-4">
                                <div class="col-lg-6 col-md-6 col-6">
                                    <div class="media align-items-center">
                                        <div class="icon iq-icon-box bg-primary rounded icon-statistic">
                                            <i class="las la-long-arrow-alt-down">
                                            </i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <p class="mb-0">Downloads</p>
                                            <h5>12,594</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-6">
                                    <div class="media align-items-center">
                                        <div class="icon iq-icon-box bg-light rounded icon-statistic">
                                            <i class="las la-long-arrow-alt-up">
                                            </i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <p class="mb-0">Uploads</p>
                                            <h5>1,458</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card card-block card-stretch card-height plan-bg">
                        <div class="card-body">
                            <h4 class="mb-3 text-white">Unlock Your plan</h4>
                            <p>Expanded Storage,Access To
                                <br>More Features On CloudBOX</p>
                            <div class="row align-items-center justify-content-between">
                                <div class="col-6 go-white ">
                                    <a href="#" class="btn d-inline-block mt-5">Go Premium</a>
                                </div>
                                <div class="col-6">
                                    <img src="../../assets/images/layouts/mydrive/lock-bg.png" class="img-fluid" alt="image1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title">
                                <h4 class="card-title">Storage</h4>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="dropdown">
                      <span class="dropdown-toggle btn dropdown-bg border border-primary text-primary rounded" id="dropdownMenuButton11" data-toggle="dropdown">Monthly
                        <i class="ri-arrow-down-s-line ml-1"></i>
                      </span>
                                    <div class="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton11">
                                        <a class="dropdown-item" href="#">Monthly</a>
                                        <a class="dropdown-item" href="#">Weekly</a>
                                        <a class="dropdown-item" href="#">Yearly</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0" style="position: relative;">
                            <div id="layout-1-chart2" style="min-height: 240px;">
                                <div id="apexcharts7uz4s767" class="apexcharts-canvas apexcharts7uz4s767 light" style="width: 853px; height: 225px;"><svg id="SvgjsSvg1001" width="853" height="225" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1003" class="apexcharts-inner apexcharts-graphical" transform="translate(27, 40)"><defs id="SvgjsDefs1002"><clipPath id="gridRectMask7uz4s767"><rect id="SvgjsRect1009" width="809.15625" height="165" x="-2.5" y="-2.5" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath><clipPath id="gridRectMarkerMask7uz4s767"><rect id="SvgjsRect1010" width="806.15625" height="162" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath></defs><line id="SvgjsLine1008" x1="0" y1="0" x2="0" y2="160" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="160" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1017" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1018" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1019" font-family="Helvetica, Arial, sans-serif" x="0" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1020" style="font-family: Helvetica, Arial, sans-serif;">Jan</tspan><title>Jan</title></text><text id="SvgjsText1021" font-family="Helvetica, Arial, sans-serif" x="100.51953125" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1022" style="font-family: Helvetica, Arial, sans-serif;">Feb</tspan><title>Feb</title></text><text id="SvgjsText1023" font-family="Helvetica, Arial, sans-serif" x="201.0390625" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1024" style="font-family: Helvetica, Arial, sans-serif;">Mar</tspan><title>Mar</title></text><text id="SvgjsText1025" font-family="Helvetica, Arial, sans-serif" x="301.55859375" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1026" style="font-family: Helvetica, Arial, sans-serif;">Apr</tspan><title>Apr</title></text><text id="SvgjsText1027" font-family="Helvetica, Arial, sans-serif" x="402.078125" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1028" style="font-family: Helvetica, Arial, sans-serif;">May</tspan><title>May</title></text><text id="SvgjsText1029" font-family="Helvetica, Arial, sans-serif" x="502.59765625" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1030" style="font-family: Helvetica, Arial, sans-serif;">Jun</tspan><title>Jun</title></text><text id="SvgjsText1031" font-family="Helvetica, Arial, sans-serif" x="603.1171875" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1032" style="font-family: Helvetica, Arial, sans-serif;">Jul</tspan><title>Jul</title></text><text id="SvgjsText1033" font-family="Helvetica, Arial, sans-serif" x="703.63671875" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1034" style="font-family: Helvetica, Arial, sans-serif;">Aug</tspan><title>Aug</title></text><text id="SvgjsText1035" font-family="Helvetica, Arial, sans-serif" x="804.15625" y="189" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1036" style="font-family: Helvetica, Arial, sans-serif;">Sep</tspan><title>Sep</title></text></g><line id="SvgjsLine1037" x1="0" y1="161" x2="804.15625" y2="161" stroke="#78909c" stroke-dasharray="0" stroke-width="1"></line></g><g id="SvgjsG1046" class="apexcharts-grid"><g id="SvgjsG1047" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1056" x1="0" y1="0" x2="804.15625" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1057" x1="0" y1="32" x2="804.15625" y2="32" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1058" x1="0" y1="64" x2="804.15625" y2="64" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1059" x1="0" y1="96" x2="804.15625" y2="96" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1060" x1="0" y1="128" x2="804.15625" y2="128" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1061" x1="0" y1="160" x2="804.15625" y2="160" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG1048" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1049" x1="100.51953125" y1="161" x2="100.51953125" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1050" x1="201.0390625" y1="161" x2="201.0390625" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1051" x1="301.55859375" y1="161" x2="301.55859375" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1052" x1="402.078125" y1="161" x2="402.078125" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1053" x1="502.59765625" y1="161" x2="502.59765625" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1054" x1="603.1171875" y1="161" x2="603.1171875" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1055" x1="703.63671875" y1="161" x2="703.63671875" y2="167" stroke="#78909c" stroke-dasharray="0" class="apexcharts-xaxis-tick"></line><rect id="SvgjsRect1062" width="804.15625" height="32" x="0" y="0" rx="0" ry="0" fill="#f3f3f3" opacity="0.5" stroke-width="0" stroke="none" stroke-dasharray="0" class="apexcharts-gridRow"></rect><rect id="SvgjsRect1063" width="804.15625" height="32" x="0" y="32" rx="0" ry="0" fill="transparent" opacity="0.5" stroke-width="0" stroke="none" stroke-dasharray="0" class="apexcharts-gridRow"></rect><rect id="SvgjsRect1064" width="804.15625" height="32" x="0" y="64" rx="0" ry="0" fill="#f3f3f3" opacity="0.5" stroke-width="0" stroke="none" stroke-dasharray="0" class="apexcharts-gridRow"></rect><rect id="SvgjsRect1065" width="804.15625" height="32" x="0" y="96" rx="0" ry="0" fill="transparent" opacity="0.5" stroke-width="0" stroke="none" stroke-dasharray="0" class="apexcharts-gridRow"></rect><rect id="SvgjsRect1066" width="804.15625" height="32" x="0" y="128" rx="0" ry="0" fill="#f3f3f3" opacity="0.5" stroke-width="0" stroke="none" stroke-dasharray="0" class="apexcharts-gridRow"></rect><line id="SvgjsLine1068" x1="0" y1="160" x2="804.15625" y2="160" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1067" x1="0" y1="1" x2="0" y2="160" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1012" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1013" class="apexcharts-series" seriesName="Desktops" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1016" d="M0 160L100.51953125000001 80L201.03906250000003 112L301.55859375 0L402.07812500000006 3.1999999999999886L502.59765625000006 112L603.1171875 16L703.63671875 128L804.1562500000001 80C804.1562500000001 80 804.1562500000001 80 804.1562500000001 80 " fill="none" fill-opacity="1" stroke="rgba(143,147,246,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask7uz4s767)" pathTo="M 0 160L 100.51953125000001 80L 201.03906250000003 112L 301.55859375 0L 402.07812500000006 3.1999999999999886L 502.59765625000006 112L 603.1171875 16L 703.63671875 128L 804.1562500000001 80" pathFrom="M -1 192L -1 192L 100.51953125000001 192L 201.03906250000003 192L 301.55859375 192L 402.07812500000006 192L 502.59765625000006 192L 603.1171875 192L 703.63671875 192L 804.1562500000001 192"></path><g id="SvgjsG1014" class="apexcharts-series-markers-wrap"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1074" r="0" cx="0" cy="0" class="apexcharts-marker wrfjgn106 no-pointer-events" stroke="#ffffff" fill="#8f93f6" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g><g id="SvgjsG1015" class="apexcharts-datalabels"></g></g></g><line id="SvgjsLine1069" x1="0" y1="0" x2="804.15625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1070" x1="0" y1="0" x2="804.15625" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1071" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1072" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1073" class="apexcharts-point-annotations"></g></g><text id="SvgjsText1004" font-family="Helvetica, Arial, sans-serif" x="10" y="16" text-anchor="start" dominant-baseline="auto" font-size="14px" font-weight="regular" fill="#373d3f" class="apexcharts-title-text" style="font-family: Helvetica, Arial, sans-serif; opacity: 1;"></text><rect id="SvgjsRect1007" width="0" height="0" x="0" y="0" rx="0" ry="0" fill="#fefefe" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect><g id="SvgjsG1038" class="apexcharts-yaxis" rel="0" transform="translate(-6, 0)"><g id="SvgjsG1039" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1040" font-family="Helvetica, Arial, sans-serif" x="20" y="41.5" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">60</text><text id="SvgjsText1041" font-family="Helvetica, Arial, sans-serif" x="20" y="73.6" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">50</text><text id="SvgjsText1042" font-family="Helvetica, Arial, sans-serif" x="20" y="105.69999999999999" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">40</text><text id="SvgjsText1043" font-family="Helvetica, Arial, sans-serif" x="20" y="137.79999999999998" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">30</text><text id="SvgjsText1044" font-family="Helvetica, Arial, sans-serif" x="20" y="169.89999999999998" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">20</text><text id="SvgjsText1045" font-family="Helvetica, Arial, sans-serif" x="20" y="201.99999999999997" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="regular" fill="#373d3f" class="apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">10</text></g></g></svg><div class="apexcharts-legend"></div><div class="apexcharts-tooltip light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group"><span class="apexcharts-tooltip-marker" style="background-color: rgb(143, 147, 246);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-label"></span><span class="apexcharts-tooltip-text-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom light"><div class="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div></div></div>
                            <div class="resize-triggers"><div class="expand-trigger"><div style="width: 894px; height: 249px;"></div></div><div class="contract-trigger"></div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style >

</style>