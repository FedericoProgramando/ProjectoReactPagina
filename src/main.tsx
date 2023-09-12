import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/General/index.css'
import Navbar from './Components/Navbar'
import './Components/Navbar/style.css'
import { Container } from './Components/Container/Index'
import './Components/Container/style.css'
import { Service } from './Components/Service'
import './Components/Service/style.css'
import { Plan } from './Components/Plan'
import './Components/Plan/style.css'
import { Features } from './Components/Feactures'
import './Components/Feactures/style.css'
import { Location } from './Components/Location'
import './Components/Location/style.css'
import { Customers } from './Components/Customers'
import './Components/Customers/style.css'
import { Form } from './Components/Form'
import './Components/Form/style.css'
import { Footer } from './Components/Footer'
import './Components/Footer/style.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Navbar/>
    <Container/>
    <Service/>
    <Features/>
    <Plan/>
    <Location/>
    <Customers/>
    <Form/>
    <Footer/>
  </React.Fragment>
 ,
)
