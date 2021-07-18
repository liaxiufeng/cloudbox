<template>
    <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title"><h4 class="card-title">User List</h4></div>
                        </div>
                        <div class="card-body">
                            <div class="row justify-content-between">
                                <div class="col-sm-6 col-md-6">
                                    <div id="user_list_datatable_info" class="dataTables_filter">
                                        <form class="mr-3 position-relative">
                                            <div class="form-group mb-0"><input type="search" class="form-control"
                                                                                id="exampleInputSearch"
                                                                                placeholder="Search"
                                                                                aria-controls="user-list-table"></div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6">
                                    <div class="user-list-files d-flex"><a class="bg-primary" href="">Print </a><a
                                            class="bg-primary" href="">Excel </a><a class="bg-primary" href="">Pdf </a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table id="user-list-table" class="table table-striped table-bordered mt-4 " role="grid"
                                       aria-describedby="user-list-page-info">
                                    <thead>
                                    <tr>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Company</th>
                                        <th scope="col">Join Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/01.jpg" alt="profile"></td>
                                        <td>Anna Sthesia</td>
                                        <td>(760) 756 7568</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="660708080715120e03150f0726010b070f0a4805090b">[email&#160;protected]</a>
                                        </td>
                                        <td>USA</td>
                                        <td><span class="badge iq-bg-primary">Active</span></td>
                                        <td>Acme Corporation</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/02.jpg" alt="profile"></td>
                                        <td>Brock Lee</td>
                                        <td>+62 5689 458 658</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="4c2e3e232f272029290c2b212d2520622f2321">[email&#160;protected]</a>
                                        </td>
                                        <td>Indonesia</td>
                                        <td><span class="badge iq-bg-primary">Active</span></td>
                                        <td>Soylent Corp</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/03.jpg" alt="profile"></td>
                                        <td>Dan Druff</td>
                                        <td>+55 6523 456 856</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="7a1e1b141e080f1c1c3a1d171b131654191517">[email&#160;protected]</a>
                                        </td>
                                        <td>Brazil</td>
                                        <td><span class="badge iq-bg-warning">Pending</span></td>
                                        <td>Umbrella Corporation</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/04.jpg" alt="profile"></td>
                                        <td>Hans Olo</td>
                                        <td>+91 2586 253 125</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="563e373825393a3916313b373f3a7835393b">[email&#160;protected]</a>
                                        </td>
                                        <td>India</td>
                                        <td><span class="badge iq-bg-danger">Inactive</span></td>
                                        <td>Vehement Capital</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/05.jpg" alt="profile"></td>
                                        <td>Lynn Guini</td>
                                        <td>+27 2563 456 589</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="fc908592929b89959295bc9b919d9590d29f9391">[email&#160;protected]</a>
                                        </td>
                                        <td>Africa</td>
                                        <td><span class="badge iq-bg-primary">Active</span></td>
                                        <td>Massive Dynamic</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/06.jpg" alt="profile"></td>
                                        <td>Eric Shun</td>
                                        <td>+55 25685 256 589</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="93f6e1faf0e0fbe6fdd3f4fef2faffbdf0fcfe">[email&#160;protected]</a>
                                        </td>
                                        <td>Brazil</td>
                                        <td><span class="badge iq-bg-warning">Pending</span></td>
                                        <td>Globex Corporation</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/07.jpg" alt="profile"></td>
                                        <td>aaronottix</td>
                                        <td>(760) 765 2658</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="7e1c0b1a09170d1b0c3e07131f1712501d1113">[email&#160;protected]</a>
                                        </td>
                                        <td>USA</td>
                                        <td><span class="badge iq-bg-info">Hold</span></td>
                                        <td>Acme Corporation</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/08.jpg" alt="profile"></td>
                                        <td>Marge Arita</td>
                                        <td>+27 5625 456 589</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="2b464a594c4e4a59425f4a6b4c464a424705484446">[email&#160;protected]</a>
                                        </td>
                                        <td>Africa</td>
                                        <td><span class="badge iq-bg-success">Complite</span></td>
                                        <td>Vehement Capital</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><img class="rounded img-fluid avatar-40"
                                                                     src="../../../assets/images/user/09.jpg" alt="profile"></td>
                                        <td>Bill Dabear</td>
                                        <td>+55 2563 456 589</td>
                                        <td><a href="" class="__cf_email__"
                                               data-cfemail="a2c0cbcecec6c3c0c7c3d0e2c5cfc3cbce8cc1cdcf">[email&#160;protected]</a>
                                        </td>
                                        <td>Brazil</td>
                                        <td><span class="badge iq-bg-primary">active</span></td>
                                        <td>Massive Dynamic</td>
                                        <td>2019/12/01</td>
                                        <td>
                                            <div class="flex align-items-center list-user-action"><a
                                                    class="iq-bg-primary" data-toggle="tooltip" data-placement="top"
                                                    title="" data-original-title="Add" href="#"><i
                                                    class="ri-user-add-line"></i></a><a class="iq-bg-primary"
                                                                                        data-toggle="tooltip"
                                                                                        data-placement="top" title=""
                                                                                        data-original-title="Edit"
                                                                                        href="#"><i
                                                    class="ri-pencil-line"></i></a><a class="iq-bg-primary"
                                                                                      data-toggle="tooltip"
                                                                                      data-placement="top" title=""
                                                                                      data-original-title="Delete"
                                                                                      href="#"><i
                                                    class="ri-delete-bin-line"></i></a></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row justify-content-between mt-3">
                                <div id="user-list-page-info" class="col-md-6"><span>Showing 1 to 5 of 5 entries</span>
                                </div>
                                <div class="col-md-6">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end mb-0">
                                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"
                                                                              aria-disabled="true">Previous</a></li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserList"
    }
</script>

<style scoped>

</style>