import React from 'react'

//rafce
const Footer = () => {
    return (
        <div class="container">
            <footer style={{backgroundColor:"#18c4f4"}} class="page-footer font-small blue pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">About My Company</h5>
                            <p>Tempor id ad commodo pariatur fugiat laboris incididunt do commodo et dolore enim dolore elit. Enim sint velit ipsum adipisicing minim sint dolore dolor. Nulla excepteur nisi ea ipsum dolore aliqua culpa quis eiusmod nulla nulla.</p>

                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3"></hr>

                        <div class="col-md-3 mb-md-0 mb-3">

                            <h5 class="text-uppercase">Useful Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">Services</a>
                                </li>
                                <li>
                                    <a href="#!">Work with Us</a>
                                </li>
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>
                            </ul>

                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Social Media</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Facebook</a>
                                </li>
                                <li>
                                    <a href="#!">Instagram</a>
                                </li>
                                <li>
                                    <a href="#!">Twitter</a>
                                </li>
                                <li>
                                    <a href="#!">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">©2022 Copyright:
                <a href="/"> Dev</a>
                </div>
            </footer>
        </div>
    )
}

// class Footer extends React.Component {
//     render() {
//         return <h1> Hi</h1>
//     }
// }

export default Footer