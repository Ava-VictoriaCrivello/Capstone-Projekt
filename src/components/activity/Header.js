import { StyleHeader,Nav } from '.styles/Header.styles';

export default function Header() {
    return (
    <StyleHeader>
        <Nav>
        <img width={200}
         height={200}
         src="./images/logo.png" alt="Logo"/>
         <h1> Struct your Day</h1>
        </Nav>
        <h2>Deine Zeit des Tages optimal genutzt!</h2>
    </StyleHeader>
        
        )
}