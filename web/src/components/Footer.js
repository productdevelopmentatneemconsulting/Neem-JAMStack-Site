import React from 'react'
import Grid from '@material-ui/core/Grid';

import {Link} from 'gatsby';
function Footer() {
    return (

        <Grid container>

            <div className="footer-div">

                <div className="footer-div-content">
                    <Grid container>
                        <Grid item md={8} xs={12}>
                            © 2020 Neem Consulting. All rights reserved.

                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Link style={{marginLeft:"10px",color:"#fff",textDecoration:"none"}} to="/cookiePolicy">
                                Cookie Policy</Link>
                            <Link style={{marginLeft:"10px",color:"#fff",textDecoration:"none"}} to="/privacyPolicy">
                                Privacy Policy</Link>
                        </Grid>
                    </Grid>
                </div>

            </div>

        </Grid>

    )
}

export default Footer
