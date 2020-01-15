import React from 'react';
import { Loading } from './LoadingComponent';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish, onClick }) {
    console.log('render menu item---------', dish, onClick)
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} />
            <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
            );
        }
    
    
        const Menu = (props) => {
            console.log('menu props-----------', props)

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
            </div>
            );
            });
            if (props.dishes.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.dishes.errMess) {
                return(
                    <div className="container">
                        <div className="row"> 
                            <div className="col-12">
                                <h4>{props.dishes.errMess}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            else 
            return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
            );
                }
                
export default Menu;