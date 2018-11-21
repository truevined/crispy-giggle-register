import React, { Component, createElement as h, createRef } from 'react';
import logo from './logo.svg';
import {
	Button,
	Container, Row, Col,
	Card, CardImg, CardText, CardBody,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

class App extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            isSubmittable: false,
            invalidColor: false,
			
            bgColor: '#1B2839',
            textColor: '#ffffff',
            accentColor: '#59BAE4',
            accentColorHover: '#1e97e5',
            darkAccentColor: '#2f5d8f',
            scannerBg: '#000000',
            welcomeMsgColor: '#090c0f',
        };

        this.colorRef = createRef();
        this.valueRef = createRef();
    }
	
    render() {
        return h('div', {className: "App" },
            h('Navbar', {color: "light", className: "header"},
                h("span", {className: "sign-out"}, "Sign Out"),
			    h("span", {className: "settings"}, "Settings"),
                h('div', { 
						className: "title", 
						value: "$0", 
					}, "Crispy Giggle Register"
				),
            ),
			h(Container, {className:"description-total" },
			  h(Row, null,	
				h(Col, {className:"description", md:"6"}, 
					h("h2", null, "Description"), 
					h("hr"),
					h("div", {className:"to-buy"}, "Empty List")
				),
				
				h(Col, {className:"total", md:"6"}, 
					h("div", {className:"sub-dis-tax"},
						h("h2", null, "Payment"), 
						h("hr"),
					
						h("div", null,
							h("span", {className:"span-text"},"Subtotal "),
							h("span", {className:"span-value"},"0"),
						),

						h("div", null,
							h("span", {className:"dis-text"},"Discount "),
							h("span", {className:"dis-value"},"0"),
						),
						
						h("div", null,
							h("span", {className:"tax-text"},"Tax Total "),
							h("span", {className:"tax-value"},"0"),
						),
							
						h("h1", {className:"cost"}, "0.00"),
						
						h("hr"),
						h(Button, {className:"credit", color:"primary"}, "Credit"),
						h(Button, {className:"debit", color:"primary"}, "Debit"),
						h(Button, {className:"cash", color:"secondary"}, "Cash"),
						
					),
				),
			  ),
			),
			
			h(Container, {className:"foodables" },
				h(Row, {className:"items"}, 
					h(Button, {className:"groceries"}, "Grocery Item 1"),
					h(Button, {className:"groceries"}, "Grocery Item 2"),
					h(Button, {className:"groceries"}, "Grocery Item 3"),
					
				),
			),
         );
    }
}

export default App;
