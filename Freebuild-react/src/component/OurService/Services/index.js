import React, {Component} from "react";
import OurService1 from "../../../images/wedo/w1.png";
import OurService2 from "../../../images/wedo/w2.png";
import OurService3 from "../../../images/wedo/w3.png";
import OurService4 from "../../../images/wedo/w4.png";
import Grid from "@material-ui/core/Grid";

const ServiceItem = [
    {
        id: 1,
        title: 'Commercial Construction',
        image: OurService1,
        description: 'Expertly managing complex commercial projects, ensuring quality and timely delivery in the bustling heart of NYC.'
    },
    {
        id: 2,
        title: 'High-End Residential Renovation',
        image: OurService2,
        description: 'Transforming NYC living spaces into luxurious homes with our bespoke renovation and interior design services.'
    },
    {
        id: 3,
        title: 'Historic Building Restoration',
        image: OurService3,
        description: 'Preserving the charm of NYC’s historic architecture with specialized restoration and conservation techniques.'
    },
    {
        id: 4,
        title: 'Eco-Friendly Building Solutions',
        image: OurService4,
        description: 'Innovative and sustainable building practices for environmentally conscious construction in New York City.'
    },
    {
        id: 5,
        title: 'Urban Infrastructure Development',
        image: OurService1,
        description: 'Developing robust infrastructure to support the dynamic urban landscape of New York City.'
    },
    {
        id: 6,
        title: 'Retail and Hospitality Construction',
        image: OurService2,
        description: 'Creating vibrant retail and hospitality spaces that capture the unique spirit of NYC.'
    },
    {
        id: 7,
        title: 'Office and Workspace Design',
        image: OurService1,
        description: 'Designing and constructing modern, functional workspaces tailored to the unique needs of NYC businesses.'
    },
    {
        id: 8,
        title: 'Luxury Condo and Apartment Builds',
        image: OurService4,
        description: 'Crafting luxurious and modern living spaces, setting new standards in high-end condo and apartment construction.'
    },
];

class Services extends Component {
    render() {
        return (
            <section className="what-we-do section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={1}></Grid>
                    <Grid item lg={10} xs={12} className="text-center">
                        <Grid className="what-we-do-title">
                            <span>Our Expertise</span>
                            <h2>Building Excellence in New York City</h2>
                            <p>From towering skyscrapers to bespoke residential homes, we deliver exceptional construction projects with precision and integrity.</p>
                        </Grid>
                    </Grid>
                    {ServiceItem.map(service => {
                        return (
                            <Grid key={service.id} item md={3} sm={6} className="text-center">
                                <Grid className="single-we-do">
                                    <img src={service.image} alt={service.title}/>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </section>
        )
    }
}


export default Services;