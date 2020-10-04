import React, { Component } from 'react'
import '../styles/Main.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
    constructor() {
        super()

        this.state = {
            money: localStorage.money
        }

        this.clickSans = this.clickSans.bind(this)
    }

    clickSans() {
        const m = Number(localStorage.money)
        if (m >= 1000000000000000) return
        if (m < 0) {
            localStorage.money = '0'
            return
        }
        
        localStorage.money = String(m + Number(localStorage.add))

        this.setState({
            money: localStorage.money
        })
    }

    render(){
        return (
            <>
                <img onClick = {this.clickSans} src = {process.env.PUBLIC_URL + '/sans.gif'} alt = 'Touch This!' />

                <Card className = 'money'>
                    <CardContent>
                        <Typography variant = 'h5' component = 'h2'>
                            {this.state.money} CLICKS
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default Main