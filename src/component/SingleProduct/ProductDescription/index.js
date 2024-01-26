import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductDescription = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <section className="single-product-description section-padding pt-0">
            <Grid container spacing={3} className="websitePadding">
                <Grid item md={12} lg={12} className="col-md-12 col-lg-12">
                    <Grid className="product-description-tab">
                        <ul className="nav nav-pills " id="pills-tab" role="tablist">
                            {/*<Tabs defaultActiveKey="Description" id="uncontrolled-tab-example">*/}
                            {/*    <Tab eventKey="Description" title="Description" tabClassName="nav-link">*/}
                            {/*        <Grid className="tab-content" id="pills-tabContent">*/}
                            {/*            <Grid className="tab-pane fade show active" id="tab1" role="tabpanel">*/}
                            {/*                <p>Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
                            {/*                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
                            {/*                    exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
                            {/*                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit*/}
                            {/*                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                            {/*                    cupidatat non proident, sunt in culpa qui officia deserunt mollit*/}
                            {/*                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus error*/}
                            {/*                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                            {/*                    eaque ipsa quae ab illo inventore veritatis</p>*/}
                            {/*            </Grid>*/}
                            {/*        </Grid>*/}
                            {/*    </Tab>*/}
                            {/*    <Tab eventKey="Customer Review" title="Customer Review">*/}
                            {/*        <Grid className="tab-content" id="pills-tabContent">*/}
                            {/*            <Grid className="tab-pane fade show active" id="tab1" role="tabpanel">*/}
                            {/*                <p>Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
                            {/*                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
                            {/*                    exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
                            {/*                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit*/}
                            {/*                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                            {/*                    cupidatat non proident, sunt in culpa qui officia deserunt mollit*/}
                            {/*                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus error*/}
                            {/*                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                            {/*                    eaque ipsa quae ab illo inventore veritatis</p>*/}
                            {/*            </Grid>*/}
                            {/*        </Grid>*/}
                            {/*    </Tab>*/}
                            {/*    <Tab eventKey="Product Tags" title="Product Tags">*/}
                            {/*        <Grid className="tab-content" id="pills-tabContent">*/}
                            {/*            <Grid className="tab-pane fade show active" id="tab1" role="tabpanel">*/}
                            {/*                <p>Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore*/}
                            {/*                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
                            {/*                    exercitation ullamco laboris nisi ut aliquip ex ea commodo*/}
                            {/*                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit*/}
                            {/*                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                            {/*                    cupidatat non proident, sunt in culpa qui officia deserunt mollit*/}
                            {/*                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus error*/}
                            {/*                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                            {/*                    eaque ipsa quae ab illo inventore veritatis</p>*/}
                            {/*            </Grid>*/}
                            {/*        </Grid>*/}
                            {/*    </Tab>*/}
                            {/*</Tabs>*/}
                        </ul>

                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tabmenu">
                            <Tab label="Description" {...a11yProps(0)} />
                            <Tab label="Customer Review" {...a11yProps(1)} />
                            <Tab label="Product Tags" {...a11yProps(2)} />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Sctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis
                        </TabPanel>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default ProductDescription;