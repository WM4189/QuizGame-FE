import { Header, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white"
};

function LandingPage(){

    return(  
        <div id="homeNav">
    <Header as='h2' icon>
        <Icon name='book'/>
        Study Buddy
        <Header.Subheader >
        Learning is Fun
        </Header.Subheader>
        <div id="homeNav">
        <NavLink
			to="/html"
			exact
			style={linkStyles}
		  >
		  HTML
		</NavLink>
        <NavLink
			to="/css"
			exact
			style={linkStyles}
		  >
		  CSS
		</NavLink>
        <NavLink
			to="/javaScript"
			exact
			style={linkStyles}
		  >
		  JS
		</NavLink>
        <NavLink
			to="/python"
			exact
			style={linkStyles}
		  >
		  Python
		</NavLink>
		<NavLink
			to="/sql"
			exact
			style={linkStyles}
		  >
		  SQL
		</NavLink>
        <NavLink
			to="/java"
			exact
			style={linkStyles}
		  >
		  Java
		</NavLink>
        <NavLink
			to="/cplus"
			exact
			style={linkStyles}
		  >
		  C++
		</NavLink>
        </div>
    </Header>
    </div>
    )
}

export default LandingPage;